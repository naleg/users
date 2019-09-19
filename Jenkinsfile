pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh 'npm install typescript'
        sh 'npm install'
      }
    }
    stage('test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('compile') {
      steps {
        sh './node_modules/.bin/tsc'
      }
    }
  }
  environment {
    HOME = '.'
  }
}