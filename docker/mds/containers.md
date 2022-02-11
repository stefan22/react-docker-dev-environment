# Basic Containers

![Containers](/images/jar.jpeg)


## Host and Containers are independent from each other

EX: Running an Ubuntu image container on a Linux, Mac or Windows Host

- Installing something on the ***Host***, it doesn't expose it to the ***container*** and vice-versa 
- Even when both container and host may happen to run the same Linux distro like the case here.

### Exit a container
 
 - By logging out of a shell with `^D` or `exit`

### Show docker containers

To see a list of stopped containers

```
docker ps -a
```



## Starting a new Ubuntu container

```
docker run -it ubuntu
```

- The `figlet` package will not be avail here.  This is a brand new container
- Docker will start a new container by default

### If we need it to include the figlet package everytime:

- We need to build a custom image
