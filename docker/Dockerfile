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
run apt-get install -y build-essential irssi-dev libglib2.0-dev libssl-dev cmake
run apt-get install -y apache2
run apt-get install -y znc
run apt-get install -y libncurses5 libncurses5-dev
run apt-get install -y fpc

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
add irsii /home/dev/.irssi
add oidentd.conf /home/dev/.oidentd.conf
run git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
run git clone https://github.com/irssi/irssi
run git clone https://github.com/tittof/FiSH-irssi
#i run chsh -s /bin/zsh
run chown -R dev: /home/dev


run npm install forever -g
run ln -s /usr/bin/nodejs /usr/bin/node
run a2enmod proxy_http

user dev
CMD ["zsh"]

