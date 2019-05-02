FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY /dist/rpg-serverless/ /usr/share/nginx/html

EXPOSE 80/tcp
#FROM node:10.15.2-alpine AS builder
#COPY . ./rpg-serverless
#WORKDIR /rpg-serverless
#RUN npm i
#RUN $(npm bin)/ng build --prod

#FROM nginx:1.15.8-alpine
#COPY --from=builder /rpg-serverless/dist/rpg-serverless/ /usr/share/nginx/html