const slideList = [{
        img: "images/img1.jpg",
        text: 'welcome'
    },
    {
        img: "images/img2.jpg",
        text: 'how are you ?'

    },
    {
        img: "images/img3.jpg",
        text: 'great !'
    }
]
const image = document.querySelector('img.slider')
const h1 = document.querySelector('h1.slider')
const dots = [...document.querySelectorAll('.dots span')]
// interfejs 

const time = 2000;
let active = 0;

const changeDot = () => {
   const activeDot =  dots.findIndex(dot => dot.classList.contains('active'))
   dots[activeDot].classList.remove('active')
   dots[active].classList.add('active')
}


const changeSlide = () => {
    active++
    if(active === slideList.length){
        active = 0;
    }
    image.src = slideList[active].img
    h1.textContent = slideList[active].text
    changeDot()
}

setInterval(changeSlide, time)


// intepletacja