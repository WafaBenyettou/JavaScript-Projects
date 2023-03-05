const color = document.getElementById('color')
const colors = ["red","pink", "orange", "green","White","Blue","purple"]

function backgroundChangeColor(){
   
    const randomNumber = getRandomNumber()

    document.body.style.background = colors[randomNumber];
}

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}