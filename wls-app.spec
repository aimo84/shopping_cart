Name            : tmh-web
Summary         : Weloveshopping source code
Version         : %{?version}%{!?version:1.0.0}
Release         : %{?release}%{!?release:0}

Group           : Applications/File
License         : (c)Douglas Gibbons

BuildArch       : %{?arch}%{!?arch:x86_64}
BuildRoot       : %{_tmppath}/%{name}-%{version}-root


# Use "Requires" for any dependencies, for example:
# Requires        : httpd

# Description gives information about the rpm package. This can be expanded up to multiple lines.
%description
"Weloveshopping" source code


# Prep is used to set up the environment for building the rpm package
# Expansion of source tar balls are done in this section
%prep

# Used to compile and to build the source
%build

%pre 
if [ "$1" = "1" ]; then
  echo "pre ==> for new install"
  # create user tomcat
  /usr/bin/getent group www-data > /dev/null || /usr/sbin/groupadd -r -g 1500 www-data
  /usr/bin/getent passwd www-data > /dev/null|| /usr/sbin/useradd -r -d /var/www -s /sbin/nologin -g www-data -u 1500 www-data
elif [ "$1" = "2" ]; then
  echo "pre ==> for upgrade"
fi

# The installation.
# We actually just put all our install files into a directory structure that mimics a server directory structure here
%install
rm -rf $RPM_BUILD_ROOT
install -d -m 755 $RPM_BUILD_ROOT/data/projects/tmh-web/%{version}-%{release}/tmh-web
install -d -m 755 $RPM_BUILD_ROOT/var/www/tmh-web
cp ../SOURCES/tmh-web*.tar.gz $RPM_BUILD_ROOT/data/projects

# Contains a list of the files that are part of the package
# See useful directives such as attr here: http://www.rpm.org/max-rpm-snapshot/s1-rpm-specref-files-list-directives.html
%files
%defattr(0644, www-data, www-data, 0755)
%dir %attr(0755, root, root) /var/www
%dir /var/www/tmh-web/
%dir /data/projects/
%dir /data/projects/tmh-web/%{version}-%{release}/
/data/projects/*.tar.gz

%post
#if [ "$1" = "1" ]; then
  echo "post ==> for new install"
  tar xfz /data/projects/tmh-web*.tar.gz -C /data/projects/tmh-web/%{version}-%{release}/
  mkdir -p /data/storage/tmh-web/src/storage/
  #mkdir -p /data/storage/tmh-web/src/upload/
  chown -R www-data:www-data /data/storage/tmh-web/
  ln -f -s -n /data/projects/tmh-web/%{version}-%{release}/tmh-web/ /var/www/tmh-web/tmh-web
  chown -h www-data:www-data /var/www/tmh-web/tmh-web
  chown -RH www-data:www-data /var/www/tmh-web/tmh-web
  ln -s -f -n /data/storage/tmh-web/src/storage/ /var/www/tmh-web/tmh-web/src/storage
  chown -h www-data:www-data /var/www/tmh-web/tmh-web/src/storage
  chown -RH www-data:www-data /var/www/tmh-web/tmh-web/src/storage
  #ln -s -f -n /data/storage/tmh-web/upload/ /var/www/tmh-web/tmh-web/src/public/upload
  #chown -h www-data:www-data /var/www/tmh-web/tmh-web/src/public/upload
  #chown -RH www-data:www-data /var/www/tmh-web/tmh-web/src/public/upload
  rm -rf /data/projects/tmh-web*.tar.gz
  /bin/ls -dt /data/projects/tmh-web/* | tail -n +3 | xargs rm -Rf
#elif [ "$1" = "2" ]; then
#  echo "post ==> for upgrade"
#fi

%preun
if [ "$1" = "1" ]; then
  echo "preun ==> for upgrade"
elif [ "$1" = "0" ]; then
  echo "preun ==> for uninstall"
  #rm -f /var/www/tmh-web/tmh-web/src/public/upload
  #rm -f /var/www/tmh-web/tmh-web/src/storage
  rm -f /var/www/tmh-web/tmh-web
  #rm -rf /data/storage/tmh-web/src/storage/
  #rm -rf /data/storage/tmh-web/src/upload/
  rm -rf /data/projects/tmh-web/
fi

%postun
if [ "$1" = "1" ]; then
  echo "postun ==> for upgrade"
elif [ "$1" = "0" ]; then
  echo "postun ==> for uninstall"
fi

# Used to store any changes between versions
%changelog