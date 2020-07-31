Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version',
                sh 'npm build',
                sh 'npm bundle'
            }
        },
        stage('test') {
            steps {
                sh 'npm bundle',
                sh 'npm test'
            }
        }
    }
}
