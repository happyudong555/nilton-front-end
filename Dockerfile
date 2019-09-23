FROM node:10.16.3

# Create app directory
RUN mkdir -p /nilton-front-end
WORKDIR /nilton-front-end

# Install app dependencies
COPY package.json /nilton-front-end/
RUN yarn install

# Bundle app source
COPY . ./
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "dev" ]