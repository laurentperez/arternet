# minikube
minikube start --driver=virtualbox
dashboard
minikube docker-env

# base
A Deployment provides declarative updates for Pods and ReplicaSets.
Pods are the smallest deployable units of computing that can be created and managed in Kubernetes.
A ReplicaSet’s purpose is to maintain a stable set of replica Pods running at any given time. As such, it is often used to guarantee the availability of a specified number of identical Pods.
Service : retenir les IP des pods front/back : decouple par Label
Y ajouter un Endpoint si pas de label (ex: db locale, partiel workload)
Ingress may provide load balancing, SSL termination and name-based virtual hosting.
Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster

# equivalences cli docker
https://kubernetes.io/docs/reference/kubectl/docker-cli-to-kubectl/

# service / deployment
kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.10
kubectl expose deployment hello-minikube --type=NodePort --port=8080
minikube service hello-minikube --url


# ctl
kubectl apply -f
kubectl cluster-info
kubectl describe deployments
kubectl get deployment,svc,pods
kubectl get deployments
kubectl get rs
