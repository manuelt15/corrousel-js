"use strict"

const wrapperImg = document.querySelector(`.carrousel-wrapper`)
const carrouselBtn = document.querySelectorAll(`.carrousel-button`)
const carrouselImg = document.querySelectorAll(`.carrousel-img`)
const carrouselNext = document.querySelector(`.carrousel-button.button-next`)
const carrouselPrev = document.querySelector(`.carrousel-button.button-prev`)

carrouselNext.addEventListener(`click` , ()=>{
    wrapperImg.style.transform = `translateX(-50%)`
})
carrouselPrev.addEventListener(`click` , ()=>{
    wrapperImg.style.transform = `translateX(0%)`
})




