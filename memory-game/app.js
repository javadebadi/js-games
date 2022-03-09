const cardArrays = [
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
let cardsRemained = 12
let score = 0
let nClicks = 0
let cardIdStack = []
let doneId = []

let cardArraysShuffled = cardArrays.sort(() => Math.random() - 0.5 )
cardArraysShuffled = cardArraysShuffled.map( (item, index) => ({...item, "id":index}) )

const grid = document.getElementById("grid")



function makeVisible(id) {
    if (id in doneId) {
        return undefined
    }
    const elem = document.getElementById(id)
    elem.className = 'card-img-visible'
    const img = elem.getElementsByTagName('img')[0]
    img.style.visibility = 'visible'
    nClicks = nClicks + 1
    cardIdStack.push(id)
}

function makeInvisible(id) {
    const elem = document.getElementById(id)
    elem.className = 'card-img'
    const img = elem.getElementsByTagName('img')[0]
    img.style.visibility = 'hidden'
}

function handleClick(id) {
    console.log(id)
    console.log("lenght", cardIdStack.length)
    if (cardIdStack.length >= 2) {
        while (cardIdStack.length > 0) {
            idx = cardIdStack.shift()
            makeInvisible(idx)
        }
        return undefined
    }
    if (id in cardIdStack) {
        return undefined;
    }
    else {
        makeVisible(id)
    }

    if (cardIdStack.length === 1) {
        return undefined
    }
    else if (cardArraysShuffled[id].name === cardArraysShuffled[cardIdStack[0]].name) {
        cardIdStack.forEach( (item) => doneId.push(item))
        cardIdStack = []
    }
    else {
        
        if (cardIdStack.length === 2) {
            setTimeout(() => {
                console.log("time")
                cardIdStack.forEach( id => makeInvisible(id) )
                return 0
            },
            waitTime
            )
        }
    }
}



function addImageCard(imgItem) {
    const elem = document.createElement('div')
    const elem1 = document.createElement('img')
    elem1.setAttribute('src', imgItem.img)
    elem.appendChild(elem1)
    elem.className = "card-img"
    elem.setAttribute('id', imgItem.id)
    elem.addEventListener('click', () => handleClick(imgItem.id))
    grid.appendChild(elem)
}

cardArraysShuffled.forEach(
    cardItem => addImageCard(cardItem)
)

let nHeads =  0


