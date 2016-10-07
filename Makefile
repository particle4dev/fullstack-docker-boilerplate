PRIVATE_REGISTRY_URL=ro.lan:5000

DOCKER_IMAGE=particle4dev/app
VERSION=0.1

start: dev

build:
	docker build --tag=${DOCKER_IMAGE}:${VERSION} .

dev:
	docker-compose -f ./0compose/docker-compose.dev.yml up -d

dev-build:
	docker-compose -f ./0compose/docker-compose.dev.yml up -d --build

clean:
	docker-compose -f ./0compose/docker-compose.dev.yml stop
	docker-compose -f ./0compose/docker-compose.dev.yml rm -f

logs:
	docker-compose -f ./0compose/docker-compose.dev.yml logs -f

exec-server:
	./0compose/docker-compose-exec.sh server bash
