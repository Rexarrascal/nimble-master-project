FROM node:16.14-alpine3.14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "serve" ]

# --legacy-peer-deps