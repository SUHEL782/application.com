# 🛒 MERN E-commerce with DevOps on AWS

A cloud-native, scalable **E-commerce Web Application** built using the **MERN stack**, fully containerized with **Docker**, deployed to **AWS EKS** using **Kubernetes**, and managed via a robust **CI/CD pipeline** and **Infrastructure as Code (IaC)** with **Terraform**.
 # some concept
AutoScalling and Auto-healing 
Autoscaling and auto-healing are related but distinct features. Autoscaling dynamically adjusts the number of computing resources (like servers) to match the workload, while auto-healing replaces unhealthy instances with new ones, ensuring continuous operation. Essentially, autoscaling adds more resources when needed and auto-healing replaces failed resources

---

## 🚀 Project Overview

- 🔁 End-to-end **CI/CD pipeline** with Jenkins & GitHub
- 📦 Containerized frontend/backend using Docker
- ☸️ Kubernetes deployment on AWS EKS
- 🧰 Infrastructure provisioning with Terraform
- 📊 Real-time monitoring with Prometheus & Grafana
- 📥 Centralized logging with AWS CloudWatch
- 🔐 Secure login/signup using JWT Authentication

---

## 🧩 Tech Stack

| Category          | Technologies Used                              |
|-------------------|--------------------------------------------------|
| Frontend          | React.js                                         |
| Backend           | Node.js, Express.js                              |
| Database          | MongoDB                                          |
| Authentication    | JWT, Bcrypt, Express Middleware                  |
| Containerization  | Docker                                           |
| Orchestration     | Kubernetes (AWS EKS)                             |
| CI/CD             | Jenkins, GitHub                                  |
| Infrastructure    | Terraform (EC2, VPC, EKS, IAM, ELB)              |
| Monitoring        | Prometheus, Grafana, AWS CloudWatch              |
| Cloud Provider    | AWS                                              |

---

## 🖼️ Screenshots

### 🔐 Signup Page  
![Signup](images/signup.png)

### 🔓 Login Page  
![Login](images/login.png)

### 🏠 Homepage  
![Homepage](images/homepage.png)

---

## 📦 Key Features

- 🧱 Scalable MERN architecture
- 🔁 Automated CI/CD pipeline
- 🐳 Dockerized microservices
- ☸️ Kubernetes on AWS EKS
- 🧰 IaC using Terraform
- 📊 Monitoring via Grafana/Prometheus
- 📥 Logging with AWS CloudWatch
- 🔐 JWT-based authentication

---

## 📁 Project Structure

.
├── frontend/ # React frontend
├── backend/ # Express backend API
├── docker/ # Dockerfiles
├── k8s/ # Kubernetes manifests
├── terraform/ # Infrastructure definitions
├── Jenkinsfile # Jenkins pipeline
├── images/ # Screenshots
└── README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ CI/CD Pipeline

- **Source Control**: GitHub
- **CI/CD Tool**: Jenkins

### Pipeline Flow:
1. GitHub push triggers Jenkins
2. Build Docker images (frontend & backend)
3. Push images to Docker Hub / AWS ECR
4. Deploy with `kubectl` to AWS EKS

---

## ☁️ Infrastructure Setup (Terraform)

Provision infrastructure using:
- VPC with public/private subnets
- EC2 (Jenkins, optional MongoDB)
- EKS Cluster + Worker Nodes
- IAM roles, security groups
- Elastic Load Balancer

### Commands:
```bash
cd terraform/
terraform init
terraform apply
🚀 Kubernetes Deployment
Apply manifests for backend, frontend, and MongoDB:

bash
Copy
Edit
cd k8s/
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f mongo-deployment.yaml
📊 Monitoring & Logging
Tool	Purpose
Prometheus	Scrape metrics from Kubernetes
Grafana	Visualize metrics and trends
AWS CloudWatch	Centralized logging for AWS

Dashboards include:

CPU/Memory usage

Request latency

Pod health status

Replica counts

🧠 Future Improvements
Convert K8s YAMLs to Helm Charts

Enable HTTPS with Ingress + cert-manager

Move image hosting to AWS ECR

Automate MongoDB backups

Add JWT route protection on frontend

Integrate unit/integration tests into pipeline

Add system architecture diagram

🧑‍💻 Local Development
bash
Copy
Edit
git clone https://github.com/SUHEL782/application.com.git
cd application.com
docker-compose up --build
🤝 Contributing
Contributions are welcome! Feel free to fork, enhance, and submit a pull request.

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Suhel Khan
📍 Uttar Pradesh (Lucknow)
📧 workwithsuhel@gmail.com
📞 +91 8931004042
🌐 Portfolio
🔗 LinkedIn
💻 GitHub

Built with ❤️ using MERN Stack & DevOps Best Practices

yaml
Copy
Edit
