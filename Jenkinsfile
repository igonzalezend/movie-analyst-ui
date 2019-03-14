pipeline {

	environment{
		imageTag = 'igonzalezend/movie-analyst-ui' + ":$BUILD_NUMBER"
		credentials = 'dockerhub'
	}

	agent any    

	stages {                                 
		stage('Build') {                         
			steps {                                 
				echo 'Building..'
				script {
					dockerImage = docker.build imageTag
				}             
			}                 
		}/**              
		stage('Test') {                         
			steps {                                 
				echo 'Testing...'
				script{
					dockerImage.inside {
						sh 'npm test'
					}
				}
			}                 
		}
		stage('push') {
			steps {
				echo 'pushing'
				script {
					docker.withRegistry('', credentials){
						dockerImage.push()
					}
				}
				sh 'docker rmi --force $imageTag'
			}
		}                 
		stage('Deploy') {                         
			steps {                                 
				echo 'Deploying....'
				input("Deploy the image?")
				script {
					docker.withRegistry('', credentials){
						sh 'docker pull $imageTag'
					}
				}
				sh 'docker rm -f $(docker ps -a -q)'
				sh 'docker run -d -p 8000:8000 $imageTag'
				sh 'docker image prune -f -a'                                    					
			}                 
		}**/         
	} 
} 