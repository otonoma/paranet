FROM node:16-alpine
WORKDIR /site_actor

COPY package.json ./
RUN npm install
RUN npm cache clean --force

ENV PATH=/site_actor/node_modules/.bin:$PATH

WORKDIR /site_actor/dev
COPY tsconfig.json ./

COPY src ./src
COPY .env ./

EXPOSE ${PORT}

CMD ["npm", "run", "start:watch"]