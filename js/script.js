let text = document.querySelector('.current')
let a = document.querySelector('.slider1')
let b = document.querySelector('.slider2')
let c = document.querySelector('.slider3')
let d = document.querySelector('.slider4')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let imgs = document.querySelector('.slider-img')
let offset = 0
let count = 1
next.onclick = () => {
	count++
	text.innerHTML = '0'+ count
	offset = offset + 650
	if(offset > 1950) {
		offset = 0
	}
	if(count > 3) {
		count = 1
	}
	imgs.style.left = -offset +'px'
}
prev.onclick = () => {
	count--
	text.innerHTML = '0'+ count
	offset = offset - 650
	if(offset < 0) {
		offset = 1950
	}
	if(count < 1) {
		count = 4
	}
	imgs.style.left = -offset +'px'
}
