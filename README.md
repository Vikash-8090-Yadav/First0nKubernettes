Kubernetes is an open-source platform that helps to automate the deployment, scaling, and management of containerized applications. In this tutorial, we will be deploying a simple "Hello World" Django application on Kubernetes.

Prerequisites

Before we get started, make sure you have the following installed:

Git

Docker

Minikube

kubectl

Step 1: Create a Basic Django "Hello World" Application

Make sure you have Python and Django installed on your machine. If you don't have them installed, you can follow the instructions here to install them.

Open up your terminal and navigate to the directory where you want to create your Django project.

Run the following command to create a new Django project:

Now, let's run the Django development server to make sure everything is working. Navigate to the project directory and run the following command: 

$ python manage.py runserver

If everything is working, you should be able to access the "Hello, World!" message by visiting http://localhost:8000/ your web browser.
like this 

Step 2: Build the Docker Image and Start the Container

Navigate to the project directory in your terminal and run the following command to build the Docker image:

$ docker build -t first:v1 .

This will create a new Docker image called first-kubernetes based on the Dockerfile in the project directory.

Now that we have our Docker image, let's start a container based on that image. Run the following command:

$ docker run -it -p 8000:8000 first

This will start a new container based on the first-kubernetes image and forward traffic from port 8000 on your local machine to port 8000 in the container.

Finally, let's make sure everything is working by visiting http://localhost:8000/ in your web browser. You should see the "Hello, World!" message. If everything is working correctly, you can stop the container by pressing Ctrl+C in your terminal.

Step 3: Push the image to the docker hub

Log in to Docker Hub in your terminal:

$ docker login

Push your tagged Docker image to Docker Hub:

$ docker push <docker-hub-username>/first:v1

After pushing you can see the image in the repository section of the docker hub 

Step 3: Create Kubernetes Manifests for Your Django Application

Open up your terminal and navigate to the directory where you want to create your Kubernetes manifests.

Create a new directory for your Kubernetes manifests. You can name this directory whatever you like. For this example, let's call it kubts:

Create three new files in this directory: pod.yml, deployment.yml, and service.yml. You can create these files using your favourite text editor.

pod.yml will contain the configuration for a Kubernetes pod that runs a container for your Django application.

deployment.yml will contain the configuration for a Kubernetes deployment that manages the desired state of your application.

service.yml will contain the configuration for a Kubernetes service that exposes your application to the outside world.

Open up pod.yml in your text editor and add the following code:


apiVersion: v1
kind: Pod
metadata:
  name: first-pod
spec:
  containers:
  - name: first
    image: vikash98yadav/first:v1
    ports:
    - containerPort: 8000

This configuration creates a Kubernetes pod with a single container running your Django application. 

Open up deployment.yml in your text editor and add the following code:

apiVersion: apps/v1
kind: Deployment
metadata:
  name: first-deployment
  labels:
    app: first
spec:
  replicas: 3
  selector:
    matchLabels:
      app: first
  template:
    metadata:
      labels:
        app: first
    spec:
      containers:
      - name: first
        image: vikash98yadav/two:v1
        ports:
        - containerPort: 8000


This configuration creates a Kubernetes deployment that manages the desired state of your application. It specifies that there should be 3 replicas of the pod , and it labels the pod with the app: first label so that it can be selected by the Kubernetes service defined in service.yml. 

Open up service.yml in your text editor and add the following code:

apiVersion: v1
kind: Service
metadata:
  name: first-service
spec:
  type: NodePort
  selector:
    app: first
  ports:
      # By default and for convenience, the `targetPort` is set to the same value as the `port` field.
    - port: 80
      targetPort: 8000
      # Optional field
      # By default and for convenience, the Kubernetes control plane will allocate a port from a range (default: 30000-32767)
      nodePort: 30007

This configuration creates a Kubernetes service that exposes your application to the outside world. It selects the pods labelled with app: first, and it maps port 80 on the service to port 8000 on the pods.

After that make the pod of each file by command 

$ kubectl apply -f pod.yml
$ kubectl apply -f deployment.yml
$ kubectl apply -f service.yml

When deploying an application on Kubernetes, it is typically done by creating a Pod, which is a basic unit of deployment in Kubernetes. However, if you were to create a Pod directly, it would not be able to handle things like scaling, rolling updates, and self-healing. Therefore, we use other Kubernetes objects like Deployments and Services to manage our application's lifecycle.

The pod.yaml file creates a simple Pod that runs a single container. This file is used to define the container's resources such as CPU and memory limits, environment variables, and volume mounts.

The deployment.yaml file, on the other hand, is used to manage the deployment of your application. It specifies how many replicas (i.e. identical copies) of your Pod should be created, and provides a way to perform rolling updates and rollbacks. Rolling updates allow you to update your application with zero downtime by gradually updating one replica at a time.

Finally, the service.yaml file is used to expose your application to the outside world. By default, Pods are assigned dynamic IP addresses that can change over time. Services provide a stable IP address that can be used to access your application. They also allow you to load balance traffic between your replicas and provide a single endpoint for your application.

By using Deployments and Services, you can make your application more scalable, resilient, and easier to manage.

live demonstration for the above is shown below : 

check out the video in this repo  -> https://github.com/Vikash-8090-Yadav/First0nKubernettes

Congratulations, you have created Kubernetes manifests for your Django application! You can now move on to Step 4 to deploy your application to Kubernetes.

Step 4: Get  the external IP address to access the application from outside. 

$ minikube service first-service --url

you will get  the link to access your application 

just head over to the browser and paste the URL and you will get the output as shown previously in Step 1. 



https://user-images.githubusercontent.com/85225156/235491940-6e7555d4-de1b-40fc-885c-846b0a4a1e43.mp4

