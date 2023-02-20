const niveau1 = document.getElementById("niveau1");

function initLvl1() {
    for (let i = 0 ; i < 28 ; i++) {
        const c = document.createElement("div");
        switch (i) {
            case 7:
            case 8:
            case 10:
            case 12:
            case 13:
            case 14:
            case 15:
            case 17:
            case 19:
            case 20:
            case 21:
            case 22:
            case 26:
            case 27:
                c.classList.add("hidden")
                break;
        }
        switch (i) {
            case 0: 
            case 6:
                c.classList.add("start")
                break;
            case 1:
            case 5:
            case 23:
                c.classList.add("SEO")
                break;
            case 2:
            case 24:
                c.classList.add("keyword")
                break;
            case 3:
            case 25:
                c.classList.add("tools")
                break;
            case 4:
            case 16:
                c.classList.add("balise")
                break;
            case 9:
            case 11:
                c.classList.add("archi")
                break;
        }
        c.classList.add("case");
        c.setAttribute("id",`${i}`);
        niveau1.appendChild(c);
    }
}

initLvl1();