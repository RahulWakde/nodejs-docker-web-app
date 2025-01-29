FROM node:18-alpine

#create app directory
WORKDIR /app

#install app dependencies
COPY package*.json ./

#run npm install
RUN npm install

#bundal app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
