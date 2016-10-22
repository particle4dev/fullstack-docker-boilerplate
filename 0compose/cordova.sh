#!/bin/bash
# http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_03.html
# https://github.com/tj/git-extras.git

source ./0compose/utils.sh
source ./0compose/constant.sh

VERSION="6.3.1"

getCordovaCurrentVersion () {
  checkIfCordovaExists
  VERSION=`cordova --version`
}

installCordova () {
  checkIfNpmExists
  checkIfCordovaDontExists
  npm install -g cordova@${VERSION}
}

uninstallCordova () {
  checkIfNpmExists
  checkIfCordovaExists
  npm uninstall -g cordova@${VERSION}
}

buildCordova () {
  checkIfCordovaExists
  echo "build not implement yet"
}

devCordova () {
  checkIfCordovaExists
  echo "dev not implement yet"
}

case "$1" in
  install)
    installCordova
    ;;

  uninstall)
    uninstallCordova
    ;;

  build)
    buildCordova
    ;;

  dev)
    devCordova
    ;;

  *)
    echo $"Usage: $0 {install|uninstall|build|dev}"
    exit 1

esac
