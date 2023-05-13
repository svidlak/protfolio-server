#Specify a base image
FROM node:18

#Specify a working directory
WORKDIR /app

#Copy the dependencies file
COPY ./package.json ./

#Install dependencies
RUN npm install

#Copy remaining files
COPY . .

#expose express port
EXPOSE 8080

#Default command
CMD [ "npm", "start" ]
