ARG VERSION=7.4
FROM php:${VERSION}-fpm-bullseye

RUN apt-get update

RUN apt-get install -y git zlib1g-dev libzip-dev curl libjpeg62-turbo libjpeg-dev libpng-dev libfreetype6 libfreetype6-dev libjpeg62-turbo-dev libxml2-dev
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libnss3 lsb-release xdg-utils wget libgbm-dev

RUN apt-get install -y nodejs

RUN apt-get --allow-releaseinfo-change update
COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/
RUN install-php-extensions imagick

RUN docker-php-ext-configure gd --with-jpeg=/usr/lib/x86_64-linux-gnu --with-freetype=/usr/lib/x86_64-linux-gnu
RUN docker-php-ext-install pdo pdo_mysql zip -j$(nproc) gd soap

# Install Composer for Laravel
RUN curl https://getcomposer.org/composer-1.phar -o composer.phar
RUN mv composer.phar /usr/local/bin/composer
RUN chmod 755 /usr/local/bin/composer

# Setup timezone to Etc/UTC
RUN cat /usr/src/php/php.ini-production | sed 's/^;\(date.timezone.*\)/\1 \"Etc\/UTC\"/' > /usr/local/etc/php/php.ini

# Disable cgi.fix_pathinfo in php.ini
RUN sed -i 's/;\(cgi\.fix_pathinfo=\)1/\10/' /usr/local/etc/php/php.ini

#Set timezone
RUN ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime

WORKDIR /var/www/html