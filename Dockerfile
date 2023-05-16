FROM node:18-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Set NODE_ENV
ENV NODE_ENV production
# Bundle app source, but its better to copy the specific folder and files needed
COPY . .
EXPOSE 3000
CMD [ "bin/www" ]