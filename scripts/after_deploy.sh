# scripts/after_deploy.sh
#!/bin/bash
cd /home/ec2-user/nest-app

#curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.39.1/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads

source /home/ec2-user/.bash_profile


nvm -v
#nvm install 16.15.1
#nvm alias default 16.15.1
node -v

#npm install --global yarn
yarn
yarn start:prod


