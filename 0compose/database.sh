#!/bin/bash
# http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_03.html
# https://github.com/tj/git-extras.git

source ./0compose/utils.sh

case "$1" in
  dummy-data)
    docker-compose -f ./0compose/docker-compose.dummy.yml up -d
    ;;

  clean)
    rm -rf ./0compose/data/*
    ;;

  *)
    echo $"Usage: $0 {dummy-data|clean}"
    exit 1

esac
