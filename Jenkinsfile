pipeline {
    agent {label 'yash'}
    
    stages{
        stage('pull the code'){
            steps{
                git branch: 'main', url:'https://github.com/Yashgoswami14/react-blog-app'
            }
        }
        
        stage('building the image'){
            steps{
                sh 'docker build -t react-blog-app:latest .'
            }
        }
        
        stage('push image to dokcerhub'){
            steps{
               withCredentials([usernamePassword(credentialsId:"dockerHubCred",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
               sh 'docker login -u ${dockerHubUser} -p ${dockerHubPass}'
               sh 'docker tag react-blog-app:latest yashgoswami14/react-blog-app:latest'
               sh 'docker push yashgoswami14/react-blog-app:latest'
           }
           }
        }
        
        stage('deploying the code') {
            steps {
                sh '''
                docker ps -aq -f name=react-app | xargs -r docker rm -f
                docker run -d -p 80:5173 --name react-app yashgoswami14/react-blog-app:latest
                '''
            }
        }

    }
}