pipeline {
    agent any
    stages{
        stage('Build'){
            steps {
                sh "docker build -t 'jenkins' -f ./Dockerfile ."
            }
        }
        stage('Run'){
            steps{
                sh "docker run -p 8080:80 jenkins"
            }
        }
    }
}