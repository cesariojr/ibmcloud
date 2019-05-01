#!/bin/bash
cd ./dist/rpg-serverless
cf push "${CF_APP}"
