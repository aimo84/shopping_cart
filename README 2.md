check-git 200120.1651

# Truestore (TrueMove H Cart)

### Start the development server
This command serves the app at http://0.0.0.0 :

Please input these data to src/.env file (or just ask for .env from the maintainers)
or just copy src/.env.example to src/.env before you edit the data inside
Edit these environment variable inside .env file
 CLIENT_ID, CLIENT_SECRET, TOKEN_CLIENT_ID, TOKEN_CLIENT_SECRET, WEMALL_API_KEY, WEMALL_API_SECRET, X_API_AUTH, JWK_KTY, JWK_KID, JWK_USE, JWK_E, JWK_N
You may ask the maintainer for the content of the variable that you don't have.

use docker-compose up -d --build when you just clone and first build the project and please docker-compose down any docker project you ran before.
After that you can just use
docker-compose up -d

if the container db stopped, use
docker-compose build db
docker-compose up --no-deps -d db
and try to create database with the command again

```
#CREATE .env FILE BEFORE YOU USE THIS
docker-compose up -d

docker exec -it php bash

composer install
php artisan key:generate

npm install
npm run prod
```

ecommerce-api use with CLIENT_ID, CLIENT_SECRET
True ID API use with TOKEN_CLIENT_ID, TOKEN_CLIENT_SECRET
wemall API use with WEMALL_CLIENT_ID, WEMALL_CLIENT_SECRET
key from true ID login file to input JWK_KTY, JWK_KID, JWK_USE, JWK_E, JWK_N

add test for env key, use exec php then use this command "./vendor/bin/phpunit --filter EnvironmentFileTest  --testdox "
to test if the key is set properly

for staging unit test, you can use ./vendor/bin/phpunit  --testdox
or ./vendor/bin/phpunit --filter VerifyBeforeCartWlsTest  --testdox  to run file individually


### How to access
use http://0.0.0.0/api/WHATEVER_ROUTE_YOU_WANT_TO_ACCESS and they will fetch the access token automatically.
Please refer to API documentation from true api to test how it works.

### Developer directory
route is in src/routes/api.php
vue files in src/resources/js (view file included)
controller files in src/app/Http/Controllers
model files in src/app/

### Caution
When request some route, you may need to input parameter. Some parameter need to be put as url variable get (such as grant_type) and some as post body variable. You will need to send the variable with exact method or API will not work properly.

###