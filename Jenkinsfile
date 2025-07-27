pipeline {
    agent any

    stages {
        stage('Build Server') {
            steps {
                dir('server') {
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
                dir('server') {
                    sh 'pm2 start index.js --name mern-app || pm2 restart mern-app'
                }
            }
        }
    }
}
