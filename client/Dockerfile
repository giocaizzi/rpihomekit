FROM node:20-alpine as build-step

WORKDIR /myapp

COPY ./package.json ./
COPY ./app ./app
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-step /myapp/.next /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
