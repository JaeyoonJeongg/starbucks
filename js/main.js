const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//검색버튼 클릭이벤트
searchEl.addEventListener('click', function() {
    //Logic
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

//스크롤에 따른 배지 보이기 & 숨기기
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }else{
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
},300));
// _.throttle(함수, 시간)


// 이미지 gsap 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index+1) * .7, //0.7, 1.4, 2.1
        opacity: 1
    });
});

// SWIPER 사용
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
