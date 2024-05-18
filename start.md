# Start dessas aplicações

* Clone o projeto learning-api

```
git clone https://github.com/joneng2016/learning-api
```

e/ou dentro do diretório, execute:

```
git pull origin master;
```

* Entre na raiz do diretório
* Execute o docker da user-api

```
cd user-api;
docker build --no-cache -t user-api:latest .;
cd ..;
```

* Execute o docker da product-api

```
cd product-api;
docker build --no-cache -t product-api:latest .;
cd ..;
```

* Suba a user-api

```
docker run -p 3004:3004 --network host user-api:latest;
```


* Abra um novo terminal e suba a product-api

```
docker run -p 3005:3005 --network host product-api:latest;
```


* Apenas se o seu computador não tiver mysql instalado
```
docker run --name root --rm -e MYSQL_ROOT_PASSWORD=positivo -e MYSQL_DATABASE=positivo -p 3306:3306 -it mysql:8.0;
```


* Então abra o banco em uma ide e execute

https://github.com/joneng2016/learning-api/blob/master/db/scripts.sql