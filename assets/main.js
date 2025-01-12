const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')

	})
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')

	})
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction));


const scrollheader = () => {
	const header = document.getElementById('header')

	this.scrolY >= 50 ? header.classList.add('scroll-header')
		: header.classList.remove('scroll-header')

}

window.addEventListener('scroll', scrollheader);







/*==================== ADD SHADOW HEADER ====================*/
const shadowheader = () => {
	const header = document.getElementById('header');
	// Add a class if the bottom offset is greater than 50 of the viewport
	this.scrollY >= 50 ? header.classList.add('shadow-header')
		: header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowheader);


/*=======SHOW SCROLL UP=======*/
const scrollup = () => {
	const scrollup = document.getElementById('scroll-up')
	// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
		: scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*======SCROLL ACTIVE LINK=====*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
	const scrollDown = window.scrollY

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link')
		} else {
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)



/*======== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
})
sr.reveal('.home__data')

sr.reveal('.home_dish', {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal('.home_burger', {delay: 1200, distance: '100px', duration: 1500})
sr.reveal('.home ingredient', {delay: 1600, interval: 100})
sr.reveal('.recipe_img, delivery_img, .contact_image', {origin: 'left'})
sr.reveal('.recipe_data, .delivery_data, .contact_data', {origin : 'right'} )
sr.reveal('.popular_card', {interval :100})

