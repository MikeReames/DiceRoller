// Part 1 buttons
let drv = document.querySelector('#diceRoll')
let totals = document.querySelector('#totalnumber')
let rollButton = document.querySelector('#rolldicebutton')
// Part 2 buttons
let showButton = document.querySelector('#showallrollsbutton')
let allRolls = document.querySelector('#allRolls')
let resetButton = document.querySelector('#reset-button')
//index and necessities
let dieIndex = 0
let totalRolls = 0   
const dieRolls = []
const dieRolls2 = []
let dieIndex2 = 0
const diceSides = [1,2,3,4,5,6]
//first button
rollButton.addEventListener("click", function(){
    console.log('button clicked!')
    //stuck after this
    let newDRV = drv.value 
        while (dieIndex < newDRV) {
        let random = Math.floor((Math.random() * 6) + 1)
        totalRolls += random
        console.log(totalRolls)
    
        
        dieRolls.push(random)
        dieRolls2.push[random]
        dieIndex++
    }
       

totals.innerHTML = totalRolls
})

showButton.addEventListener("click", function() {
    console.log(dieRolls.length)
    while (dieIndex2 < dieRolls.length) {
        console.log('hello')
        let listGroup = document.createElement("li")
        listGroup.innerHTML = dieRolls[dieIndex2]
        allRolls.appendChild(listGroup)

        dieIndex2 += 1
    }
    
})
