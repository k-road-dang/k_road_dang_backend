# scripts/before_deploy.sh
#!/bin/bash
REPOSITORY=/home/ec2-user
cd $REPOSITORY


pm2 kill

sudo rm -rf nest-app
