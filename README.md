# 🛒 MERN E-commerce with DevOps on AWS

A production-ready, cloud-native e-commerce web application built with the MERN stack. Fully containerized using Docker, deployed to AWS EKS with Kubernetes, and managed via a CI/CD pipeline using Jenkins and Infrastructure as Code (Terraform). Includes monitoring, logging, and security best practices.

---

## 🚀 Project Overview

- ✅ CI/CD pipeline via **Jenkins** & **GitHub**
- 🐳 Fully containerized with **Docker**
- ☸️ Kubernetes deployment on **AWS EKS**
- 🧰 Infra provisioning using **Terraform**
- 📊 Monitoring via **Prometheus** & **Grafana**
- 📥 Logging with **AWS CloudWatch**
- 🔐 Secure **JWT**-based authentication

---

## 🧩 Tech Stack

| Category        | Technologies Used                                 |
|----------------|----------------------------------------------------|
| Frontend        | React.js                                           |
| Backend         | Node.js, Express.js                                |
| Database        | MongoDB                                            |
| Authentication  | JWT, Bcrypt, Express Middleware                    |
| Containerization| Docker                                             |
| Orchestration   | Kubernetes (AWS EKS)                               |
| CI/CD           | Jenkins, GitHub                                    |
| Infrastructure  | Terraform (EC2, VPC, EKS, IAM, ELB)                |
| Monitoring      | Prometheus, Grafana, AWS CloudWatch               |
| Cloud Provider  | AWS                                                |

---

## 🛠 Common Problems & Solutions

### 🔧 Docker
- **Problem:** Container fails on startup  
  **Solution:** Check logs using `docker logs <container_id>` and ensure ports/env variables are correctly set.

- **Problem:** Docker network issues in multi-container setups  
  **Solution:** Use `docker-compose` to define networks explicitly.

### 🔧 Kubernetes
- **Problem:** Pods crash repeatedly  
  **Solution:** Use `kubectl describe pod <pod-name>` to check `Events`, and add **Liveness/Readiness probes**.

- **Problem:** Service not accessible externally  
  **Solution:** Use **LoadBalancer** service type or configure **Ingress Controller** with external DNS.

### 🔧 Terraform
- **Problem:** Resource already exists error  
  **Solution:** Run `terraform import` or clean state with `terraform state rm`.

- **Problem:** AWS rate limits  
  **Solution:** Use `retryable_errors` and backoff settings in provider block.

### 🔧 Jenkins CI/CD
- **Problem:** Jenkinsfile fails at Docker build  
  **Solution:** Ensure Docker is installed on Jenkins agent and Docker socket is accessible.

- **Problem:** Environment variables not set  
  **Solution:** Use `withCredentials` or set them in Jenkins pipeline config properly.

---

## 🖼️ UI Snapshots

- 🔐 Signup Page  
- 🔓 Login Page  
- 🏠 Homepage  

(*Located in the `images/` folder*)

---

## 📁 Project Structure

.
├── frontend/ # React frontend
├── backend/ # Express backend API
├── docker/ # Dockerfiles
├── k8s/ # Kubernetes manifests
├── terraform/ # Infrastructure as Code
├── Jenkinsfile # CI/CD pipeline config
├── images/ # UI Screenshots
└── README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ CI/CD Pipeline

- **Source Control:** GitHub  
- **CI/CD Tool:** Jenkins

### Pipeline Flow:
1. GitHub push triggers Jenkins
2. Build Docker images (frontend/backend)
3. Push to Docker Hub / AWS ECR
4. Deploy to EKS using `kubectl`

---

## ☁️ Infrastructure Setup with Terraform

Provision the infrastructure:

```bash
cd terraform/
terraform init
terraform apply
Resources Created:

VPC with subnets

EC2 (Jenkins, MongoDB optional)

EKS Cluster + Nodes

IAM Roles, Security Groups

Load Balancer

☸️ Kubernetes Deployment
Deploy app components to AWS EKS:

bash
Copy
Edit
cd k8s/
kubectl apply -f mongo-deployment.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
📊 Monitoring & Logging
Tool	Purpose
Prometheus	Metrics collection from pods
Grafana	Metric visualization dashboards
AWS CloudWatch	Centralized logs from containers

Dashboards:

CPU/Memory usage

Pod health & availability

HTTP request latency

♻️ Container Management Best Practices
Probes: Use Liveness & Readiness probes

Restart Policies: Define restartPolicy: Always or suitable config

Logs: Use stdout and stderr for all logs

Monitoring: Watch pod resource limits to avoid OOM kills

Shutdown Handling: Gracefully capture SIGTERM in backend

🧠 Future Enhancements
Convert YAMLs to Helm Charts

Add HTTPS via Ingress + cert-manager

Push images to AWS ECR

Automate MongoDB backups

Implement frontend route guards with JWT

Add unit/integration tests in pipeline

Include architecture diagram

👨‍💻 Local Development
bash
Copy
Edit
git clone https://github.com/SUHEL782/application.com.git
cd application.com
docker-compose up --build
🤝 Contributing
Contributions are welcome!
Fork the repo, create a feature branch, and open a pull request.

📄 License
Licensed under the MIT License.

👨‍💻 Author
Suhel Khan
📍 Lucknow, Uttar Pradesh
📧 workwithsuhel@gmail.com
📞 +91 8931004042
🌐 Portfolio
🔗 LinkedIn
💻 GitHub
