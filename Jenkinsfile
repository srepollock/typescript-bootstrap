pipeline {
    agent { docker { image 'node:lts-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm build'
                sh 'npm bundle'
            }
       }
        stage('test') {
            steps {
                sh 'npm bundle'
                sh 'npm test'
            }
        }
    }
}
