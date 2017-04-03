from ubuntu:16.04
run apt-get update -y
run apt-get install -y git
run apt-get install -y vim
run apt-get install -y make
run apt-get install -y subversion
run apt-get install -y nodejs
run apt-get install -y npm
run apt-get install -y lynx

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
add vimrc /home/dev/.vimrc
add vim /home/dev/.vim
add zshrc /home/dev/.zshrc
run chown -R dev: /home/dev
user dev

