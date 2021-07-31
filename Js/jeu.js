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
let points = document.querySelector('#points')
let startAgain = document.querySelector('#startAgain')
let quit = document.querySelector('#quit')

// result sectio
// Correct 
//  pour avoir tous les h4 de la sectio de quizz
let choice_que = document.querySelectorAll('.choice_que');

//    selection of my progress Bar 
progressBar = document.querySelector('#progressBar')
 
// declaration des variables que je vais utiliser
let index =0;
let timere = 0;
let interval =0;

var Correct = 0

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
        progressBar.style.width=`${(timere/20)*100}%`
        progressBar.style.transition='width ease'
        time.innerText = timere;
        
    }
}

// setInterval(countDown,1000);  

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

// loadData();

//    ici  je suis en train de rentre onteractive le button Continue

continueBtn.addEventListener('click',()=>{
    guide.style.display='none';
    quiz.style.display='block'
    interval=setInterval(countDown,1000);
    loadData();
    choice_que.forEach(removeActive=>{
        removeActive.classList.remove("active")

       
    })

    total_correct.innerHTML=`${Correct=0} Out of ${MCQS.length} Questions`

 
});

choice_que.forEach( (choices,choiceNo)=>{
    choices.addEventListener('click',()=>{
        choices.classList.add("active");
        // check Answer
        if(choiceNo ===MCQS[index].answer){
            Correct++;


            // choices.classList.remove("active");
            // choices.classList.add("correctAnswer")
        }else{
            Correct+=0;
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
        points.innerHTML=`You Got ${Correct} Out of ${MCQS.length} `;
        result.style.display='block'



    }
    for(i=0;i<=3;i++){
        choice_que[i].classList.remove("disabled")
    }

})
//    what happen hen 'quit ' button will click
quit.addEventListener('click',()=>{
    result.style.display='none';
    guide.style.display='block';

});


// what happen when 'start again' button will click

startAgain.addEventListener('click',()=>{
    result.style.display='none';
    guide.style.display='block';

});