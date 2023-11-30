pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'playwright-autotests'
        GIT_TOOL = 'GitTool' // Specify your Git tool name here
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout SCM with Git credentials
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/BevzOleksandr/FinalTest', credentialsId: 'your-git-credentials']]])
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Specify the Git tool and credentials
                    def gitTool = tool GIT_TOOL
                    withEnv(["GIT_HOME=${tool(gitTool).home}", "PATH=${tool(gitTool).home}/bin:${env.PATH}"]) {
                        // Create Docker container
                        sh "docker build -t ${DOCKER_IMAGE} ."
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run Docker container
                    if (isUnix()) {
                        sh "docker run -d --name my-container ${DOCKER_IMAGE}"
                    } else {
                        bat "start /B docker run -d --name my-container ${DOCKER_IMAGE}"
                    }
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Execute Playwright tests in Docker container
                    sh "docker exec my-container npm install"
                    sh "docker exec my-container npm test"
                }
            }
        }

        stage('Generate Playwright Report') {
            steps {
                script {
                    // Archive test results for later reference
                    archiveArtifacts artifacts: '**/test-results.xml', allowEmptyArchive: true
                }
            }
        }
    }

    post {
        always {
            // Clean workspace and remove Docker container after completion
            cleanWs()
            script {
                sh "docker rm -f my-container"
            }
        }
    }
}