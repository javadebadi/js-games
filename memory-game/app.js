const cardArrays = [{
        "name": "deer",
        "img": "./images/deer.png"
    },
    {
        "name": "panda",
        "img": "./images/panda.png"
    },
    {
        "name": "doggy",
        "img": "./images/doggy.png"
    },
    {
        "name": "owl",
        "img": "./images/owl.png"
    },
    {
        "name": "tiger",
        "img": "./images/tiger.png"
    },
    {
        "name": "elephant",
        "img": "./images/elephant.png"
    },
    {
        "name": "deer",
        "img": "./images/deer.png"
    },
    {
        "name": "panda",
        "img": "./images/panda.png"
    },
    {
        "name": "doggy",
        "img": "./images/doggy.png"
    },
    {
        "name": "owl",
        "img": "./images/owl.png"
    },
    {
        "name": "tiger",
        "img": "./images/tiger.png"
    },
    {
        "name": "elephant",
        "img": "./images/elephant.png"
    },
]

const waitTime = 1500
let imgWidth = '150px'
let totalCards = cardArrays.length
let cardsRemained = cardArrays.length
let defaultScore = Number.parseInt(totalCards * (totalCards + 1) / 2)
let score = 0
let nClicks = 0
let cardIdStack = []
let doneId = []

let cardArraysShuffled = cardArrays.sort(() => Math.random() - 0.5)
cardArraysShuffled = cardArraysShuffled.map((item, index) => ({
    ...item,
    "id": index
}))

const grid = document.getElementById("grid")
const scoreElement = document.getElementById("score")

function getScore() {
    scoreElement.innerHTML = (100 * (defaultScore - nClicks / 2) / defaultScore).toFixed(1)
}

// function to add images
function addImageCard(imgItem) {
    const elem = document.createElement('div')
    const elem1 = document.createElement('img')
    elem1.setAttribute('src', imgItem.img)
    elem1.setAttribute('width', imgWidth)
    elem.appendChild(elem1)
    elem.className = "card-img"
    elem.setAttribute('id', imgItem.id)
    elem.addEventListener('click', () => handleClick(imgItem.id))
    grid.appendChild(elem)
}

// function to make an image card visible
function makeVisible(id) {
    const elem = document.getElementById(id)
    const img = elem.getElementsByTagName('img')[0]
    elem.className = 'card-img-visible'
    img.style.visibility = 'visible'
    // increase number of clicks and the id to stack
    nClicks = nClicks + 1
    cardIdStack.push(id)
}

// function to make an image card invisible
function makeInvisible(id) {
    const elem = document.getElementById(id)
    const img = elem.getElementsByTagName('img')[0]
    elem.className = 'card-img'
    img.style.visibility = 'hidden'
}

// function to handle click on each card
function handleClick(id) {
    if (doneId.indexOf(id) >= 0 || cardIdStack.indexOf(id) >= 0 || cardIdStack.length >= 2) {
        return undefined
    } else if (cardIdStack.length === 0) {
        makeVisible(id)
        return getScore()
    } else if (cardIdStack.length === 1) {
        makeVisible(id)
        getScore()
        // at the enf of this block the cardIdStack.length is 2
    }

    // win
    if (cardArraysShuffled[id].name === cardArraysShuffled[cardIdStack[0]].name) {
        cardIdStack.forEach((item) => doneId.push(item))
        cardIdStack = []
    } else {
        setTimeout(() => {
                cardIdStack.forEach(id => makeInvisible(id))
                cardIdStack = []
                return undefined
            },
            waitTime
        )
    }

    getScore()

}


// run these codes to create dom elements
cardArraysShuffled.forEach(
    cardItem => addImageCard(cardItem)
)

getScore()