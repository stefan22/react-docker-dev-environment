
# Docker

 ![Docker](/images/docker-logo.jpeg)

Installing docker means:      
    - Installing CLI     
    - Installing Docker engine; which is the docker deamon ( background running service)     
           +   The deamon manages containers in the same way that a hypervisor  manages VMs and    
           +   We interact with docker engine through the docker cli. The Docker engine is, in fact, running a VM




## Running Docker Desktop locally

- To run our image containers locally we run Docker desktop as a remote Docker VM
- We can connect to Docker VM: 
    + via SSH: `ssh login@ip-address`
    + docker cli: `docker login -u`



## Docker desktop internals

- Under the hood, communication happens over an API
- Allowing us to use  remote engines as if they were local
- If you have accesss to the `docker control socket`, you can take over the machine because u can run containers that can access machine resources

- In linux machines, `docker user` is equivalent to `root` and should be restricted
- By default docker control socket belongs to the `docker group` (adding trusted users is recommended)
- Docker desktop only supports running ***one docker VM at a time**. 
- ***Docker machine***, ***virtual box*** can be used to get a cluster running.




## Example running a container

- Normally we can run containers on any host
- Exception is windows containers only run on windows hosts for now


```
docker run -it ubuntu
```

- it runs a bare-bones ubuntu system
- flag -it tells docker to connect us to the container's `stdin` (i)  (-t) for pseudo terminal




### Installing `figlet` package in container

- It'll start with pound everytime you're in interactive - here you'll be able to install packages to the Ubuntu container

```
#  apt-get update     // do that first to get apt-get working and then

// npm and other package managers can also be used
# `apt-get` install figlet   // figlet takes a message as parameter and prints it in the terminal


# apt-get figlet Hello world!

        |
        |
        v
```
&nbsp; &nbsp;&nbsp;      ![](/images/helloword.png)    &nbsp; &nbsp;// something like this



## Docker default workflow

- Always start with a new container 
- We can reuse it by creating our own image off of it
