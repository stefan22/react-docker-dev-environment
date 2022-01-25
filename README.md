# react-docker-dev-environment

React dev environment with docker/docker-compose


Requires: docker-cli

TEST:

Create a `ui` dir with a `test file` in it.

RUN:

```
docker run -it --rm -v ${PWD}/ui:/app node:<VERSION>-alpine sh
```


It downloads a node alpine image (docker registry) then exec into the container and access the shell.       
CD into container app to find the test.txt file.

If it works then this is where you'll mount the react app.
Remove ui folder.

`
npx create-react-app ui
`

ADD Dockerfile

`
docker build -t reactdock .
`


___reactdock___ is new image off base image that can be used to run a react app.



RUN

`docker run -it --rm -v ${PWD}/ui:/app -p 3001:3000 -e CHOKIDAR_USEPOLLING=true reactdock
`




<kbd>app container</kbd>
![](/assets/images/exec.png)


<br />

<kbd>reactdock container</kbd>
![](/assets/images/reactdock.png)



