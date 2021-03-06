# Lines configured by zsh-newuser-install
#alias svn='svn --username laurent.perez --password Dfghjklm1'
export ZSH=$HOME/.oh-my-zsh
plugins=(git git-flow gitignore jira git-extras mvn osx sublime sudo) 
source $ZSH/oh-my-zsh.sh

HISTFILE=~/.histfile
HISTSIZE=100000
SAVEHIST=100000
bindkey -e
bindkey ^f  history-incremental-search-backward

  case $TERM in
  (xterm*)
        function precmd () { print -Pn "\e]0;%n($(id -ng))@%m:%~\a" }
  ;;
  esac

# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/Users/laurent/.zshrc'

autoload -Uz compinit
compinit
autoload promptinit
promptinit
#prompt adam1
prompt clint
#prompt phil
setopt correctall
setopt autocd
setopt auto_cd
setopt auto_pushd
setopt pushd_ignore_dups
setopt pushd_silent

export JAVA_HOME=~/.sdkman/candidates/java/current
export JDK_HOME=$JAVA_HOME
export M2_REPO=/Users/laurent/.m2/repository
alias ssvn='~/SVN'
alias ggit='~/Desktop/work/git'
alias wk='~/Desktop/work'
git config --global user.name "lperez"
git config --global user.email "laurent.perez@lsa-courtage.com"
git config --global rebase.autosquash true
git config --global rerere.enabled true
git config --global pull.rebase preserve
git config --global remote.origin.prune true
git config --global alias.dog "log --all --decorate --oneline --graph"
git config --global alias.merge "merge -Xignore-all-space"
git config --global alias.tidy "rebase -i @{upstream}"
git config --global alias.st status
git config --global alias.com commit
git config --global alias.ci commit
git config --global alias.br branch
git config --global alias.co checkout
git config --global alias.cl checkout
alias glog='git lg1'
alias k='gitk'
alias pull='git pull'
alias gba='git branch -avv'
alias gco='git checkout'
alias gdo='git diff origin/master'
alias gdp='git diff @{push}..'
alias glp='git log @{push}..'
alias gpdo='git diff origin/master'
alias grso='git remote show origin'
alias co='git checkout'
alias grh='git reset --hard HEAD^'
alias itg='git co integration'
alias master='git co master'
alias mcc='mvn clean compile'
alias mcp='mvn clean package'
alias mci='mvn clean install'
alias mcu='mvn clean install -U'
alias mcd='mvn clean install deploy -U'
alias mi='mvn install'
alias mc='mvn compile'
alias mp='mvn package'
alias md='mvn deploy'
alias mt='mvn test'
alias mct='mvn clean test'
alias CLEARREPO='rm -fr ~/.m2/repository'
alias sup='svn up'
alias ll='ls -la'
alias grep='egrep --exclude-dir=\.svn --color=auto'
alias s='cd ..'
alias c='clear'
alias ll='ls -la'
alias less='less --quiet'
alias '..'='cd ..'
alias -g ...='../..'
alias -g ....='../../..'
alias -g .....='../../../..'
alias svndiff='svn diff --diff-cmd ~/.diffwrap.sh'
alias sd='svn diff --diff-cmd=colordiff'
alias ant='ant -logger org.apache.tools.ant.listener.AnsiColorLogger'
alias eclipse='/Users/laurent/work/eclipse/eclipse'

svn_revision()
{
  svn info $@ | awk '/^Revision:/ {print $2}'
}

svn_up_and_log()
{
  local old_revision=`svn_revision $@`
  local first_update=$((${old_revision} + 1))
  svn up -q $@
  if [ $(svn_revision $@) -gt ${old_revision} ]; then
    svn log -v -rHEAD:${first_update} $@
  else
    echo "No changes."
  fi
}

svn_status() {
svn st --ignore-externals ${arguments} | grep -v '^X' | sed -e 's/^\?.*$/^[[1;34m\0^[[m/' -e 's/^!.*$/^[[1;31m\0^[[m/' -e 's/^A.*$/^[[1;32m\0^[[m/' -e 's/^M.*$/^[[1;33m\0^[[m/' -e 's/^D.*$/^[[0;31m\0^[[m/'
}

# End of lines added by compinstall


#PATH=/opt/local/bin:$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting
PATH=/opt/local/bin:$PATH # Add RVM to PATH for scripting

export NVM_DIR="/Users/laurent/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

export PATH=/opt/local/bin:$PATH

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="/Users/laurent/.sdkman"
[[ -s "/Users/laurent/.sdkman/bin/sdkman-init.sh" ]] && source "/Users/laurent/.sdkman/bin/sdkman-init.sh"

PATH="/Users/laurent/perl5/bin${PATH:+:${PATH}}"; export PATH;
PERL5LIB="/Users/laurent/perl5/lib/perl5${PERL5LIB:+:${PERL5LIB}}"; export PERL5LIB;
PERL_LOCAL_LIB_ROOT="/Users/laurent/perl5${PERL_LOCAL_LIB_ROOT:+:${PERL_LOCAL_LIB_ROOT}}"; export PERL_LOCAL_LIB_ROOT;
PERL_MB_OPT="--install_base \"/Users/laurent/perl5\""; export PERL_MB_OPT;
PERL_MM_OPT="INSTALL_BASE=/Users/laurent/perl5"; export PERL_MM_OPT;
