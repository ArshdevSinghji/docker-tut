FROM node

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build