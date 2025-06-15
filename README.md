# 🛒 E-commerce Application – MERN + DevOps on AWS

A cloud-native, production-ready **e-commerce application** built with the **MERN stack**, containerized using **Docker**, orchestrated with **Kubernetes (AWS EKS)**, and deployed through a secure and automated **CI/CD pipeline** using **Jenkins** and **Terraform** for Infrastructure as Code (IaC).

---

## 🚀 Project Overview

This project demonstrates end-to-end DevOps practices for deploying a scalable MERN web application:

- ✅ Continuous Integration & Deployment (CI/CD)
- 🐳 Docker-based Microservices
- ☸️ Kubernetes Orchestration (EKS)
- 🔐 JWT Authentication with Role-based Access
- ⚙️ Infrastructure Automation (Terraform)
- 📈 Monitoring & Logging (Prometheus, Grafana, CloudWatch)

---

## 🧩 Tech Stack

| Category               | Technologies Used                            |
|------------------------|-----------------------------------------------|
| **Frontend**           | React.js, Redux, Axios                        |
| **Backend**            | Node.js, Express.js                           |
| **Database**           | MongoDB, Mongoose                             |
| **Authentication**     | JWT, Bcrypt.js, Express Middleware            |
| **Containerization**   | Docker                                        |
| **Orchestration**      | Kubernetes (EKS)                              |
| **CI/CD**              | Jenkins, GitHub                               |
| **Infrastructure**     | Terraform (EC2, VPC, EKS, IAM, ELB)           |
| **Monitoring**         | Prometheus, Grafana, AWS CloudWatch           |
| **Cloud Provider**     | Amazon Web Services (AWS)                     |

---

## 🖼️ Screenshots

> *(Place your actual screenshots in a folder named `/images`)*

| Login Page | Signup Page | Homepage |
|------------|-------------|----------|
| ![Login](images/login.png) | ![Signup](images/signup.png) | ![Home](images/homepage.png) |

---

## 📦 Key Features

- 🧱 Modular MERN architecture
- 🔁 End-to-end CI/CD with Jenkins
- 🐳 Dockerized frontend/backend/mongo services
- ☸️ Kubernetes deployment to AWS EKS
- ⚙️ Infrastructure as Code with Terraform
- 📊 Monitoring with Prometheus & Grafana
- 📥 Log aggregation with AWS CloudWatch
- 🔐 JWT Authentication (Login & Signup)

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
├── images/ # Screenshots (login.png, etc.)
└── README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ CI/CD Pipeline

- **Version Control**: GitHub  
- **CI/CD Tool**: Jenkins

### Pipeline Workflow

1. GitHub push triggers Jenkins.
2. Jenkins builds and tests Docker images.
3. Images are pushed to Docker Hub or AWS ECR.
4. Kubernetes manifests are applied to the EKS cluster.

---

## ☁️ Infrastructure Provisioning with Terraform

Terraform automates creation of:

- Custom VPC with subnets
- EC2 for Jenkins or MongoDB
- EKS Cluster with node groups
- IAM Roles, Security Groups
- Load Balancer for routing

```bash
cd terraform/
terraform init
terraform apply
🚀 Kubernetes Deployment
bash
Copy
Edit
cd k8s/

kubectl apply -f mongo-deployment.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
📊 Monitoring & Logging
Tool	Purpose
Prometheus	Kubernetes metrics scraping
Grafana	Custom dashboards (CPU, memory, latency)
CloudWatch	Log aggregation and alerts

🔮 Future Enhancements
✅ Migrate to Helm charts for Kubernetes

✅ Enable HTTPS with cert-manager + Ingress + TLS

✅ Use AWS ECR for container image storage

✅ Automate MongoDB backups

✅ Add test automation to CI pipeline

✅ Add GitHub Actions for additional CI/CD

✅ Add cloud architecture diagram

🧑‍💻 Local Development Setup
bash
Copy
Edit
# Clone the repository
git clone https://github.com/SUHEL782/application.com.git
cd application.com

# Build and run services locally
docker-compose up --build
🙋‍♂️ About Me
Suhel Khan
🚩 Lucknow, Uttar Pradesh | 📧 workwithsuhel@gmail.com | 📱 +91 8931004042
🌐 Portfolio
🔗 LinkedIn | GitHub

I'm a DevOps Engineer passionate about automation, scalable infrastructure, and cloud-native application delivery. I enjoy building and optimizing CI/CD pipelines, working with Kubernetes, and using tools like Terraform to bring infrastructure under version control.

🤝 Contributing
Contributions are welcome!
Feel free to fork this repository, make changes, and open a pull request.

📄 License
This project is licensed under the MIT License.
See the LICENSE file for more details.

yaml
Copy
Edit

---

### ✅ Next Steps (Optional Enhancements)

Would you like me to help you add:

- ✅ Architecture diagram (AWS + EKS + Jenkins)?
- ✅ Helm chart for your Kubernetes manifests?
- ✅ Unit test boilerplates (Jest for React, Mocha for Node)?
- ✅ GitHub Actions workflow to replace or enhance Jenkins?

Let me know what you’d like next!








