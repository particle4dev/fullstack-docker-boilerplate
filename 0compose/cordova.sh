#!/bin/bash
# http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_03.html
# https://github.com/tj/git-extras.git

source ./0compose/utils.sh

# NAMEDOCKER="particle4dev\/v2-media-cityme"

# Check for Cordova
if type_exists 'cordova'; then
  e_success "Cordova good to go"
else
  e_error "Cordova should be installed. It isn't. Aborting."
  exit 1
fi

case "$1" in
  install)
    echo "install not implement yet"
    ;;

  uninstall)
    echo "uninstall not implement yet"
    ;;

  build)
    echo "uninstall not implement yet"
    ;;

  dev)
    echo "uninstall not implement yet"
    ;;

  *)
    echo $"Usage: $0 {install|uninstall}"
    exit 1

esac
