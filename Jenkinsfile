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
        sh '''chown -R 112:116 "/.npm"
npm install -g typescript'''
      }
    }
  }
}