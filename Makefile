PRIVATE_REGISTRY_URL=ro.lan:5000

DOCKER_IMAGE=particle4dev/app
VERSION=0.1

.PHONY: start build dev dev-build stop rm logs exec cordova database

start: dev

build:
	docker build --tag=${DOCKER_IMAGE}:${VERSION} .

dev:
	docker-compose -f ./0compose/docker-compose.dev.yml up -d $(filter-out $@,$(MAKECMDGOALS:start=))

dev-build:
	docker-compose -f ./0compose/docker-compose.dev.yml up -d --build $(filter-out $@,$(MAKECMDGOALS:start=))

stop:
	docker-compose -f ./0compose/docker-compose.dev.yml stop

rm:
	docker-compose -f ./0compose/docker-compose.dev.yml stop
	docker-compose -f ./0compose/docker-compose.dev.yml rm -f

logs:
	docker-compose -f ./0compose/docker-compose.dev.yml logs -f $(filter-out $@,$(MAKECMDGOALS))

exec:
	./0compose/docker-compose-exec.sh $(filter-out $@,$(MAKECMDGOALS)) bash

cordova:
	./0compose/cordova.sh $(filter-out $@,$(MAKECMDGOALS))

database:
	./0compose/database.sh $(filter-out $@,$(MAKECMDGOALS))
