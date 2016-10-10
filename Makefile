PRIVATE_REGISTRY_URL=ro.lan:5000

DOCKER_IMAGE=particle4dev/app
VERSION=0.1

start: dev

build:
	docker build --tag=${DOCKER_IMAGE}:${VERSION} .

dev:
	docker-compose -f ./0compose/docker-compose.dev.yml up -d $(filter-out $@,$(MAKECMDGOALS:start=))

dev-build:
	docker-compose -f ./0compose/docker-compose.dev.yml up -d --build $(filter-out $@,$(MAKECMDGOALS:start=))

clean:
	rm -rf ./0compose/data/*

rm:
	docker-compose -f ./0compose/docker-compose.dev.yml stop
	docker-compose -f ./0compose/docker-compose.dev.yml rm -f

logs:
	docker-compose -f ./0compose/docker-compose.dev.yml logs -f $(filter-out $@,$(MAKECMDGOALS))

exec:
	./0compose/docker-compose-exec.sh $(filter-out $@,$(MAKECMDGOALS)) bash

dummy-data:
	docker-compose -f ./0compose/docker-compose.dummy.yml up -d
