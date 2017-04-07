from ubuntu:16.04
run apt-get update -y
run apt-get install -y git
run apt-get install -y vim
run apt-get install -y make
run apt-get install -y subversion
run apt-get install -y nodejs
run apt-get install -y npm
run apt-get install -y lynx
run apt-get install -y wget
run apt-get install -y curl
run apt-get install -y zsh
run apt-get install -y apache2

run useradd dev
run mkdir /home/dev && chown -R dev: /home/dev
run mkdir /var/shared/
run touch /var/shared/placeholder
run chown -R dev:dev /var/shared
volume /var/shared
# run ln -s /var/shared/.ssh
expose 3000

workdir /home/dev
env HOME /home/dev
add server.js /home/dev/server.js
add vimrc /home/dev/.vimrc
add vim /home/dev/.vim
add zshrc /home/dev/.zshrc
run git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
# run chsh -s /bin/zsh
run chown -R dev: /home/dev


run npm install forever -g
run a2enmod proxy_http

user dev
CMD ["zsh"]

