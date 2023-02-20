const niveau1 = document.getElementById("niveau1");

function initLvl1() {
    for (let i = 0 ; i < 21 ; i++) {
        const c = document.createElement("div");
        const front = document.createElement("div")
        front.classList.add("front")
        const back = document.createElement("div")
        back.classList.add("back");
        back.innerHTML = 
        `<div class="container">
        <div id="score" class="score"></div>
            <div id="question-container" class="hide">
                <div id="question">Question</div>
                <div id="answer-buttons" class="btn-grid">
                <button class="btn">Answer 1</button>
                <button class="btn">Answer 2</button>
                <button class="btn">Answer 3</button>
                <button class="btn">Answer 4</button>
                </div>
            </div>
        </div>`
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
                front.innerHTML = `<h3>START</h3>`
                break;
            case 6 : 
                c.classList.add("end")
                front.innerHTML = `<h3>END</h3>`
                break;
            case 1:
            case 11:
                c.classList.add("SEO")
                break;
            case 2:
            case 17:
                c.classList.add("keyword")
                break;
            case 3:
            case 18:
                c.classList.add("tools")
                break;
            case 5:
            case 16:
                c.classList.add("balise")
                break;
            case 4:
            case 9:
                c.classList.add("archi")
                break;
        }
        c.classList.add("case");
        c.setAttribute("id",`${i}`);
        c.appendChild(front);
        c.appendChild(back);
        niveau1.appendChild(c);
    }
}

initLvl1();