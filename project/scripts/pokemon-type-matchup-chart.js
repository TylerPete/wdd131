const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", showMenu)
const navMenu = document.querySelector("#navigation");

const currentYear = document.querySelector(".current-year");
const today = new Date();
currentYear.textContent = `${today.getFullYear()}`;


window.addEventListener("resize", () => {
    if (window.innerWidth >= 640)
    {
        if (navMenu.classList.contains("open"))
        {
            navMenu.classList.remove("open");

        }
        if (menuButton.classList.contains("x"))
        {
            menuButton.classList.remove("x");
        }
    }
});

function showMenu() {
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("x");
}

const types = [
    { type: "Bug", super: ["Grass", "Psychic", "Dark"], notvery: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"], noeffect: [] },
    { type: "Dark", super: ["Psychic", "Ghost"], notvery: ["Fighting", "Dark", "Fairy"], noeffect: [] },
    { type: "Dragon", super: ["Dragon"], notvery: ["Steel"], noeffect: ["Fairy"] },
    { type: "Electric", super: ["Water", "Flying"], notvery: ["Electric", "Grass", "Dragon"], noeffect: ["Ground"] },
    { type: "Fairy", super: ["Fighting", "Dragon", "Dark"], notvery: ["Fire", "Poison", "Steel"], noeffect: [] },
    { type: "Fighting", super: ["Normal", "Ice", "Rock", "Dark", "Steel"], notvery: ["Poison", "Flying", "Psychic", "Bug", "Fairy"], noeffect: ["Ghost"] },
    { type: "Fire", super: ["Grass", "Ice", "Bug", "Steel"], notvery: ["Fire", "Water", "Rock", "Dragon"], noeffect: [] },
    { type: "Flying", super: ["Grass", "Fighting", "Bug"], notvery: ["Electric", "Rock", "Steel"], noeffect: [] },
    { type: "Ghost", super: ["Psychic", "Ghost"], notvery: ["Dark"], noeffect: ["Normal"] },
    { type: "Grass", super: ["Water", "Ground", "Rock"], notvery: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"], noeffect: [] },
    { type: "Ground", super: ["Fire", "Electric", "Poison", "Rock", "Steel"], notvery: ["Grass", "Bug"], noeffect: ["Flying"] },
    { type: "Ice", super: ["Grass", "Ground", "Flying", "Dragon"], notvery: ["Fire", "Water", "Ice", "Steel"], noeffect: [] },
    { type: "Normal", super: [], notvery: ["Rock", "Steel"], noeffect: ["Ghost"] },
    { type: "Poison", super: ["Grass", "Fairy"], notvery: ["Poison", "Ground", "Rock", "Ghost"], noeffect: ["Steel"] },
    { type: "Psychic", super: ["Fighting", "Poison"], notvery: ["Psychic", "Steel"], noeffect: ["Dark"] },
    { type: "Rock", super: ["Fire", "Ice", "Flying", "Bug"], notvery: ["Fighting", "Ground", "Steel"], noeffect: [] },
    { type: "Steel", super: ["Ice", "Rock", "Fairy"], notvery: ["Fire", "Water", "Electric", "Steel"], noeffect: [] },
    { type: "Water", super: ["Fire", "Ground", "Rock"], notvery: ["Water", "Grass", "Dragon"], noeffect: [] }
]

const defaultOrderedTypes = [
    { type: "Bug", super: ["Grass", "Psychic", "Dark"], notvery: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"], noeffect: [] },
    { type: "Dark", super: ["Psychic", "Ghost"], notvery: ["Fighting", "Dark", "Fairy"], noeffect: [] },
    { type: "Dragon", super: ["Dragon"], notvery: ["Steel"], noeffect: ["Fairy"] },
    { type: "Electric", super: ["Water", "Flying"], notvery: ["Electric", "Grass", "Dragon"], noeffect: ["Ground"] },
    { type: "Fairy", super: ["Fighting", "Dragon", "Dark"], notvery: ["Fire", "Poison", "Steel"], noeffect: [] },
    { type: "Fighting", super: ["Normal", "Ice", "Rock", "Dark", "Steel"], notvery: ["Poison", "Flying", "Psychic", "Bug", "Fairy"], noeffect: ["Ghost"] },
    { type: "Fire", super: ["Grass", "Ice", "Bug", "Steel"], notvery: ["Fire", "Water", "Rock", "Dragon"], noeffect: [] },
    { type: "Flying", super: ["Grass", "Fighting", "Bug"], notvery: ["Electric", "Rock", "Steel"], noeffect: [] },
    { type: "Ghost", super: ["Psychic", "Ghost"], notvery: ["Dark"], noeffect: ["Normal"] },
    { type: "Grass", super: ["Water", "Ground", "Rock"], notvery: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"], noeffect: [] },
    { type: "Ground", super: ["Fire", "Electric", "Poison", "Rock", "Steel"], notvery: ["Grass", "Bug"], noeffect: ["Flying"] },
    { type: "Ice", super: ["Grass", "Ground", "Flying", "Dragon"], notvery: ["Fire", "Water", "Ice", "Steel"], noeffect: [] },
    { type: "Normal", super: [], notvery: ["Rock", "Steel"], noeffect: ["Ghost"] },
    { type: "Poison", super: ["Grass", "Fairy"], notvery: ["Poison", "Ground", "Rock", "Ghost"], noeffect: ["Steel"] },
    { type: "Psychic", super: ["Fighting", "Poison"], notvery: ["Psychic", "Steel"], noeffect: ["Dark"] },
    { type: "Rock", super: ["Fire", "Ice", "Flying", "Bug"], notvery: ["Fighting", "Ground", "Steel"], noeffect: [] },
    { type: "Steel", super: ["Ice", "Rock", "Fairy"], notvery: ["Fire", "Water", "Electric", "Steel"], noeffect: [] },
    { type: "Water", super: ["Fire", "Ground", "Rock"], notvery: ["Water", "Grass", "Dragon"], noeffect: [] }
]

function resetTable()
{
    sortTable(null, true);
}

displayEffectiveness();
const tableResetButton = document.querySelector("#table-reset-button");
tableResetButton.addEventListener("click", resetTable);

const attackTypeCellsNodeList = document.querySelectorAll(".attack-type-cell");
for (const cell of attackTypeCellsNodeList)
{
    const theTypeObj = types.find(type => type.type == cell.textContent);

    cell.addEventListener("click", () => sortTable(theTypeObj, false));
}

function sortTable(attackTypeObj, resetBoolean)
{
    if (resetBoolean)
    {
        types.splice(0, types.length, ...defaultOrderedTypes);
    }
    else
    {
        types.sort(defenseTypeCompareFunction);
    }

    const defenseTypeCellsNodeList = document.querySelectorAll(".defense-type-cell");
    
    for (let i = 0; i < 18; i++)
    {
        const node = defenseTypeCellsNodeList[i];
        node.textContent = types[i].type;
    }

    displayEffectiveness();

    function defenseTypeCompareFunction(defTypeObjA, defTypeObjB)
    {
        let damageModifierA = getDamageModifier(attackTypeObj, defTypeObjA);
        let damageModifierB = getDamageModifier(attackTypeObj, defTypeObjB);

        let returnValue;
        if (damageModifierA > damageModifierB)
        {
            returnValue = -1;
        }
        else if (damageModifierA < damageModifierB)
        {
            returnValue = 1;
        }
        else
        {
            returnValue = 0;
        }

        return returnValue;
    }
}

function getDamageModifier(attackTypeObj, defTypeObj)
{
    let damageModifier;
    if (attackTypeObj.super.includes(defTypeObj.type))
    {
        damageModifier = 2;
    }
    else if (attackTypeObj.notvery.includes(defTypeObj.type))
    {
        damageModifier = "½";
    }
    else if (attackTypeObj.noeffect.includes(defTypeObj.type))
    {
        damageModifier = 0;
    }
    else
    {
        damageModifier = 1;
    }
    return damageModifier;
}

function displayEffectiveness()
{
    for (let i = 0; i < 18; i++)
    {
        let selectorString = `#row-${i+1}`;

        const rowElement = document.querySelector(selectorString);
        const dataElements = rowElement.querySelectorAll("tr > td");

        let innerIterationCount = 0;
        for (const cell of dataElements)
        {
            let damageModifier = getDamageModifier(defaultOrderedTypes[innerIterationCount], types[i]);

            cell.textContent = `${damageModifier}x`;
            styleEffectivenessCell(cell);

            innerIterationCount++;
        }
    }

    function styleEffectivenessCell(cell)
    {
        if (cell.textContent == "2x")
        {
            cell.className = "";
            cell.classList.add("super-green");
        }
        else if (cell.textContent == "½x")
        {
            cell.className = "";
            cell.classList.add("notvery-red");
        }
        else if (cell.textContent == "0x")
        {
            cell.className = "";
            cell.classList.add("noeffect-black");
        }
        else if (cell.textContent == "1x")
        {
            cell.className = "";
            cell.classList.add("regular-white");
        }
    }
}