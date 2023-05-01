
<p align="center">
  <h1>Deploy your application on Kubernetes</h1>
</p>

<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <img src="https://user-images.githubusercontent.com/85225156/235514966-f7249f7b-4f64-419d-b6ed-d8e3074a31da.jpg" height="590" width="790">
    
</div>

<h2> Kubernetes is an open-source platform that helps to automate the deployment, scaling, and management of containerized applications. In this tutorial, we will be deploying a simple "Hello World" Django application on Kubernetes.
</h2>

## How to run this project 

<b>

1. Build the docer image  
</b>

```
$ docker build -t first:v1 .
```
<b>

Now that we have our Docker image, let's start a container based on that image. Run the following command:

</b>

```
$ docker run -it -p 8000:8000 first
```
<b>

This will start a new container based on the first-kubernetes image and forward traffic from port 8000 on your local machine to port 8000 in the container.

</b>

## go to the kubts folder  and run this code to run the application


```
$ kubectl apply -f pod.yml
$ kubectl apply -f deployment.yml
$ kubectl apply -f service.yml
```

## Get  the external IP address to access the application from outside. 

```
$ minikube service first-service --url
```


## For demonstartion for the autohealing and autoscaling 

https://user-images.githubusercontent.com/85225156/235491940-6e7555d4-de1b-40fc-885c-846b0a4a1e43.mp4

🎉 Congratulations on creating and deploying your Django application on Kubernetes! You should be proud of yourself for taking this step towards building scalable and resilient applications. 🚀

