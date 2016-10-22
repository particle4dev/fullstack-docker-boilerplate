#!/bin/bash

# docker build --tag=${DOCKER_IMAGE}:${VERSION} .
source ./0compose/utils.sh
source ./0compose/constant.sh

buildServer () {
  e_arrow "build server"
  docker-compose -f ./0compose/docker-compose.build.yml up -d server
  e_success "done"
}

buildClient () {
  e_arrow "build client"
  docker-compose -f ./0compose/docker-compose.build.yml up -d client
  e_success "done"
}

case "$1" in
  server)
    buildServer
    ;;

  client)
    buildClient
    ;;

  *)
    echo $"Usage: $0 {server|client}"
    exit 1

esac
