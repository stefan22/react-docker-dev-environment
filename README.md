# react-docker-dev-environment

React dev environment with docker/docker-compose


Requires: docker-cli

RUN:

```
docker run -it --rm -v ${PWD}/ui:/app node:<VERSION>-alpine sh
```


It downloads a node alpine image (docker registry) then exec into the container and access the shell.
CD into container app to find the test.txt file.

If it works then this is where you'll mount the react app.


![](/assets/images/exec.png)





