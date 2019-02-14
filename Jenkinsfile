pipeline{
    agent any

    stages
    {
        stage("Build"){
            steps{
                sh '''
                    npm install
                    cd ..
                    tar -czf movie-analyst-ui.tar.gz RampUp_movie-analyst-ui
                '''
            }
        }

        stage("Deploy"){
            parallel {
                stage('Deploy in front 1c'){
                    steps{
                        dir('/var/lib/jenkins/workspace') {
                            sshPublisher(publishers: [sshPublisherDesc(configName: 'FrontEnd_1C', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-ui.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                            sh '''
                                ssh ubuntu@10.0.4.175 "tar -xzf movie-analyst-ui.tar.gz && cd RampUp_movie-analyst-ui"
                                ssh ubuntu@10.0.4.175 "sudo chown ubuntu:ubuntu /home/ubuntu/.pm2/rpc.sock /home/ubuntu/.pm2/pub.sock ; pm2 stop all ; pm2 start"
                            '''
                        }                
                    }
                }
            
                stage('Deploy in front 1d'){
                    steps{
                        dir('/var/lib/jenkins/workspace') {
                            sshPublisher(publishers: [sshPublisherDesc(configName: 'FrontEnd_1C', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'movie-analyst-ui.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                            sh '''
                                ssh ubuntu@10.0.5.243 "tar -xzf movie-analyst-ui.tar.gz && cd RampUp_movie-analyst-ui"
                                ssh ubuntu@10.0.5.243 "sudo chown ubuntu:ubuntu /home/ubuntu/.pm2/rpc.sock /home/ubuntu/.pm2/pub.sock ; pm2 stop all ; pm2 start"
                            '''
                        }
                    }
                }
            }
        }
    }
}