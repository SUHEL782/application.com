<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>MERN E-commerce with DevOps</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f7f7f7; color: #333;">
  <h1>🛒 E-commerce Application – MERN + DevOps on AWS</h1>
  <p>
    A cloud-native, scalable e-commerce web application built using the MERN stack, fully containerized with Docker,
    deployed to AWS EKS using Kubernetes, and managed via a robust CI/CD pipeline and Infrastructure as Code (IaC) with Terraform.
  </p>

  <h2>🚀 Project Overview</h2>
  <ul>
    <li>Continuous Integration & Deployment (CI/CD)</li>
    <li>Containerization and Orchestration</li>
    <li>Infrastructure Automation</li>
    <li>Monitoring and Logging</li>
    <li>User Authentication (Login / Signup)</li>
  </ul>

  <h2>🧩 Tech Stack</h2>
  <table border="1" cellpadding="10">
    <tr><th>Category</th><th>Technologies Used</th></tr>
    <tr><td>Frontend</td><td>React.js</td></tr>
    <tr><td>Backend</td><td>Node.js, Express.js</td></tr>
    <tr><td>Database</td><td>MongoDB</td></tr>
    <tr><td>Authentication</td><td>JWT, Bcrypt, Express Middleware</td></tr>
    <tr><td>Containerization</td><td>Docker</td></tr>
    <tr><td>Orchestration</td><td>Kubernetes (AWS EKS)</td></tr>
    <tr><td>CI/CD</td><td>Jenkins, GitHub</td></tr>
    <tr><td>IaC</td><td>Terraform (EC2, VPC, EKS, IAM, ELB)</td></tr>
    <tr><td>Monitoring</td><td>Prometheus, Grafana, AWS CloudWatch</td></tr>
    <tr><td>Cloud Provider</td><td>AWS</td></tr>
  </table>

  <h2>🖼️ Screenshots</h2>
  
  <h3>🔐 Signup Page</h3>
  <img src="images/signup.png" alt="Signup Page" style="width: 600px; border: 1px solid #ccc;" />

  <h3>🔓 Login Page</h3>
  <img src="images/login.png" alt="Login Page" style="width: 600px; border: 1px solid #ccc;" />

  <h3>🏠 Homepage</h3>
  <img src="images/homepage.png" alt="Homepage" style="width: 600px; border: 1px solid #ccc;" />

  <h2>📦 Key Features</h2>
  <ul>
    <li>🧱 Scalable MERN stack architecture</li>
    <li>🔁 End-to-end CI/CD pipeline with Jenkins</li>
    <li>🐳 Dockerized frontend and backend services</li>
    <li>☸️ Kubernetes deployment on AWS EKS</li>
    <li>🧰 Infrastructure provisioned using Terraform</li>
    <li>📊 Real-time monitoring with Prometheus & Grafana</li>
    <li>📥 Centralized logging with AWS CloudWatch</li>
    <li>🔐 Secure Login & Signup with JWT Authentication</li>
  </ul>

  <h2>📁 Project Structure</h2>
  <pre>
.
├── frontend/              # React frontend
├── backend/               # Express backend API
├── docker/                # Dockerfiles
├── k8s/                   # Kubernetes manifests
├── terraform/             # Infrastructure definitions
├── Jenkinsfile            # Jenkins pipeline
├── images/                # Screenshots
└── README.md              # Project documentation
  </pre>

  <h2>⚙️ CI/CD Pipeline</h2>
  <ul>
    <li><strong>Source:</strong> GitHub</li>
    <li><strong>Build & Deploy:</strong> Jenkins</li>
    <li><strong>Pipeline:</strong>
      <ol>
        <li>Push to GitHub triggers Jenkins</li>
        <li>Build Docker images (frontend + backend)</li>
        <li>Push images to Docker Hub or ECR</li>
        <li>Apply Kubernetes manifests to EKS</li>
      </ol>
    </li>
  </ul>

  <h2>☁️ Infrastructure Setup (Terraform)</h2>
  <ul>
    <li>VPC with public/private subnets</li>
    <li>EC2 (Jenkins, MongoDB optional)</li>
    <li>EKS Cluster + Worker Nodes</li>
    <li>IAM Roles, Security Groups</li>
    <li>Elastic Load Balancer</li>
  </ul>
  <pre>
cd terraform/
terraform init
terraform apply
  </pre>

  <h2>🚀 Deployment (Kubernetes)</h2>
  <pre>
cd k8s/
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f mongo-deployment.yaml
  </pre>

  <h2>📊 Monitoring & Logging</h2>
  <table border="1" cellpadding="10">
    <tr><th>Tool</th><th>Purpose</th></tr>
    <tr><td>Prometheus</td><td>Scrapes Kubernetes metrics</td></tr>
    <tr><td>Grafana</td><td>Visualizes metrics</td></tr>
    <tr><td>CloudWatch</td><td>AWS-native log aggregation</td></tr>
  </table>

  <h3>Dashboards show:</h3>
  <ul>
    <li>CPU/Memory usage</li>
    <li>Request latency</li>
    <li>Pod/container health</li>
    <li>Replica count</li>
  </ul>

  <h2>🧠 Future Improvements</h2>
  <ul>
    <li>Convert Kubernetes manifests to Helm Charts</li>
    <li>Enable HTTPS with Ingress + cert-manager</li>
    <li>Switch image registry to AWS ECR</li>
    <li>MongoDB backups automation</li>
    <li>JWT route protection for frontend</li>
    <li>Unit/integration tests in CI pipeline</li>
    <li>Add system architecture diagram (VPC, EKS, Jenkins)</li>
  </ul>

  <h2>🧑‍💻 Local Development</h2>
  <pre>
git clone https://github.com/SUHEL782/application.com.git
cd application.com
docker-compose up --build
  </pre>

  <h2>🤝 Contributing</h2>
  <p>Feel free to fork, enhance and submit a pull request!</p>

  <h2>📄 License</h2>
  <p>This project is licensed under the MIT License.</p>

  <h2>👨‍💻 Author</h2>
  <p><strong>SUHEL KHAN</strong></p>
  <ul>
    <li>📍 Uttar Pradesh (Lucknow)</li>
    <li>📧 workwithsuhel@gmail.com</li>
    <li>📞 +91 8931004042</li>
    <li>🌐 <a href="https://workwithsuhel.netlify.app/">Portfolio</a></li>
    <li>🔗 <a href="https://www.linkedin.com/in/devops-engineer781/">LinkedIn</a></li>
    <li>💻 <a href="https://github.com/SUHEL782">GitHub</a></li>
  </ul>

</body>
</html>
