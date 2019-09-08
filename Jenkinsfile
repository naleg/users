pipeline {
    agent {
        docker { image 'node:12-alpine' }
    }
    stages {
        stage('Build') {
            steps {
                sh './jenkins-scripts/install.sh'
            }
            steps {
                sh 'npm install'
            }
        }
    }
}