PRIVATE_REGISTRY_URL=ro.lan:5000

DOCKER_IMAGE=particle4dev/app
VERSION=0.1

start: dev

build:
	docker build --tag=${DOCKER_IMAGE}:${VERSION} .

dev:
	docker-compose up -d -f ./0compose/docker-compose.dev.yml
