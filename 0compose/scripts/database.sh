#!/bin/bash
# http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_03.html
# https://github.com/tj/git-extras.git

case "$1" in
  dummy-data)
    e_arrow "insert dummy data"
    docker-compose -f ./0compose/docker-compose.yml -f ./0compose/docker-compose.dummy.yml up -d
    e_success "done"
    ;;

  clean)
    e_arrow "clean database"
    rm -rf ./0compose/data/*
    e_success "done"
    ;;

  *)
    echo $"Usage: $0 {dummy-data|clean}"
    exit 1

esac
