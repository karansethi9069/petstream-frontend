pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/home/anuj/petstream-deploy/frontend"
        REPO_URL = "https://github.com/MKN-Infotech/petstream-frontend.git"
    }

    stages {
        stage('Clone Repo') {
            steps {
                echo "Cloning frontend repository..."
                deleteDir() // clean workspace
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm packages..."
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                echo "Building React app..."
                sh 'npm run build'
            }
        }

        stage('Deploy Build') {
            steps {
                echo "Deploying to server path..."
                sh """
                    rm -rf ${DEPLOY_DIR}
                    mkdir -p ${DEPLOY_DIR}
                    cp -r build/* ${DEPLOY_DIR}/
                """
            }
        }
    }

    post {
        success {
            echo "✅ Frontend deployed successfully!"
        }
        failure {
            echo "❌ Deployment failed. Check logs."
        }
    }
}
