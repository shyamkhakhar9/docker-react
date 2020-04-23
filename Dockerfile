FROM node:alpine as builder

WORKDIR /app/frontend

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "run", "build"]

FROM nginx
COPY --from=builder app/frontend/build /usr/share/nginx/html
