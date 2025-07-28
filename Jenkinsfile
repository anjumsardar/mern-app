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
                sh 'npm install -g pm2'
                dir('backend') {
                    sh 'pm2 start server.js --name mern-app || pm2 restart mern-app'
                }
            }
        }
    }
}
