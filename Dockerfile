FROM node:10.16.3

# Create app directory
RUN mkdir -p /usr/src/nilton-front-end/
WORKDIR /usr/src/nilton-front-end/

# Install app dependencies
COPY package.json /usr/src/nilton-front-end/
RUN yarn install

# Bundle app source
COPY . ./
RUN yarn build

EXPOSE 80
CMD [ "yarn", "dev" ]