#!/bin/bash

export NODE_VERSION=10.15.2
export NVM_VERSION=0.33.11

npm config delete prefix \
  && curl -o- https://raw.githubusercontent.com/creationix/nvm/v${NVM_VERSION}/install.sh | bash \
  && export NVM_DIR="$HOME/.nvm" \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default \
  && node -v \
  && npm -v

npm install

npm run ng build --prod

cp static/Staticfile dist/rpg-serverless/.