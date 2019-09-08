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
        sh './node_modules/.bin/tsc'
        sh 'node build/app.js'
      }
    }
  }
  environment {
    HOME = '.'
  }
}