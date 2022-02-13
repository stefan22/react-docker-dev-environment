![GitHub last commit](https://img.shields.io/github/last-commit/stefan22/react-docker-dev-environment?color=red&style=flat-square) &nbsp; [![npm version](https://badge.fury.io/js/react.svg)](https://badge.fury.io/js/react) &nbsp; [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https:/github.com/stefan22/react-docker-dev-environment.git)





# React-docker-dev-environment :rocket:
> React dev environment with docker

```js
Requires: React,Node,Npm,Docker,Docker-cli

```

##### TEST:

- Create a `ui` dir with a `test file` in it.


##### RUN:

```
>$ docker run -it --rm -v ${PWD}/ui:/app node:<VERSION>-alpine sh
```


<br />


<p>
  <kbd>
    It downloads a node alpine image (docker registry) then exec into the container and access the shell.
  </kbd>


</p>

<br />


##### TEST:

- `CD` into container app, and locate `test.txt` file.
-  If found there,then remove ui folder
-  Mount React app here: `npx create-react-app ui`

##### Build docker image 

- Create Dockerfile
- Building image off node alpine: `docker build -t reactdock`
- ***reactdock*** is now a new image built off the alpine 'base' image, and
  it can be used to run a react application.



<br />



<kbd>Mounted app container</kbd>


![](/assets/images/exec.png)


<br />


------------------------------------------------


##### RUN Docker image

- Flags: it (interactive), rm (remove afterwards), v (mounting), p (ports:3001 local to env and 3000 local to container), e(env polling changes)

`docker run -it --rm -v ${PWD}/ui:/app -p 3001:3000 -e CHOKIDAR_USEPOLLING=true <imageName>
`
<br />

<kbd>Mounted reactdock container</kbd>


![](/assets/images/reactdock.png)


<br />

### Docker-compose option to build image/ run container

- Create `docker-compose` file
- Remove any running docker images, add exec flags to compose file
- Type: `docker-compose up --build`


### Running this repository

- Clone repository
- Read top/bottom if needed
- ***Only type this*** in terminal: `docker-compose up --build` to create image/ run container.


##### [Docker Docs](https://docs.docker.com/go/guides/)


:100:
