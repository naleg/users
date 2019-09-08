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
        sh 'npm install typescript'
        sh 'npm install'
        sh 'tsc'
        sh 'node build/app.js'
      }
    }
  }
  environment {
    HOME = '.'
  }
}