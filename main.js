/*        FUNCTIONS      */ 

function backToTop() {
  const backToHomeButton = document.querySelector("#back-to-home")

  if (window.scrollY >= 500){
    backToHomeButton.classList.add('show')
  }else {
    backToHomeButton.classList.remove('show')
  }
}

function changeHeaderWhenScroll () {
  const header = document.querySelector("#header")
  const headerHeight = header.offsetHeight

  if(window.scrollY >= headerHeight){
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*        SCROLL EVENT      */ 

window.addEventListener('scroll', function(){
  backToTop()
  changeHeaderWhenScroll()  
})


/*        TOGGLE MENU      */ 

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')


for (const element of toggle) {
  element.addEventListener('click', function(){
  nav.classList.toggle('show')
  })
}

for (const element of links){
  element.addEventListener('click', function(){
    nav.classList.remove('show')

  })
}


/*        SWIPER      */ 


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/*        SCROLL REVEAL      */ 

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
#home .image, 
#home .text, 
#about .image, 
#about .text,
#services,
#services .cards,
#contacts,
#contacts a,
#contacts li,
#footer`, {interval: 100})








