FROM node:10.14.2 AS build
COPY . /app/web
WORKDIR /app/web
RUN npm install -g npm
RUN npm install
RUN npm run build
RUN rm -rf node_modules/
RUN npm install --production

FROM nginx:alpine
WORKDIR /var/www/linebiz-cms
COPY --from=build /app/web/dist /var/www/linebiz-cms
COPY --from=build /app/web/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]