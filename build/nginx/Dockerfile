FROM nginx

WORKDIR /var/www/html

COPY nginx.conf /etc/nginx/
COPY laravel.conf /etc/nginx/sites-available/

#Set timezone
RUN ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime
