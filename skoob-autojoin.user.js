// ==UserScript==
// @name         Skoob - Entrar em todas as cortesias
// @namespace    https://github.com/LucasHenriqueDiniz
// @version      2024-01-12
// @description  Entrar em todas as cortesias da página de cortesias populares do Skoob (https://www.skoob.com.br/cortesia/populares/).
// @author       lucas Diniz
// @match        https://www.skoob.com.br/cortesia/populares/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=skoob.com.br
// @grant        none

// @homepageURL  https://github.com/LucasHenriqueDiniz/skoob-autojoin
// @supportURL   https://github.com/LucasHenriqueDiniz/skoob-autojoin/issues
// @downloadURL  https://github.com/LucasHenriqueDiniz/skoob-autojoin/raw/main/skoob-autojoin.user.js
// @updateURL    https://github.com/LucasHenriqueDiniz/skoob-autojoin/raw/main/skoob-autojoin.user.js

// ==/UserScript==

(function () {
    "use strict";

    const header = document.querySelector(
        "#container-full > div > div > div:nth-child(3) > div > div > ul"
    );

    const header2 = document.querySelector(
        "#container-full > div > div > div:nth-child(1) > div"
    );

    const divs = document.querySelectorAll("div.actions");

    const btns = Array.from(divs).filter(
        (div) => div.children[0].checkVisibility === true
    );
    const howManyMissingToEnter = btns.length;
  
    function enterAll() {
        btns.forEach((button) => {
            if (button.checkVisibility() === false) return;
            button.click();
        });
        alert("Já foi tudo, pode fechar a página!");
    }

    const button = document.createElement("button");
    button.innerHTML = "Entrar em todas as cortesias";
    button.onclick = enterAll;
    button.style =
        "margin-left: 10px; padding: 10px; background-color: green; color: #fff; border: none; border-radius: 5px; cursor: pointer;";
    header.appendChild(button);

    const missingText = document.createElement("p");
    howManyMissingToEnter
        ? (missingText.innerHTML = `Faltam ${howManyMissingToEnter} cortesias para entrar`)
    : (missingText.innerHTML = `Ja entrou em todas as cortesias!`);
    missingText.style = "margin-left: 10px;";
    header2.appendChild(missingText);
})();
