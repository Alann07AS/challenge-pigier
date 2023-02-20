console.log("INIT BOARD CLASS");


class board {
    constructor (name) {
        this.name = name;
        this.hardway = [];
        this.easyway = [];
        this.inForkId = Math.random(4)+1; //choisis alétoirement la case de bifurcation
        this.outForkId = this.InForkId+2;   //récuperer la bifurcation 2 case aprés
    }
}