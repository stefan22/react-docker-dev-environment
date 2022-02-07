FROM node:14.18.3-alpine

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY ./ui ./


RUN npm install
# RUN npm install -D webpack-cli -g
RUN npm install react-scripts@latest -g







# start app
CMD ["npm","start"]
