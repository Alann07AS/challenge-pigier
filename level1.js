// LEVEL 1


const lvl1Matris =  new matrisLvl([   
    START_END, SEO,      KEYWORD, TOOLS,    ARCHI,  BALISE,     START_END,     
    HIDDEN,    HIDDEN,   ARCHI,   HIDDEN,   SEO,    HIDDEN,     HIDDEN,
    HIDDEN,    HIDDEN,   BALISE,  KEYWORD,  TOOLS,  HIDDEN,     HIDDEN
], 7);

const lvl1 = new lvl(0, 6, 2, lvl1Matris);

boardObj.addLvl(lvl1);

boardObj.showBoard();