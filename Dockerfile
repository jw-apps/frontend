#############
### build ###
#############

# base image
FROM node:14-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /app

# generate build
RUN npm run build

############
### prod ###
############

# base image
FROM httpd:alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/frontend /usr/local/apache2/htdocs/
COPY .htaccess /usr/local/apache2/htdocs/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
# expose port 80
EXPOSE 80
CMD ["httpd-foreground"]
