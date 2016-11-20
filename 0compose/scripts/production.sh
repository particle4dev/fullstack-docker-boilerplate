#!/bin/bash

docker-compose -f ./0compose/docker-compose.yml -f ./0compose/docker-compose.pro.yml up -d --build
