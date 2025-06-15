<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>E-commerce App – MERN + DevOps on AWS</title>
</head>
<body>

<h1>🛒 E-commerce Application – MERN + DevOps on AWS</h1>
<p>A cloud-native, production-ready e-commerce application built using the <strong>MERN stack</strong>, containerized with <strong>Docker</strong>, orchestrated via <strong>Kubernetes on AWS EKS</strong>, and fully automated using <strong>Jenkins CI/CD</strong> and <strong>Terraform</strong>.</p>

<hr>

<h2>👤 Author Info</h2>
<ul>
  <li><strong>Name:</strong> Suhel Khan</li>
  <li><strong>Location:</strong> Lucknow, Uttar Pradesh</li>
  <li><strong>Email:</strong> workwithsuhel@gmail.com</li>
  <li><strong>Phone:</strong> +91 8931004042</li>
  <li><strong>Portfolio:</strong> <a href="https://workwithsuhel.netlify.app">workwithsuhel.netlify.app</a></li>
  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/devops-engineer781/">linkedin.com/in/devops-engineer781</a></li>
  <li><strong>GitHub:</strong> <a href="https://github.com/SUHEL782">github.com/SUHEL782</a></li>
</ul>

<hr>

<h2>🧩 Tech Stack</h2>
<table border="1" cellpadding="6">
  <tr><th>Category</th><th>Technologies Used</th></tr>
  <tr><td><strong>Frontend</strong></td><td>React.js</td></tr>
  <tr><td><strong>Backend</strong></td><td>Node.js, Express.js</td></tr>
  <tr><td><strong>Database</strong></td><td>MongoDB</td></tr>
  <tr><td><strong>Authentication</strong></td><td>JWT, Bcrypt, Express Middleware</td></tr>
  <tr><td><strong>Containerization</strong></td><td>Docker</td></tr>
  <tr><td><strong>Orchestration</strong></td><td>Kubernetes (AWS EKS)</td></tr>
  <tr><td><strong>CI/CD</strong></td><td>Jenkins, GitHub</td></tr>
  <tr><td><strong>IaC</strong></td><td>Terraform (VPC, EKS, IAM, EC2, ELB)</td></tr>
  <tr><td><strong>Monitoring</strong></td><td>Prometheus, Grafana, AWS CloudWatch</td></tr>
  <tr><td><strong>Cloud</strong></td><td>Amazon Web Services (AWS)</td></tr>
</table>

<hr>

<h2>📷 Screenshots</h2>

<h3>🔐 Signup Page</h3>
<img src="images/signup.png" alt="Signup Page" width="500"/>

<h3>🔑 Login Page</h3>
<img src="images/login.png" alt="Login Page" width="500"/>

<h3>🏠 Homepage</h3>
<img src="images/homepage.png" alt="Homepage" width="500"/>

<p><strong>⚠️ Place these images inside the <code>/images</code> folder:</strong></p>
<ul>
  <li>signup.png</li>
  <li>login.png</li>
  <li>homepage.png</li>
</ul>

<hr>

<h2>📦 Key Features</h2>
<ul>
  <li>🚀 End-to-End CI/CD Pipeline with Jenkins</li>
  <li>🔐 Secure Login/Signup with JWT Authentication</li>
  <li>🐳 Dockerized Frontend & Backend Services</li>
  <li>☸️ Deployed on AWS EKS via Kubernetes</li>
  <li>🧱 Terraform for Infrastructure as Code</li>
  <li>📊 Monitoring with Prometheus & Grafana</li>
  <li>📁 Centralized Logging with AWS CloudWatch</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>
<pre>
.
├── frontend/            # React-based frontend
├── backend/             # Express.js backend API
├── docker/              # Dockerfiles & scripts
├── k8s/                 # Kubernetes manifests
├── terraform/           # Infrastructure as Code
├── Jenkinsfile          # Jenkins pipeline config
├── images/              # Screenshots for README
└── README.md            # Project documentation
</pre>

<hr>

<h2>⚙️ CI/CD Pipeline</h2>
<ul>
  <li><strong>Tools:</strong> GitHub, Jenkins, Docker, Kubernetes</li>
  <li><strong>Flow:</strong>
    <ol>
      <li>Code pushed to GitHub triggers Jenkins</li>
      <li>Jenkins builds & pushes Docker images</li>
      <li>Kubernetes manifests are applied to EKS</li>
      <li>Services updated via rolling deployments</li>
    </ol>
  </li>
</ul>

<hr>

<h2>☁️ Terraform Infrastructure</h2>
<p>Terraform automates provisioning of:</p>
<ul>
  <li>VPC with public/private subnets</li>
  <li>EKS Cluster + EC2 Worker Nodes</li>
  <li>IAM Roles & Security Groups</li>
  <li>ELB for frontend routing</li>
</ul>

<pre>
cd terraform/
terraform init
terraform apply
</pre>

<hr>

<h2>🚀 Kubernetes Deployment</h2>
<pre>
cd k8s/
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f mongo-deployment.yaml
</pre>

<hr>

<h2>📊 Monitoring & Logging</h2>
<table border="1" cellpadding="6">
  <tr><th>Tool</th><th>Purpose</th></tr>
  <tr><td>Prometheus</td><td>Metrics collection</td></tr>
  <tr><td>Grafana</td><td>Dashboards/Visualizations</td></tr>
  <tr><td>CloudWatch</td><td>Logs and AWS metrics</td></tr>
</table>

<p><strong>Metrics Include:</strong></p>
<ul>
  <li>CPU/Memory Usage</li>
  <li>Request Latency</li>
  <li>Pod Health & Uptime</li>
</ul>

<hr>

<h2>🧠 Future Enhancements</h2>
<ul>
  <li>✅ Convert K8s YAMLs into Helm charts</li>
  <li>✅ Setup HTTPS via Ingress + TLS</li>
  <li>✅ Store images on AWS ECR</li>
  <li>✅ Add unit/integration tests</li>
  <li>✅ Backup MongoDB automatically</li>
  <li>✅ Create system architecture diagram</li>
</ul>

<hr>

<h2>🧑‍💻 Local Development</h2>
<pre>
git clone https://github.com/SUHEL782/application.com.git
cd application.com
docker-compose up --build
</pre>

<hr>

<h2>🤝 Contributing</h2>
<p>Contributions are welcome! Fork the repo, make your changes, and open a pull request.</p>

<hr>

<h2>📄 License</h2>
<p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for more details.</p>

</body>
</html>
✅ Final Checklist
Add these files in /images/:

signup.png ✔️

login.png

homepage.png

Save this file as README.md in your GitHub repo.

Let me know if you'd like me to also create:

Jenkinsfile

Architecture diagram (HTML/SVG)

Helm chart structure

MongoDB backup strategy

I'm happy to help!
