#!/bin/bash

cleanup () {
  echo "Remove old images"
  # listDockerImages=$(docker images | grep $IP/$NAMEDOCKER | grep '2 weeks ago\|3 weeks ago\|4 weeks ago'| awk '{ print $3 }')
  listDockerImages=$(docker images | grep $IP/$NAMEDOCKER | tail -n +7 | awk '{ print $3 }')
  for i in "$listDockerImages"; do
    [[ ! -z  $i  ]] && docker rmi -f $i
  done
  docker rmi $(docker images | grep '<none>'  | awk '{ print $3 }')
  echo "Success cleanup"
}
cleanup
