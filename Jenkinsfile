pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'npx cypress run --headless --browser chrome --disable-gpu --reporter junit --reporter-options "mochaFile=cypress/results/results.xml"'
            }
        }
    }

    post {
        always {
            junit 'cypress/results/results.xml'

            archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true
        }
    }
}