from diagrams import Diagram, Cluster
from diagrams.k8s.compute import Pod, Deployment
from diagrams.generic.device import Tablet
from diagrams.k8s.network import Ingress, Service
from diagrams.saas.cdn import Cloudflare

with Diagram("Cloud Deployment Configuration", outformat="png"):
    cf = Cloudflare("Cloudflare Pages (Frontend)")
    device = Tablet("End User")

    with Cluster("Kubernetes Cluster (Backend)"):
        ingress = Ingress("Istio Gateway")

        with Cluster("Deployment"):
            service = Service("nmp-api")
            deployment = Deployment("nmp-api-deployment")

    device >> cf
    device >> ingress >> service >> deployment
