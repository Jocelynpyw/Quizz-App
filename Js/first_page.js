const text = document.getElementById('napla')


const moi =10;
const strtext=text.textContent
text.textContent=""


const splittext = strtext.split("")
 
for(let i=0 ;i<splittext.length ; i++){
    text.innerHTML += "<span>" +splittext[i]+ "</span>";

}
let char= 0
let timer = setInterval(onTick,50)
function onTick (){
    const span = document.querySelectorAll('span')[char];
    span.classList.add('fade');
    char ++
    if(char === splittext.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}


// evenement sur le button commencer 
const commencer=document.getElementById('commencer')
var userName = document.getElementById('user-name')
var timeCound = document.getElementById('time-cound')
var timeQuestion=0
var playerName
const bigin = document.getElementById('bigin')


commencer.addEventListener('click',soumettre)


function soumettre(e){
    let userName = document.getElementById('user-name')
let timeCound = document.getElementById('time-cound')
    if(userName.validity.valueMissing || timeCound.validity.valueMissing ){
        alert('Renseignez bien toutes vos informations')
        
    }
        
    else{
        playerName=userName.value
        timeQuestion= parseInt( timeCound.value); 
         if(timeQuestion > 180){
            alert('le temp d\'une question ne peux pas depasser les 180 s')
         }else{

           
            console.log(playerName)
            
            console.log(timeQuestion); 
            // commencer.innerHTML=' <button id="bigin" type="submit"> <a href="jeu.html" style="text-decoration: none;">Commencer</a></button>'
              
           commencer.style.visibility='hidden'
           bigin.style.visibility='visible'
         }
       
       
    }
    
}