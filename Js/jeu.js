

// let start = document.querySelector('#start')

//  Guide section
let guide = document.querySelector('#guide')
let exit = document.querySelector('#exit')
let continueBtn= document.querySelector('#continue')
let notificationTime = document.querySelector("#notificationTime")

// Quiz section 
let quiz = document.querySelector('#quiz')
let time = document.querySelector('#time')

// question Section 
let questionNo = document.querySelector('#questionNo')
let questionText = document.querySelector('#questionText')


// Multiple choice of Question
let option1 = document.querySelector('#option1')
let option2 = document.querySelector('#option2')
let option3 = document.querySelector('#option3')
let option4 = document.querySelector('#option4')

// Correct and next Button
let total_correct = document.querySelector('#total_correct')
let next_question = document.querySelector('#next_question')

// let total_correct = document.querySelector('#total_correct')
let points = document.querySelector('#points')
let startAgain = document.querySelector('#startAgain')
let quit = document.querySelector('#quit')

//   ces varibles que je veux declarer ici bas sont celles du joueur que je vais recuperer dans le localStorage
let playerNamme ;
let timmeQuestion ;
let playerNameAndTimeQuestion ;

let pointBonus =0;

// result sectio
// Correct 
//  pour avoir tous les h4 de la sectio de quizz
let choice_que = document.querySelectorAll('.choice_que');

//    selection of my progress Bar 
progressBar = document.querySelector('#progressBar')

// selection of my dashboard's elements
let dashboard = document.querySelector('#dashboard')
 let dashboardPlayerName = document.querySelector('#dashboard-header p')
 let dashboardScore =document.querySelector('#score')
 let dashboardVrai =document.querySelector('#vrai')
 let dashboardFaux =document.querySelector('#faux')
 let dashboardBonus = document.querySelector('#bonus')

 let bonus =0;
 let faux; 
 let vrai;
 


//   variables pour  ma nouvelle question
var newQuestion = document.querySelector('#new-question');
var newOption1 = document.querySelector('#new-option1') ;
var newOption2 = document.querySelector('#new-option2') ;
var newOption3 = document.querySelector('#new-option3') ;
var newOption4 = document.querySelector('#new-option4') ;
var newAnswer = document.querySelector('#new-answer')
var exitNewQuestion = document.querySelector('#exit-new-question')
var confirmeNewQuestion = document.querySelector('#confirme-new-question')
var  addQuestion = document.querySelector('#add-question')
var settingBtn= document.querySelector('#setting')  
                       //  ici ce sont les variables de qui vont contenir mes differentes questionss 
var nouvelleQuestion ={
    question: "",
    choice1:"",
    choice2:"",
    choice3:"",
    choice4:"",
    answer:2
};


// declaration des variables que je vais utiliser
let index =0;
let timere = 0;
let interval =0;

var Correct = 0
var inCorrect=0
let score=0
let scoreTotal=0;

let UserAns = undefined;

//    ici  je suis en train de rentre onteractive le button Continue

// continueBtn.addEventListener('click',()=>{
//     guide.style.display='none';
//     quiz.style.display='block'
// });


//  ici je cree le temps du jeu

let countDown=()=>{
    if(timere === timmeQuestion){
        clearInterval(interval);
        next_question.click();
    }else{
        timere++;
        progressBar.style.width=`${(timere/timmeQuestion)*100}%`
        progressBar.style.transition='width ease'
        time.innerText = timere;
        
    }
}

// setInterval(countDown,1000);  

//    Shuffle cest methode ferra en sorte que les valeurs de notre tableau ne soient pas statiques
function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}

// var demoArray = [1, 3, 5];
// shuffleArray(demoArray);
// console.log(demoArray)


//   fin de la declaration de la fonction ShuffleArrayu




var loadData = ()=>{

     questionNo.innerText= index + 1 +". ";
     questionText.innerText=MCQS[index].question;
    option1.innerText=MCQS[index].choice1;
    option2.innerText=MCQS[index].choice2;
    option3.innerText=MCQS[index].choice3;
    option4.innerText=MCQS[index].choice4;

    // timere start
    timere = 0;
}

 function chargementInfoJoueur (){
    playerNamme =localStorage.getItem("playerName")
    timmeQuestion =parseInt(localStorage.getItem("timeQuestion"))
    // alert('chargement effecue avec success')
    notificationTime.innerText =`1.Hello ${playerNamme} you have only ${timmeQuestion} seconds for each question. `
}

//    ici  je suis en train de rentre onteractive le button Continue

continueBtn.addEventListener('click',()=>{
    // lorsqu'on comence le jeu en chargeant l'autre page on recuperere les donnees du joueur dans le localStorage
    //  playerNameAndTimeQuestion =localStorage.getItem("playerNameAndTimeQuestion")
    // playerNamme =localStorage.getItem("playerName")
    //  timmeQuestion = localStorage.getItem("timeQuestion")
    
   dashboard.style.display='flex'
    clearInterval(interval)
    guide.style.display='none';
    quiz.style.display='block'
    interval=setInterval(countDown,1000);
    shuffleArray(MCQS)
    loadData();
    choice_que.forEach(removeActive=>{
        removeActive.classList.remove("active")
        removeActive.classList.remove('incorrectAnswer')
        removeActive.classList.remove('correctAnswer')


       
    })

    total_correct.innerHTML=`${Correct=0} Out of ${MCQS.length} Questions`
    dashboardPlayerName.innerText=`${playerNamme}`
    


 
});

choice_que.forEach( (choices,choiceNo)=>{
    //   a ce niveauje rajoutte +1  parceques le choiceNo commence a compter partir de zero
     choiceNo =choiceNo+1;
     

    choices.addEventListener('click',()=>{
        choices.classList.add("active");
        
        // check Answer
        if(choiceNo ===MCQS[index].answer){
            choices.classList.remove("active");
            choices.classList.add('correctAnswer')
                Correct++;
                score+=5;
                scoreTotal=score+ bonus
                dashboardVrai.innerText=`+${Correct}`
                dashboardScore.innerText=`0${scoreTotal}`

                //  ace niveau je vais rajouter des bonnuss  a une variable plutard la je vais d'abord manger 
                pointBonus++;
                console.log(pointBonus);
                if(pointBonus==5){
                    bonus =bonus+5;
                    // score=score+5;
                    dashboardBonus.innerText=`+${bonus}pts`
                    console.log(bonus)
                    console.log('Vous venez de rempoter 5points bonnus');
                    pointBonus=0;
                    
                }


            // choices.classList.remove("active");
            // choices.classList.add("correctAnswer")
        }else{
            choices.classList.remove("active");
            choices.classList.add('incorrectAnswer')
            Correct+=0;
            inCorrect++;
            console.log(inCorrect)
            pointBonus=0;
            dashboardFaux.innerText=`+${inCorrect}`
            // choices.classList.remove("active");
            // choices.classList.add("incorrectAnswer")
           
        }
        //stop counter
        clearInterval(interval)
        // disable all option when user select an option
        for(i=0;i<=3;i++){
            choice_que[i].classList.add("disabled")
        }
    })

});

//  what happen when 'next' Button Will Click
next_question.addEventListener('click',()=>{
    // if index is less then MCQS.length
    if(index!==MCQS.length-1){
        index++;

        choice_que.forEach(removeActive=>{
            
            removeActive.classList.remove("active");
            removeActive.classList.remove('correctAnswer')
            // choices.classList.remove("active");
            removeActive.classList.remove('incorrectAnswer')
    
           
        })
        //question
        loadData()
        //result
        total_correct.style.display="block"
        total_correct.innerHTML=`${Correct} Out of ${MCQS.length} Questions`;
        clearInterval(interval);
        interval=setInterval(countDown,1000)

    }else{
        index=0;
        // when quizz is compleyte
        clearInterval(interval);
        quiz.style.display='none';
        dashboard.style.display='none'
        points.innerHTML=`You Got ${Correct} Out of ${MCQS.length} `;
        document.querySelector('#result-score').innerText=`Score:${scoreTotal}`
        result.style.display='block'



    }
    for(i=0;i<=3;i++){
        choice_que[i].classList.remove("disabled")
    }

})




// what happen when 'start again' button will click

startAgain.addEventListener('click',()=>{
    result.style.display='none';
    guide.style.display='block';

});



//    what happen when 'exit de new question menu' button will click 


settingBtn.addEventListener('click',()=>{
    quiz.style.display='none'
    addQuestion.style.display='block'
    dashboard.style.display='none'
    clearInterval(interval)
})
exitNewQuestion.addEventListener('click',()=>{
    guide.style.display='block';
    addQuestion.style.display='none';
    clearInterval(interval)

});



//    what happen when 'confirm menu' button will click 

confirmeNewQuestion.addEventListener('click',(e)=>{
    if(!newQuestion.value ||
       ! newOption1.value ||
        !newOption2.value ||
       ! newOption3.value ||
        !newOption4.value ||
        !newAnswer.value ){
            alert('Veuiller Rentrez ces Informations bonjour! ')
            // clearInterval(interval)
            // setInterval(countDown,1000)
            e.preventDefault;
        e.stopPropagation;
        }else{
            nouvelleQuestion.question=newQuestion.value;
            nouvelleQuestion.choice1=newOption1.value;
            nouvelleQuestion.choice2=newOption2.value;
            nouvelleQuestion.choice3=newOption3.value;
            nouvelleQuestion.choice4=newOption4.value;
            nouvelleQuestion.answer=newAnswer.value;
            alert('Information bien renseignes Merci!')
            guide.style.display='block';
            addQuestion.style.display='none';
            MCQS.push(nouvelleQuestion);
            // clearInterval(interval)
            // setInterval(countDown,1000)

        }
        

});  