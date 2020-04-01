#!/bin/sh

# back Dockerfile
docker build -t lperez/tomcat8 .
docker container run -it -d --name tomcat -p 8081:8080 lperez/tomcat8
docker exec -it tomcat /bin/bash

# front compose yml
docker-compose up -d