pipeline {
  agent {
    docker {
      image 'node:12-alpine'
    }

  }
  stages {
    stage('gather') {
      steps {
        sh 'npm -v && node --version'
        sh 'npm install'
      }
    }
  }
  environment {
    HOME = '.'
  }
}