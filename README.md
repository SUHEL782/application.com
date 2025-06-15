# 🛒 E-commerce Application – MERN + DevOps on AWS

A cloud-native, production-ready e-commerce application built using the **MERN stack**, containerized with **Docker**, orchestrated via **Kubernetes on AWS EKS**, and fully automated using **Jenkins CI/CD** and **Terraform**.

---

### 👤 Author Info

**Suhel Khan**  
📍 Lucknow, Uttar Pradesh  
📧 workwithsuhel@gmail.com  
📞 +91 8931004042  
🌐 [Portfolio](https://workwithsuhel.netlify.app)  
🔗 [LinkedIn](https://www.linkedin.com/in/devops-engineer781/)  
💻 [GitHub](https://github.com/SUHEL782)

---

## 🧩 Tech Stack

| Category             | Technologies Used                               |
|----------------------|-------------------------------------------------|
| **Frontend**         | React.js                                        |
| **Backend**          | Node.js, Express.js                             |
| **Database**         | MongoDB                                         |
| **Authentication**   | JWT, Bcrypt, Express Middleware                 |
| **Containerization** | Docker                                          |
| **Orchestration**    | Kubernetes (AWS EKS)                            |
| **CI/CD**            | Jenkins, GitHub                                 |
| **IaC**              | Terraform (VPC, EKS, IAM, EC2, ELB)             |
| **Monitoring**       | Prometheus, Grafana, AWS CloudWatch             |
| **Cloud**            | Amazon Web Services (AWS)                       |

---

## 📷 Screenshots

### 🔐 Signup Page  
<img src="./images/signup.png" alt="Signup Page" width="400" />

### 🔑 Login Page  
<img src="./images/login.png" alt="Login Page" width="400" />

### 🏠 Homepage  
<img src="./images/homepage.png" alt="Homepage" width="400" />

> ⚠️ Make sure these images (`signup.png`, `login.png`, `homepage.png`) exist in the `/images/` folder of your repo.

---

## 📦 Key Features

- 🚀 End-to-End CI/CD Pipeline with Jenkins
- 🔐 Secure Login/Signup with JWT Authentication
- 🐳 Dockerized Frontend & Backend Services
- ☸️ Deployed on AWS EKS via Kubernetes
- 🧱 Terraform for Infrastructure as Code
- 📊 Monitoring with Prometheus & Grafana
- 📁 Centralized Logging with AWS CloudWatch

---

## 📁 Project Structure

.
├── frontend/ # React-based frontend
├── backend/ # Express.js backend API
├── docker/ # Dockerfiles & scripts
├── k8s/ # Kubernetes manifests
├── terraform/ # Infrastructure as Code
├── Jenkinsfile # Jenkins pipeline config
├── images/ # Screenshots for README
└── README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ CI/CD Pipeline

**CI/CD Tools:** GitHub, Jenkins, Docker, Kubernetes

1. Code pushed to GitHub triggers Jenkins
2. Jenkins builds & pushes Docker images
3. Kubernetes manifests are applied to EKS
4. Services updated via rolling deployments

---

## ☁️ Terraform Infrastructure

Terraform provisions:

- VPC with public/private subnets
- EKS Cluster + EC2 Worker Nodes
- IAM Roles & Security Groups
- ELB for frontend routing

```bash
cd terraform/
terraform init
terraform apply
🚀 Kubernetes Deployment
bash
Copy
Edit
cd k8s/
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f mongo-deployment.yaml
📊 Monitoring & Logging
Tool	Purpose
Prometheus	Metrics collection
Grafana	Dashboards/Visualizations
CloudWatch	Logs and AWS metrics

Metrics include:

CPU/Memory Usage

Request Latency

Pod Health & Uptime

🧠 Future Enhancements
✅ Convert K8s YAMLs into Helm charts

✅ Setup HTTPS via Ingress + TLS

✅ Store images on AWS ECR

✅ Add unit/integration tests

✅ Backup MongoDB automatically

✅ Create system architecture diagram

🧑‍💻 Local Development
bash
Copy
Edit
git clone https://github.com/SUHEL782/application.com.git
cd application.com
docker-compose up --build
🤝 Contributing
Contributions are welcome!
Fork the repo, make your changes, and open a pull request.

📄 License
Licensed under the MIT License. See LICENSE for full details.

markdown
Copy
Edit

Would you like me to now:
- Generate a **Jenkinsfile**?
- Draw an **AWS architecture diagram**?
- Create a **Helm chart structure**?

Let me know — I’ll build it for you.
