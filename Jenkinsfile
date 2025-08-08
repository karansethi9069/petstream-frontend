pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning frontend repository...'
                // REMOVE or COMMENT this line below:
                // git 'https://github.com/MKN-Infotech/petstream-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy Build') {
            steps {
                sh '''
                rm -rf /home/anuj/petstream-deploy/frontend
                mkdir -p /home/anuj/petstream-deploy/frontend
                cp -r build/* /home/anuj/petstream-deploy/frontend
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful.'
        }
        failure {
            echo '❌ Deployment failed. Check logs.'
        }
    }
}
