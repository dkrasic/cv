## Docker

In `compose.yaml` we have defined our services, volumes and their dependancies. Each repository (`./frontend` and `./backend-nest`) have their own `Dockerfile` and `.dockerignore` files.

### Starting the app:

```shell
# Navigate to the root and run the following command
docker-compose up
```

### Killing the app:

```shell
# Navigate to the root and run the following command
docker-compose down --rmi all
# It will kill all containers and delete all images
```
