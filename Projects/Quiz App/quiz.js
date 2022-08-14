 const quizData = [
    {
        question : 'What is 69/69*69+69-69?',
        a: '46',
        b: '76',
        c: '138',
        d: '69',
        correct:'d'
    },
    {
        question: 'What does cow drink?',
        a: 'Milk',
        b: 'Water',
        c: 'Beer',
        d: 'Red "Bull"(lol)',
        correct: 'b'
    },
    {
        question: 'Does Saina love Bidhan?',
        a: 'Yeah',
        b: 'Absolutely not',
        c: 'Who?',
        d: 'I thought her BF is Anshu...',
        correct: 'd'
    },
    {
        question: 'Which is the best color in the world?',
        a: 'Yellow',
        b:'Blue',
        c:'Black',
        d:'69',
        correct: 'd'
    },
 ]
 const quiz = document.getElementById('quiz');
 const answersEls= document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

 let currentQuiz = 0;
 let score= 0;
 loadQuiz();

 function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 }

function getSelected(){
   

    let answer = undefined;

    answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
   answersEls.forEach((answerEl) =>{
    answerEl.checked = false
   })
}


 submitBtn.addEventListener('click',()=>{
    //check to see the answer
     const answer = getSelected();
     
        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
        
            }else{
                quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`
            }
    } 
     
    
 });
