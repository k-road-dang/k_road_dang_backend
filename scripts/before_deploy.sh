# scripts/before_deploy.sh
#!/bin/bash
REPOSITORY=/home/ec2-user
cd $REPOSITORY

sudo rm -rf nest-app
