# scripts/after_deploy.sh
#!/bin/bash
cd /home/ec2-user/nest-app
. ~/.nvm/nvm.sh
nvm install 16
node -v
npm install -g yarn
yarn -v
#npm install -g yarn
#
#yarn start:prod

