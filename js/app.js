const plussSlider = new Swiper('.plussSLider', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
});


const closePopups = document.querySelector('.closePopups'),
      popups = document.querySelectorAll('.popup');

if(closePopups) {
    closePopups.onclick = ()=>{
        closePopups.classList.remove('active')
        if(popups.length > 0) {
            for(let i = 0; popups.length > i; i++) {
                popups[i].classList.remove('active')
            }
        }
    }
}


let staffItems = document.querySelectorAll('.staffItem');

if(staffItems.length > 0) {
  for(let i = 0; staffItems.length > i; i++) {
    let closeBtn = staffItems[i].querySelector('.staffItemCloseText');
    let staffImg = staffItems[i].querySelector('.staffItemImg')
    staffImg.onclick = ()=>{
      for(let o = 0; staffItems.length > o; o++) {
          staffItems[o].classList.remove('active')
      }
      closePopups.classList.add('active')
      staffItems[i].classList.add('active')
    }
    closeBtn.onclick = ()=> {
      console.log(123)
      for(let o = 0; staffItems.length > o; o++) {
          staffItems[o].classList.remove('active')
          closePopups.classList.remove('active')
      }
    }
  }
}

let dealsItems = document.querySelectorAll('.bigDealsItem');

if(dealsItems.length > 0) {
  for(let i = 0; dealsItems.length > i; i++) {
    let dealsItemOpenBtn = dealsItems[i].querySelector('.dealsMain')
    dealsItemOpenBtn.onclick = ()=>{
      dealsItems[i].classList.toggle('active')
    }
  }
}


window.onscroll = () => {
  if (window.scrollY > 200) {
      document.querySelector('header').classList.add('dixedActive')
  }
  if (window.scrollY > 100) {
      document.querySelector('header').classList.add('dixed')
  } else {
      document.querySelector('header').classList.remove('dixed')
      document.querySelector('header').classList.remove('dixedActive')
  }
}



let mobbtn = document.querySelector('.headerMobMenuOpen');
let menu = document.querySelector('.headerMobMenu');
let headerMenuClose = document.querySelector('.headerMobMenuCloseBtn')

mobbtn.addEventListener('click', function () {
    mobbtn.classList.toggle('active')
    menu.classList.toggle('active');
})

headerMenuClose.onclick = ()=>{
  mobbtn.classList.remove('active')
  menu.classList.remove('active');
}


let mobbtnb = document.querySelectorAll('.lineb');
mobbtnb.forEach(element => {
    element.addEventListener('click', function () {
        mobbtn.classList.toggle('active')
        menu.classList.toggle('active');
    })
});



function offsetPosition(element) {
  var offsetLeft = 0, offsetTop = 0;
  do {
      offsetLeft += element.offsetLeft;
      offsetTop += element.offsetTop;
  } while (element = element.offsetParent);
  return offsetTop;
}

let scrollBtn = document.querySelectorAll('.scrollbtn');  //класс кнопок для скролла
scrollBtn.forEach(el => {
  let elem = el;
  el.addEventListener('click', function () {
    menu.classList.remove('active')
      let data = elem.getAttribute('data-b'); 
      let block = document.querySelector(data);
      let offset = offsetPosition(block);
      window.scrollTo({
          top: offset,
          behavior: 'smooth',
          
      });
      console.log(offset)
  })
});
