// pipeline{
//     agent{
//         docker{
//             image 'mcr.microsoft.com/playwright:v1.17.2-focal'
//         }
//     }
//     stages{
//         stage('install playwright'){
//             steps{
//                 sh '''
//                     npm i -D @playwright/test
//                     npx playwright install
//                 '''
//             }
//         }
//         stage('help'){
//             steps{
//                 sh 'npx playwright test --help'
//             }
//         }
//         stage('test'){
//             steps{
//                 sh '''
//                     npx playwright test --list
//                     npx playwright test
//                 '''
//             }
//         }
//     }
// }

pipeline {
    agent any
    stages {
        stage('PULL') {
            steps {
                sh 'docker pull mcr.microsoft.com/playwright:v1.39.0-jammy'
            }
        }
        stage('RUN') {
            steps {
                sh 'docker run -v C:\Users\retro\Downloads\TestWork\playwright-reports -it playwright-autotests'
            }
        }
        stage('Report'){
            steps{
                sh 'npx playwright show-report'
            }
        }
    }
}