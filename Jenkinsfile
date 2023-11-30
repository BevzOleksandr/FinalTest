pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'playwright-autotests'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Створення Docker контейнера
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Запуск Docker контейнера
                    sh "docker run -d --name my-container ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Виконання тестів Playwright в Docker контейнері
                    sh "docker exec my-container npm install"
                    sh "docker exec my-container npm test"
                }
            }
        }

        stage('Generate Playwright Report') {
            steps {
                script {
                    // Збір результатів тестів та генерація звіту
                    archiveArtifacts artifacts: '/playwright-report', allowEmptyArchive: true
                }
            }
        }
    }

    post {
        always {
            // Завжди видаляти Docker контейнер після завершення
            cleanWs()
            sh "docker rm -f my-container"
        }
    }
}