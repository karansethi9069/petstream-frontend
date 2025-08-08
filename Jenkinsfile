pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/home/anuj/petstream-deploy/frontend"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                echo '🛠️ Building frontend...'
                sh 'npm run build'
            }
        }

        stage('Deploy Build') {
            steps {
                echo '🚀 Deploying build to server...'
                sh '''
                rm -rf ${DEPLOY_DIR}
                mkdir -p ${DEPLOY_DIR}
                cp -r build/* ${DEPLOY_DIR}/
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Frontend deployed successfully.'
        }
        failure {
            echo '❌ Frontend deployment failed.'
        }
    }
}
