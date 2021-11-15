const img1 = document.querySelectorAll('img')[0]
const img2 = document.querySelectorAll('img')[1]
const h1 = document.querySelector('h1')

let player1, player2


const button = document.querySelector('button')
button.addEventListener('click', () => {
    //generate random number for the player
    const randomNumber1 = () => {
        player1 = Math.floor(Math.random() * 6) + 1
        return player1
    }
    const randomNumber2 = () => {
        player2 = Math.floor(Math.random() * 6) + 1
        return player2
    }

    // create a variable to change the image
    const randomDiceImg1 = 'images/dice' + randomNumber1() + '.png'
    img1.setAttribute('src', randomDiceImg1)

    const randomDiceImg2 = 'images/dice' + randomNumber2() + '.png'
    img2.setAttribute('src', randomDiceImg2)

    // win lose or draw:
    if (player1 > player2) {
        h1.innerHTML = "🚩 Play 1 Wins!"
    } else if (player1 < player2) {
        h1.innerHTML = "Player 2 Wins! 🚩";
    } else {
        h1.innerHTML = 'Draw!'
    }
})