# 🛒 E-commerce Application – MERN + DevOps on AWS

A cloud-native, scalable e-commerce web application built using the **MERN stack**, fully containerized with **Docker**, deployed to **AWS EKS** using **Kubernetes**, and managed via a robust **CI/CD pipeline** and **Infrastructure as Code (IaC)** with Terraform.

---

## 🚀 Project Overview

This project demonstrates how to build and deploy a full-stack MERN application using modern DevOps practices, including:

- Continuous Integration & Deployment (CI/CD)
- Containerization and Orchestration
- Infrastructure Automation
- Monitoring and Logging
- User Authentication (Login / Signup)

---

## 🧩 Tech Stack

| Category               | Technologies Used                            |
|------------------------|-----------------------------------------------|
| **Frontend**           | React.js                                      |
| **Backend**            | Node.js, Express.js                           |
| **Database**           | MongoDB                                       |
| **Authentication**     | JWT, Bcrypt, Express Middleware               |
| **Containerization**   | Docker                                        |
| **Orchestration**      | Kubernetes (AWS EKS)                          |
| **CI/CD**              | Jenkins, GitHub                               |
| **Infrastructure as Code** | Terraform (EC2, VPC, EKS, IAM, ELB)      |
| **Monitoring**         | Prometheus, Grafana, AWS CloudWatch           |
| **Cloud Provider**     | Amazon Web Services (AWS)                     |

---

## 🖼️ Screenshots

### 🔐 Login Page
![Login Page](images/login.png)

### 📝 Signup Page
![Signup Page](images/signup.png)

### 🛍️ Homepage
![Homepage](images/homepage.png)

> *(Place your actual screenshots inside a folder named `/images` in the root of the repo)*

---

## 📦 Key Features

- 🧱 Scalable MERN stack architecture
- 🔁 End-to-end CI/CD pipeline with Jenkins
- 🐳 Dockerized frontend and backend services
- ☸️ Kubernetes deployment on AWS EKS
- 🧰 Infrastructure provisioned using Terraform
- 📊 Real-time monitoring with Prometheus & Grafana
- 📥 Centralized logging with AWS CloudWatch
- 🔐 Secure Login & Signup with JWT Authentication

---

## 📁 Project Structure

.
├── frontend/ # React-based frontend
├── backend/ # Express API backend
├── docker/ # Dockerfiles and scripts
├── k8s/ # Kubernetes manifests
├── terraform/ # Terraform for AWS infrastructure
├── Jenkinsfile # CI/CD pipeline configuration
├── .github/workflows/ # Optional GitHub Actions
├── images/ # Screenshots (login.png, signup.png, etc.)
└── README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ CI/CD Pipeline

- **Version Control**: GitHub
- **CI/CD Tool**: Jenkins
- **Pipeline Steps**:
  1. Code pushed to GitHub triggers Jenkins
  2. Jenkins builds Docker images for backend & frontend
  3. Images are pushed to Docker Hub or AWS ECR
  4. Kubernetes manifests are applied to the EKS cluster

---

## ☁️ Infrastructure Setup (Terraform)

Terraform automates provisioning of:

- VPC with public/private subnets
- EC2 instances (for Jenkins or MongoDB)
- EKS Cluster + Worker Nodes
- IAM Roles, Security Groups
- Elastic Load Balancer

```bash
cd terraform/
terraform init
terraform apply
🚀 Deployment (Kubernetes on EKS)
bash
Copy
Edit
# Deploy backend, frontend, and MongoDB
cd k8s/
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f mongo-deployment.yaml
📊 Monitoring & Logging
Tool	Purpose
Prometheus	Scrapes Kubernetes metrics
Grafana	Visualizes application & system metrics
CloudWatch	Logs collection & alerting (AWS native)

Dashboards show:

CPU/Memory usage

Request latency

Container health

Pod replicas

🧠 Future Improvements
 Convert Kubernetes manifests into Helm charts

 Enable HTTPS with cert-manager + Ingress + TLS

 Use AWS ECR for secure image storage

 Add MongoDB backup automation

 Integrate JWT-based route protection

 Add unit/integration tests to the pipeline

 Create architecture diagram (VPC, EKS, Jenkins)

🧑‍💻 Local Development
bash
Copy
Edit
# Clone the repo
git clone https://github.com/SUHEL782/application.com.git
cd application.com

# Start local dev with Docker Compose
docker-compose up --build
🤝 Contributing
Contributions are welcome!
Please fork the repository, make your changes, and submit a pull request.

📄 License
This project is licensed under the MIT License.
See the LICENSE file for details.

markdown
Copy
Edit

---

### ✅ Next Steps for You:

1. 📸 Add the following image files to `/images` in your GitHub repo:
   - `login.png`
   - `signup.png`
   - `homepage.png`

2. 🗺️ Let me know if you want a **custom architecture diagram** — I can draw and export it for GitHub.

3. 🧪 Need help adding **tests**, **GitHub Actions**, or converting to **Helm charts**? I can guide or generate those as well.

Would you like me to generate:
- An architecture diagram?
- A sample `Jenkinsfile`?
- Kubernetes YAMLs for Login/Auth flow?

Let me know and I’ll add them for you.
