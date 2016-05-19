# DOCKER NGINX

### TEST CON IMÁGENES
##### LEVANTAR NGINX LB
```sh
$ docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
```

##### CORRER CONTAINERS
```sh
$ docker run -d -e VIRTUAL_HOST=test.dev imagen_1
$ docker run -d -e VIRTUAL_HOST=testing.dev imagen_2
$ docker run -d -e VIRTUAL_HOST=testing.dev imagen_3
```

### TEST CON DOCKER COMPOSE
##### LEVANTAR SERVICIOS
```sh
$ docker-compose up -d
```

##### ESCALAMIENTO
```sh
$ docker-compose scale yacarini_uno=10 yacarini_dos=10
```

### TEST CON DOCKER SWARM
##### CREATE DISCOVERY TOKEN
```sh
$ export token=$(docker run --rm swarm create)
```

##### ESCALAMIENTO
```sh
$ docker-compose scale yacarini_uno=10 yacarini_dos=10
```

##### REFERENCIAS
* [Escalamiento con docker compose] [REF1]
* [Proxy Reverso con Nginx para Docker] [REF2]
* [Ngix Proxy - Containers Aislados] [REF3]


[REF1]: <https://www.brianchristner.io/how-to-scale-a-docker-container-with-docker-compose/>
[REF2]: <http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/>
[REF3]: <https://github.com/jwilder/nginx-proxy#separate-containers>





