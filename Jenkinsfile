pipeline {
    agent any
    stages{
        stage('Build'){
            steps {
                sh "docker build -t 'jenkins' -f ./Dockerfile ."
            }
        }
        stage('Run') {
        steps {
            script {
                // Зупинка попереднього контейнера, якщо він існує
                sh "docker stop my-jenkins || true"
                sh "docker rm my-jenkins || true"
                
                // Запуск нового контейнера
                sh "docker run -p 8080:80 --name my-jenkins jenkins"
            }
        }
    }
    }
}