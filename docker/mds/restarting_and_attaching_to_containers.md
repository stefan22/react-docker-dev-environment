# Restarting and Attaching to Containers

Front Docker's point of view all containers are basically the same, and the distiction made between background and or foreground containers is for the most arbritary.     
All containers run the same way, and it is always possible to detach and reattach to a container.

<img src="/images/dockarch.png" width="900" height="360" alt="Docker architecture">

### Detach from an interactive container with:

#### From Linux/MacOS

- `^P^Q` (Control P Control Q)
- Or by killing the Docker client

#### From Windows

- `^P^Q` does not work in Windows
- ^C will detach, rather than stop



### Run a container in the Background

- Containers can be started in the background with `-d` flag (***daemon mode***)
- It won't be visible but Docker collects whatever the output and logs it
- Some Docker commands require that you use the container Docker ID:
  - docker stop
  - docker rm

```
docker ps -q
```
Calling docker ps with ***q*** flag will return docker containers by ID only. It removes all other columns
from list of containers



Ex:
```
docker run -d jpetazzo/clock
```


<img src="/images/running_containers.png" alt="Containers" />


- `Docker ps`  refers to containers - it will return only ***running containers***
-  `docker ps -l`  //last container
-  `docker ps -a`  //all containers

// Terminating detach containers
-  `docker kill 123`   //kill container 
-  `docker stop abc`  //stop container
-  `docker kill 123 abc`  // terminates 2 containers

> Under ***STATUS*** you can find out if the container is running or not.  
> For example: **UP** still running, and **Exited as shown above no longer running


#### Viewing container logs

```
docker logs 123   //these are the first 3 from container's ID
```

- Avoid getting the entire log with ***tail***
- Follow logs in ***real time*** with `tail -f`

<img src="/images/docker-tail.png" alt="Docker tail">
