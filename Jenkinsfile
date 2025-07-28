pipeline {
    agent any
    environment {
        PATH = "/opt/homebrew/bin:${env.PATH}"
    }
    stages {
        stage('Build Server') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Client') {
            steps {
                dir('client') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Run App') {
            steps {
                // Install PM2 globally
                sh 'npm install -g pm2'

                // Start the backend server using PM2
                dir('backend') {
                    sh 'pm2 start server.js --name mern-app || pm2 restart mern-app'
                }

                // Start the frontend app using npm (dev mode)
                dir('client') {
                    sh 'npm run dev &'
                }
            }
        }
    }

    post {
        always {
            // Clean up after pipeline run
            sh 'pm2 stop mern-app'
            sh 'pm2 delete mern-app'
        }
    }
}
