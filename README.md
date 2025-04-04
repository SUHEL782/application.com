🐳 Dockerized MERN Application

This project demonstrates how to containerize a MERN stack application using Docker. The application follows a three-tier architecture, including:

MongoDB (Database)

Express.js & Node.js (Backend)

React.js (Frontend)

🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/your-repo.git
cd your-repo

2️⃣ Set Up Environment Variables

Create a .env file in the root directory and add the required environment variables.

MONGO_URI=mongodb://mongo:27017/mern-app
PORT=5000
JWT_SECRET=your_secret_key

3️⃣ Build and Run with Docker

Ensure you have Docker and Docker Compose installed.

🔹 Build Docker Images

docker-compose build

🔹 Run Containers

docker-compose up -d

The application should now be running at:

Frontend: http://localhost:3000

Backend API: http://localhost:5000

4️⃣ Stopping and Removing Containers

To stop the running containers:

docker-compose down

To remove all containers, networks, and volumes:

docker-compose down -v

📂 Project Structure

📦 your-repo
├── 📂 backend
│   ├── 📂 models
│   ├── 📂 routes
│   ├── 📂 controllers
│   ├── index.js
│   ├── Dockerfile
├── 📂 frontend
│   ├── 📂 src
│   ├── 📂 public
│   ├── Dockerfile
├── 📂 database
│   ├── init-mongo.js
├── .env
├── docker-compose.yml
└── README.md

🛠 Technologies Used

MongoDB - NoSQL Database

Express.js - Backend Framework

React.js - Frontend Library

Node.js - JavaScript Runtime

Docker & Docker Compose - Containerization

💡 Additional Commands

🔍 Checking Logs

docker-compose logs -f

🛑 Stopping a Specific Container

docker stop <container_id>

🗑 Removing Unused Docker Images

docker system prune -a

🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

📄 License

This project is licensed under the MIT License.

📞 Contact

For any inquiries, reach out to:

Your Name

📧 your-email@example.com

