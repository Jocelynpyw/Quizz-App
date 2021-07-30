// start Game

// let start = document.querySelector('#start')

//  Guide section
let guide = document.querySelector('#guide')
let exit = document.querySelector('#exit')
let continueBtn= document.querySelector('#continue')

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


// result sectio

//  pour avoir tous les h4 de la sectio de quizz
let choice_que = document.querySelectorAll('.choice_que');

 
// declaration des variables que je vais utiliser
let index =0;
let timere = 0;
let interval =0;

let Correct = 0

let UserAns = undefined;

//    ici  je suis en train de rentre onteractive le button Continue

// continueBtn.addEventListener('click',()=>{
//     guide.style.display='none';
//     quiz.style.display='block'
// });


//  ici je cree le temps du jeu

let countDown=()=>{
    if(timere === 20){
        clearInterval(interval);
        next_question.click();
    }else{
        timere++;
        time.innerText = timere;
        
    }
}

// setInterval(countDown,1000);  

let loadData = ()=>{
    if(questionNo){
    questionNo.innerText= index + 1 +". ";
    questionText.innerText=MCQS[index].question;
    option1.innerText=MCQS[index].choice1;
    option2.innerText=MCQS[index].choice2;
    option3.innerText=MCQS[index].choice3;
    option4.innerText=MCQS[index].choice4;

    // timere start
    timere = 0;
}
}
loadData();

//    ici  je suis en train de rentre onteractive le button Continue

continueBtn.addEventListener('click',()=>{
    guide.style.display='none';
    quiz.style.display='block'
    interval=setInterval(countDown,1000);
    loadData();
});

