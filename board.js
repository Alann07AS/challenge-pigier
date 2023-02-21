console.log("INIT BOARD CLASS");

class board {
    /**
     * @param {Array.<lvl>} lvls le lvl
     * @param {Array.<card>} cards le lvl
     */
    constructor (cards) {
        /**@type {Array.<lvl>} */
        this.lvls = [];
        this.cards = cards;
        this.levelToShow = 0;
        this.width = 0;
        this.matris = [];

        const div =  document.getElementById("board");
        this.div = div;
        // this.div.style.gridTemplateColumns = "repeat( "+this.width+" ,130px);"
    }

    clear() {
        this.div.innerHTML = "";
    }

    showBoard() {
        this.clear();
        for (let iLvl = 0; iLvl <= this.levelToShow; iLvl++) {
            console.log("COUCOU");
            const lv = this.lvls[iLvl];
            lv.matris.table.forEach((v)=>{
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
                </div>`;
                c.classList.add(v);
                c.classList.add("case");

                // c.setAttribute("id",`${i}`);
                c.appendChild(front);
                c.appendChild(back);
                this.div.appendChild(c);
            })
        }
    }

    addLvl (lvl) {
        this.lvls.push(lvl);
    }

    showNextLevel() {
        this.levelToShow++;
        this.showBoard();
    }
}

class boardMatrisElement {
    constructor(card, x, y, div, ) {

    }
}

const boardObj = new board()

class lvl {
    /**
     * @param {Number} idStart l'id de la premiere case
     * @param {Number} idEnd l'id de la derniere case
     * @param {Number} forkIN id de la fourche entre facile est difficile
     * @param {matrisLvl} matris les cards placer sur le board
     */
    constructor(idStart, idEnd, forkIN, matris) {
        this.idStart = idStart;
        this.idEnd = idEnd;
        /**@type {matrisLvl} */
        this.matris = matris;

       //pas sure 
        this.inForkId = forkIN;
        this.outForkId = this.InForkId+2;   //récuperer la bifurcation 2 case aprés
    }
}


/**
 * MATRIS EXAMPLE
 * [ START_END, SEO, KEYWORD, TOOLS, ARCHI, BALISE, START_END,
 *  HIDDEN, HIDDEN, ARCHI, HIDDEN, SEO, HIDDEN, HIDDEN
 *  HIDDEN, HIDDEN, BALISE, KEYWORD, TOOLS, HIDDEN, HIDDEN
 * ]
 */
class matrisLvl {
    /**
     * 
     * @param {Array} matris la matris dois etre composer en remplacent les case vide par HIDDEN les theme par leur categorie. Il faut au moin DEUX "START_END"
     * @param {Number} width La largeur du niveau
     */
    constructor (matris, width) {
        /**@type {Array} */
        this.table = matris;
        this.width = width;
        this.height = matris.length/width;
    }
}

class card {
    constructor (id, categorie_class, question, goodAnswer, badAnswer, difficulty) {
        this.id = id;
        this.categorie_class = categorie_class;
        this.question = question;
        this.goodAnswer = goodAnswer; 
        this.badAnswer = badAnswer;
        this.difficulty = difficulty;
    }
}

class categories {
}
const START_END = "start"
const SEO = "SEO"
const KEYWORD = "keyword"
const TOOLS = "tools"
const BALISE = "balise"
const ARCHI = "archi"
const HIDDEN = "hidden"