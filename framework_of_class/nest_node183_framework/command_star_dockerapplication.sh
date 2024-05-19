docker build --no-cache -t application-api:latest .;
docker run -p 3000:3000 --network host -v $(pwd):/app application-api:latest;