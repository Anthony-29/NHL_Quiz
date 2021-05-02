//Either store a or b depending on which the correct answer is 
const correctAnswers = ['B','A','A','B','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const span = document.querySelector('span');

form.addEventListener('submit', e =>{
    //prevents it from refreshing once submit has been selected
    e.preventDefault();
    
    let score = 0;
                        //this will look for whichever one is selected when the submit button is clicked
    const userAnswers =[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];

    //check answers
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score +=20;
           
        }
    });



    //Automatically scroll to the top 
    //Uses window object
    //takes in 2 arguments x-cord and y-cord
    scrollTo(0,0);


    //searches for span within the result div class
    result.classList.remove('d-none');

    //animate score using setInterval
    let output = 0;
    const timer = setInterval(() =>{
        result.querySelector('span').innerText = `${output}%`; 
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    },15);
}) ;


