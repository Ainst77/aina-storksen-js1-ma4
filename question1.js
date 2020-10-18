//Question 1

const charCounterror = document.querySelector(".error");
const submitButton = document.querySelector("button");
const charCount = document.querySelector("#lastName");
const form = document.querySelector("form");



document.querySelector("button").addEventListener(`click`, checkCharlenght);

function checkCharlenght() {
    
    if(charCount.value.length < 5){
        
        document.querySelector('.error').style.display = ("block");
            form.onsubmit= function(event){
            event.preventDefault();    
        };
        
       
     } 
    else {
        document.querySelector('.error').style.display = ("none");
        form.onsubmit= function(event){
            return true;    
        };
    }
    

};

