import {questionsLvl1} from "./questionLvl1.js"

let activeCaseId = 0;

const niveau1 = document.getElementById("niveau1");

const pion = document.createElement("div");
const scoreDiv = document.getElementById("score");
let score = 0
scoreDiv.innerHTML = `<p>Score : ${score}`


const modalEnd = document.getElementById("myModalEnd");
const modalDifficulty = document.getElementById("myModalDifficulty");
const esayBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");
const spanEnd = document.getElementsByClassName("close")[0];

let easy = true;



function initLvl1() {
    for (let i = 0 ; i < 21 ; i++) {
        let question = questionsLvl1.find(x => x.id === i)
        const c = document.createElement("div");
        const front = document.createElement("div")
        front.classList.add("front")
        const back = document.createElement("div")
        back.classList.add("back");
        if(question){
            back.innerHTML = 
            `<div class="container">
            <div id="score" class="score"></div>
                <div id="question-container" class="hide">
                    <div id="questionElement" class="questionElement"></div>
                    <div id="answer-buttons" class="btn-grid">
                        
                    </div>
                </div>
            </div>`;
            let questionElement = back.getElementsByClassName("questionElement")[0]
            questionElement.innerHTML = question.Question
            let answerButtonsElement = back.getElementsByClassName("btn-grid")[0]
            let correctAnswer = question.BonneReponse;
            let incorectAnswers = question.MauvaiseReponses;
            let optionList = [];
            optionList.push(correctAnswer, ...incorectAnswers);
            optionList.sort(() => Math.random() - .5);
            
            optionList.forEach(answer => {
                const button = document.createElement("button")
                button.innerText = answer
                button.classList.add('btn')
                if(answer == correctAnswer){
                    button.dataset.correct = true
                }
                button.addEventListener("click", selectAnswer)
                answerButtonsElement.appendChild(button)
            });
            
        }
        switch (i) {
            case 7:
            case 8:
            case 10:
            case 12:
            case 13:
            case 14:
            case 15:
            case 19:
            case 20:
                c.classList.add("hidden")
                break;
        }
        switch (i) {
            case 0: 
                c.classList.add("start")
                front.innerHTML = `<h1>START</h1>`
                break;
            case 6 : 
                c.classList.add("end")
                front.innerHTML = `<h1>END</h1>`
                break;
            case 1:
            case 11:
                c.classList.add("SEO")
                front.innerHTML = `<h1>SEO</h1>`
                break;
            case 2:
            case 17:
                c.classList.add("keyword")
                front.innerHTML = `<h1>Mots Clés</h1>`
                break;
            case 3:
            case 18:
                c.classList.add("tools")
                front.innerHTML = `<h1>Les Outils</h1>`
                break;
            case 5:
            case 16:
                c.classList.add("balise")
                front.innerHTML = `<h1>Les Balises</h1>`
                break;
            case 4:
            case 9:
                c.classList.add("archi")
                front.innerHTML = `<h1>Architecture Site</h1>`
                break;
        }
        c.classList.add("case");
        c.setAttribute("id",`${i}`);
        c.appendChild(front);
        c.appendChild(back);
        niveau1.appendChild(c);
    }
}

function movePion(){
    let activeCase = document.getElementById(activeCaseId.toString());
    activeCase.classList.remove("flip");
    progressTruLvl1();
    activeCase = document.getElementById(activeCaseId.toString());
    addPion(activeCase,pion);
    setTimeout(() => {
        removePion(activeCase,pion)
        triggerQuestion(activeCase); 
        askDifficulty();   
    }, 1000);
}

function initGame(){
    const activeCase = document.getElementById(activeCaseId.toString());
    activeCase.appendChild(pion)
}

function initPion(){
    pion.classList.add("pion");
    pion.setAttribute("id","pion");
    pion.innerHTML = `<img src="pion2.png" alt="le pion du joueur">`
}

function addPion(activeCase, pion){
    activeCase.appendChild(pion);
}

function removePion(activeCase, pion){
    activeCase.removeChild(pion);
}

function mainGame(){
    document.body.onkeyup = function(e) {
        if (e.key == " " ||
            e.code == "Space"    
        ) {
          movePion();
        }
      }
}

function triggerQuestion(activeCase){
   activeCase.classList.add("flip")
   let front = activeCase.getElementsByClassName("front")[0]
   front.innerHTML = ""
}

function endOfLvl1() {
    console.log("Fin Du game");
    niveau1.style.display = "none";
    scoreDiv.style.top = "auto"
    scoreDiv.style.left = "auto"
    scoreDiv.style.fontSize = "3rem"
}

spanEnd.onclick = function() {
    modalEnd.style.display = "none";
}

esayBtn.onclick = function() {
    easy = true
    modalDifficulty.style.display = "none";
}

hardBtn.onclick = function() {
    easy = false
    modalDifficulty.style.display = "none";
}

function progressTruLvl1(){
    activeCaseId+=1

    if (activeCaseId == 3 && easy) {
        activeCaseId = 9
    }
    if (activeCaseId == 10) {
        activeCaseId = 16
    }
    if (activeCaseId == 19) {
        activeCaseId = 11
    }
    if (activeCaseId == 12) {
        activeCaseId = 4
    }
    if (activeCaseId == 6) {
       endOfLvl1()
    }
}

function askDifficulty(){
    if (activeCaseId == 2) {
        modalDifficulty.style.display = "block";
    }
}
function selectAnswer(e) {
    
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        score += 100;
        scoreDiv.innerHTML = `<p>Score : ${score}`
    } else {
        score -=100;
        scoreDiv.innerHTML = `<p>Score : ${score}`
    }
    movePion();
}


initLvl1();
initPion();
initGame();
mainGame();
