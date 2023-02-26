# webflux-cassandra

## Запуск cassandra
```
$ cd docker/
$ docker compose up -d
```
## Запуск cqlsh в контейнере
```
$ cd docker/
$ docker compose up -d && docker compose exec -it cassandra bash
$ cqlsh -u cassandra -p cassandra
$ describe keyspaces;
```
## Запуск тестов:
```
$ brew install k6
$ k6 run -vu 100 -d 30s script.js
```
