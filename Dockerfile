# use a node base image
FROM node:12-slim

# set maintainer
LABEL maintainer "rajeshg1992@gmail.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:3000 || exit 1

ENV NODE_ENV production
ENV DOCKERIZE_VERSION v0.6.1
ENV PORT 3000
ENV MONGOURL mongodb://localhost:27017/users
ENV MONGOUSR mongoadmin
ENV MONGOPASS mongo
ENV LOGLEVEL INFO
COPY entrypoint.sh /entrypoint.sh
RUN     apt-get --assume-yes --quiet update && \
        apt-get --assume-yes --quiet upgrade && \
        apt-get --assume-yes --quiet install curl && \
        apt-get clean --quiet && \
        rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN curl -sL https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar zxf - -C /bin/

COPY package.json /usr/local/users/package.json

RUN cd /usr/local/users/; npm install

COPY env.tmpl /usr/local/users/env.tmpl

COPY build /usr/local/users/build
ENTRYPOINT ["bash","/entrypoint.sh"]
# tell docker what port to expose
EXPOSE 3000