FROM node:lts

WORKDIR /app
COPY . .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

# Our app will run on port 9000
EXPOSE 4001

# Start an apollo server at port 9000
# CMD ["npm", "run", "start:dev"]