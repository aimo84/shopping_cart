init: setup build

setup:
	docker compose -f ./docker-compose.yml up --build -d dynamodb-local
	docker compose -f ./docker-compose.yml up --build -d nginx redis-app php dynamodb-local dynamo-admin aws-cli

prod:
	docker compose -f ./docker-compose.yml up --build -d nginx redis-app php

build:
	docker exec -ti php composer install

migrate:
	docker exec -ti php php artisan migrate

bash:
	docker exec -ti php bash

stop:
	docker stop nginx php truemoveh-redis-app-1
