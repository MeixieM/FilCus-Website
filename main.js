// FAQ
const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})

// Initialize Swiper//

  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

// Menu Navbar//
 type="text/javascript"
    let menu = document.querySelector('#menu');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

// Play Video on Mouse Hover and Pause on Mouseout
const clip = document.querySelectorAll('.clip');
  for(let i = 0; i<clip.length; i++){
    clip[i].addEventListener('mouseenter', function(e){
      clip[i].play()
    })
    clip[i].addEventListener('mouseout', function(e){
      clip[i].pause()
    })
  }

//Menu
const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "breakfast";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}


//Testimonials/Reviews Slider
var swiper = new Swiper(".review-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     0: {
       slidesPerView: 1,
     },
     700: {
       slidesPerView: 2,
     },
     1000: {
       slidesPerView: 3,
     },
  },
});
