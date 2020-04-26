FROM node:alpine
WORKDIR '/app/frontend'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/frontend/build /usr/share/nginx/html
