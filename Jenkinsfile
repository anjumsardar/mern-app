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
                    sh 'npm run build'  // Build the frontend (production build)
                }
            }
        }

        stage('Run Backend') {
            steps {
                // Install PM2 globally
                sh 'npm install -g pm2'

                // Start the backend server using PM2
                dir('backend') {
                    sh 'pm2 start server.js --name mern-app || pm2 restart mern-app'
                }
            }
        }

        stage('Serve Frontend') {
            steps {
                dir('client') {
                    // Serve the built frontend (production build) using http-server
                    sh 'npm install -g http-server'  // Install http-server globally
                    sh 'http-server ./dist -p 5173'  // Serve the dist folder on port 5173
                }
            }
        }
    }

   
}
