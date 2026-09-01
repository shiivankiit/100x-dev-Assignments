import { quizData } from "./quizdata.js"; // This will import all the data from the file into script.js

const questionel=document.querySelector('#question')

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");


// Keep track of current question.

let currentquestion=0;
let score=0;

//Now create a function which append the data inside the html elem.

function loadquiz(){
    questionel.innerText=quizData[currentquestion].question;
    a_text.innerText=quizData[currentquestion].a;
    b_text.innerText=quizData[currentquestion].b;
    c_text.innerText=quizData[currentquestion].c;
    d_text.innerText=quizData[currentquestion].d;

}
loadquiz();

//Selects all the radio buttons.
const radiobtnselection=document.querySelectorAll("input[name='answer']");

//This function will geave you the id of selected answer
function getselectedvalue(){
    let answer=undefined;
    radiobtnselection.forEach((elem) => {
        if(elem.checked){
            answer=elem.id;
        }
    });

    return answer;
}

function deselectanswer(){
    radiobtnselection.forEach((elem)=>{
        elem.checked=false;
    })
}
const submitbtn=document.querySelector('.submitbtn');

submitbtn.addEventListener("click",()=>{
    const selectedanswer=getselectedvalue();

    if(selectedanswer){
         if (selectedanswer === quizData[currentquestion].correct) {
            score++;
        }
    }
    currentquestion++;
    deselectanswer();

    if(currentquestion < quizData.length){
        loadquiz();
    }else{
        alert(`Your score is ${score}/${quizData.length}`);
    }
})
