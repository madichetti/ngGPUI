# base image
FROM node:15.11.0

# set working directory
WORKDIR /app

# add app
COPY . /app

RUN npm install -g @angular/cli
RUN yarn install

# start app
CMD ["ng", "serve", "--host", "0.0.0.0"]
