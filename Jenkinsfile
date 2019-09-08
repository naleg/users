pipeline {
  agent {
    docker {
      image 'node:12-alpine'
    }

  }
  stages {
    stage('gather') {
      steps {
        sh 'ls'
        sh 'pwd'
        sh 'npm -v && node --version'
        sh 'npm install typescript'
      }
    }
  }
}