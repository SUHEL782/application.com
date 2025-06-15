<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>E-commerce App – MERN + DevOps on AWS</title>
</head>
<body>

<h1>🛒 E-commerce Application – MERN + DevOps on AWS</h1>
<p>
  A cloud-native, production-ready e-commerce application built using the <strong>MERN stack</strong>,
  containerized with <strong>Docker</strong>, orchestrated with <strong>Kubernetes on AWS EKS</strong>,
  and automated via a complete <strong>CI/CD pipeline</strong> and <strong>Infrastructure as Code (Terraform)</strong>.
</p>

<hr>

<h2>👤 Author Info</h2>
<ul>
  <li><strong>Name:</strong> Suhel Khan</li>
  <li><strong>Location:</strong> Lucknow, Uttar Pradesh</li>
  <li><strong>Email:</strong> <a href="mailto:workwithsuhel@gmail.com">workwithsuhel@gmail.com</a></li>
  <li><strong>Phone:</strong> +91 8931004042</li>
  <li><strong>Portfolio:</strong> <a href="https://workwithsuhel.netlify.app" target="_blank">workwithsuhel.netlify.app</a></li>
  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/devops-engineer781/" target="_blank">linkedin.com/in/devops-engineer781</a></li>
  <li><strong>GitHub:</strong> <a href="https://github.com/SUHEL782" target="_blank">github.com/SUHEL782</a></li>
</ul>

<hr>

<h2>🧩 Tech Stack</h2>
<table border="1" cellspacing="0" cellpadding="6">
  <tr><th>Category</th><th>Technologies Used</th></tr>
  <tr><td>Frontend</td><td>React.js</td></tr>
  <tr><td>Backend</td><td>Node.js, Express.js</td></tr>
  <tr><td>Database</td><td>MongoDB</td></tr>
  <tr><td>Authentication</td><td>JWT, Bcrypt, Express Middleware</td></tr>
  <tr><td>Containerization</td><td>Docker</td></tr>
  <tr><td>Orchestration</td><td>Kubernetes (AWS EKS)</td></tr>
  <tr><td>CI/CD</td><td>Jenkins, GitHub</td></tr>
  <tr><td>Infrastructure as Code</td><td>Terraform (VPC, EKS, IAM, EC2, ELB)</td></tr>
  <tr><td>Monitoring</td><td>Prometheus, Grafana, AWS CloudWatch</td></tr>
  <tr><td>Cloud Provider</td><td>Amazon Web Services (AWS)</td></tr>
</table>

<hr>

<h2>📸 Screenshots</h2>

<h3>🔐 Signup Page</h3>
<img src="images/signup.png" alt="Signup Page" width="700"/>

<h3>🔑 Login Page</h3>
<img src="images/login.png" alt="Login Page" width="700"/>

<h3>🏠 Homepage</h3>
<img src="images/homepage.png" alt="Homepage" width="700"/>

<p><strong>Note:</strong> Ensure all images above are placed in the <code>/images</code> directory of your repository.</p>

<hr>

<h2>📦 Key Features</h2>
<ul>
  <li>🧱 Scalable MERN architecture</li>
  <li>🔁 End-to-end CI/CD pipeline with Jenkins</li>
  <li>🐳 Dockerized services</li>
  <li>☸️ Kubernetes deployment on AWS EKS</li>
  <li>🧰 Infrastructure provisioned using Terraform</li>
  <li>📊 Real-time monitoring with Prometheus & Grafana</li>
  <li>📥 Logging via AWS CloudWatch</li>
  <li>🔐 JWT-based user authentication</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>
<pre>
.
├── frontend/            # React frontend
├── backend/             # Express backend
├── docker/              # Dockerfiles & scripts
├── k8s/                 # Kubernetes manifests
├── terraform/           # Terraform IAC files
├── Jenkinsfile          # Jenkins CI/CD script
├── images/              # Screenshots
└── README.md            # Project documentation
</pre>

<hr>

<h2>⚙️ CI/CD Pipeline</h2>
<p>Automated workflow using GitHub + Jenkins:</p>
<ol>
  <li>Code push to GitHub triggers Jenkins build</li>
  <li>Docker images built and pushed to Docker Hub or AWS ECR</li>
  <li>Kubernetes manifests applied to EKS cluster</li>
</ol>

<hr>

<h2>☁️ Terraform Infrastructure</h2>
<p>Automates provisioning of:</p>
<ul>
  <li>VPC, Subnets</li>
  <li>EKS Cluster and Node Groups</li>
  <li>IAM roles and security groups</li>
  <li>ELB for frontend service</li>
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
kubectl apply -f mongo-deployment.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
</pre>

<hr>

<h2>📊 Monitoring & Logging</h2>
<table border="1" cellspacing="0" cellpadding="6">
  <tr><th>Tool</th><th>Purpose</th></tr>
  <tr><td>Prometheus</td><td>Metrics scraping</td></tr>
  <tr><td>Grafana</td><td>Visualization and dashboards</td></tr>
  <tr><td>AWS CloudWatch</td><td>Log aggregation and alerts</td></tr>
</table>

<ul>
  <li>CPU & Memory usage</li>
  <li>API request latency</li>
  <li>Pod health and availability</li>
</ul>

<hr>

<h2>🧠 Future Enhancements</h2>
<ul>
  <li>✅ Convert K8s YAML to Helm charts</li>
  <li>✅ Add TLS via Ingress + cert-manager</li>
  <li>✅ Move to AWS ECR for secure image storage</li>
  <li>✅ Automate MongoDB backups</li>
  <li>✅ Protect routes with JWT</li>
  <li>✅ Add tests to CI pipeline</li>
  <li>✅ Add architecture diagram</li>
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
<p>Contributions are welcome! Please fork the repository, make changes, and open a pull request.</p>

<hr>

<h2>📄 License</h2>
<p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

</body>
</html>
✅ How to use this:
Copy and save this HTML into your README.md.

Upload images (signup.png, login.png, homepage.png) into a folder named /images in your GitHub repository.

GitHub will render this HTML content and show the images directly in the README.

Would you like me to:

Generate a matching architecture diagram (in HTML or image)?

Create a professional Jenkinsfile for your CI/CD pipeline?

Let me know — I can deliver it instantly.
