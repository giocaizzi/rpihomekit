FROM node:20-alpine as build-step

WORKDIR /myapp

COPY ./package.json ./next.config.js ./
COPY ./app ./app
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-step ./.next/standalone ./
# static files are not handled by nextjs
COPY --from=build-step ./.next/static ./.next/static
