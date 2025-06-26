pipeline {
    agent any
    stages {
        stage("code") {
            steps {
                echo "Cloning the code from GitHub..."
                git url: "https://github.com/SUHEL782/application.com.git", branch: "main"
                sh "whoami"
                sh "docker build -t e-app ."
            }
        }
        stage("build") {
            steps {
                echo "Building the application with Docker..."
            }
        }
        stage("test") { 
            steps {
                echo "Running tests on the application..."
            }
        }
        stage("deploy") {
            steps {
                echo "Deploying the application..."
                sh "docker-compose up -d"
            }
        }
    }
}
