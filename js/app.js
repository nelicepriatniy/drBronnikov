const plussSlider = new Swiper('.plussSLider', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
});


let staffItems = document.querySelectorAll('.staffItem');

if(staffItems.length > 0) {
  for(let i = 0; staffItems.length > i; i++) {
    let closeBtn = staffItems[i].querySelector('.staffItemCloseText');
    let staffImg = staffItems[i].querySelector('.staffItemImg')
    staffImg.onclick = ()=>{
      for(let o = 0; staffItems.length > o; o++) {
          staffItems[o].classList.remove('active')
      }
      staffItems[i].classList.add('active')
    }
    closeBtn.onclick = ()=> {
      console.log(123)
      for(let o = 0; staffItems.length > o; o++) {
          staffItems[o].classList.remove('active')
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