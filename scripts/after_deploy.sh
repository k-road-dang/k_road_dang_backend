# scripts/after_deploy.sh
#!/bin/bash
cd /home/ec2-user/nest-app

export NVM_DIR="/home/ec2-user/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
source /home/ec2-user/.bash_profile

npm install -g yarn
#
yarn start:prod

