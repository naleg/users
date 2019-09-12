#!/bin/sh

echo "Dockerizing config template..."
/bin/dockerize --template /usr/local/users/env.tmpl:/usr/local/users/.env
echo "Starting Service"
cd /usr/local/users/ && node build/app.js