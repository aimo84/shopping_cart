ARG VERSION=latest
FROM mysql:${VERSION}

ENV MYSQL_USER mysql

VOLUME /etc/mysql/conf.d/

# COPY ./my.cnf /etc/mysql/.
COPY ./config.cnf /etc/mysql/conf.d/

#VOLUME /var/lib/mysql
