# scripts/after_deploy.sh
#!/bin/bash
REPOSITORY=/home/ec2-user/nest-app
cd $REPOSITORY

export NVM_DIR="~/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

npm install -g yarn

yarn start:prod

