const slides = document.querySelectorAll(".slide")
// console.log(slides)


slides.forEach(
    (item, index) => {
        item.style.left = `${index * 100}%`
    }
)


let prev = document.getElementById('go-prev')
let next = document.getElementById('go-next')

let counter = 0;

prev.addEventListener('click', () => {
    if (counter != 0) {
        counter--
        slideImage()
    }
})
next.addEventListener('click', () => {
    if (counter != slides.length - 1) {
        counter++
        slideImage()
    }
})
const slideImage = () => {
    slides.forEach(
        (item) => {
            item.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
