cd product-api;
docker build --no-cache -t product-api:latest .;
cd ..;
cd user-api;
docker build --no-cache -t user-api:latest .;
cd ..;
docker run --name root --rm -e MYSQL_ROOT_PASSWORD=positivo -e MYSQL_DATABASE=positivo -p 3306:3306 -it mysql:8.0;
// sql
docker run -p 3005:3005 --network host product-api:latest;
docker run -p 3004:3004 --network host user-api:latest;
