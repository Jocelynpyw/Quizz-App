const text = document.getElementById('napla')





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
var playerName=""
const bigin = document.getElementById('bigin')
//   variable de recuperationd des donnees de l'tilisateurs

var  userName = document.getElementById('user-name')
var timeCound = document.getElementById('time-cound')


bigin.addEventListener('click',soumettre)


function soumettre(e){

    if(!userName.value || !timeCound.value ){
        alert('Renseignez bien toutes vos informations')
        
        e.preventDefault()
        
    }
        
    else{
        playerName=userName.value
        timeQuestion=  timeCound.value ;
        // let playerNameAndTimeQuestion = playerName.concat(timeQuestion)
        // localStorage.setItem("playerNameAndTimeQuestion" ,playerNameAndTimeQuestion)
        localStorage.setItem("playerName" ,playerName)
        localStorage.setItem("timeQuestion",timeQuestion.toString())
         if(timeQuestion > 180 || timeQuestion<0){
            alert('le temp d\'une question ne peux pas depasser les 180 s et doit etre strictement positif')
            e.preventDefault()
         }else{

           
            console.log(playerName)
            
            console.log(timeQuestion); 
            // commencer.innerHTML=' <button id="bigin" type="submit"> <a href="jeu.html" style="text-decoration: none;">Commencer</a></button>'
              
          
         }
       
       
    }
    
}