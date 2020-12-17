function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
       console.log(`${this.title} was written by ${this.author} and is ${this.pages} long. Have I read it yet? ${this.read}!`)
    }
}

let Book1 = new Books("The Shining", "Stephan King", 400, "Yes")




function PrintStuff (myDocuments) {
    this.documents = myDocuments;
}
    
PrintStuff.prototype.print = function () {
console.log(this.documents);
}
    
var newObj = new PrintStuff ("I am a new Object and I can print.");
    
newObj.print (); 



//What is the benefit of using prototype over just inluding it as a property in the function?

function PrintStuff (myDocuments) {
    this.documents = myDocuments;
    this.print = function(){
        console.log(this.documents);
    }
}



eval "$(rbenv init -)"




export PS1="\[\033[36m\]\u@\h:\[\033[32m\]\w\[\033[m\] $ "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
alias ls='ls -GFh'





export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export BASH_SILENCE_DEPRECATION_WARNING=1

