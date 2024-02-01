FROM node:20-alpine as build-step

WORKDIR /myapp

COPY ./package.json ./
COPY ./app ./app

RUN npm install
RUN npm run build

ARG PORT=4000
ENV PORT ${PORT}
CMD npm run start -- -p $PORT -H 0.0.0.0

# FROM nginx:stable-alpine
# # get build from build-step
# COPY --from=build-step /myapp/.next /usr/share/nginx/html

# # RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d/nginx.conf

# CMD ["nginx", "-g", "daemon off;"]
