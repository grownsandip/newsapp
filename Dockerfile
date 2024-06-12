FROM node:20-alpine

WORKDIR /newsapp
COPY package*.json .
RUN npm install 
COPY . .
EXPOSE 3000
USER node
CMD ["npm","run","start"]
