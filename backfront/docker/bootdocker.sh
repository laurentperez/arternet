#!/bin/sh

# back Dockerfile
docker build -t lperez/tomcat8:0.1 .
docker container run -it -d --name tomcat -p 8081:8080 lperez/tomcat8:0.1
docker run -i -t lperez/tomcat8:0.1 /bin/bash
docker exec -it tomcat /bin/bash

# front compose yml
docker-compose up -d

# build
docker build --tag=lperez/tomcat8:0.1 .

# bind
docker run -it --mount src="$(pwd)",target=/opt/tomcat/webapps,type=bind lperez/tomcat8:0.1
