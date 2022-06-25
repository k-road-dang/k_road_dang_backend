# scripts/after_deploy.sh
#!/bin/bash
cd /home/ec2-user/nest-app

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads

source /home/ec2-user/.bash_profile

yarn start:prod


