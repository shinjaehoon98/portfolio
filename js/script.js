// lenis scroll
const lenis = new Lenis();
    lenis.on('scroll', (e) => {
        console.log(e);
    })
    
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


// Variables
const topButton = document.getElementById('topBtn');
const topText = document.getElementById('topText');
const percentageDiv = document.getElementById('percentage');
const progressCircle = document.getElementById('progressCircle');

// Function to update scroll percentage and SVG circle stroke
function updateScroll() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const percentage = (scrollTop / scrollHeight * 100).toFixed(0);

  const radius = progressCircle.getAttribute('r');
  const circumference = Math.PI * (radius * 2);
  const offset = circumference - (percentage / 100 * circumference);

  progressCircle.setAttribute('stroke-dasharray', `${circumference} ${circumference}`);
  progressCircle.setAttribute('stroke-dashoffset', offset);

  percentageDiv.innerHTML = `${percentage}%`;

  if (scrollTop > 200) {
    topButton.style.display = "flex";
  } 
}

// Function for smooth scrolling to the top
function scrollToTop(scrollDuration) {
  const scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function() {
          if ( window.scrollY !== 0 ) {
            window.scrollBy(0, scrollStep);
          }
          else clearInterval(scrollInterval);
        }, 15);
}

// Event listeners
window.addEventListener('scroll', updateScroll);

topButton.addEventListener('mouseover', function() {
  topText.style.opacity = "1";
  percentageDiv.style.opacity = "0";
});

topButton.addEventListener('mouseout', function() {
  topText.style.opacity = "0";
  percentageDiv.style.opacity = "1";
});

topButton.addEventListener('click', function() {
  scrollToTop(800); // scroll duration is 600 milliseconds
});


window.addEventListener('scroll', () => {
const body = document.body;
const scrollY = window.scrollY;

if (3000 < scrollY && scrollY < 4700) {
body.classList.remove('light-mode');
body.classList.add('dark-mode');
} else {
body.classList.remove('dark-mode');
body.classList.add('light-mode');
}
});

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    markers: false
});
let mm = gsap.matchMedia()
, breakPoint = 1440;
mm.add({
    isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
    isMobile: `(max-width: ${breakPoint - 1}px) and (prefers-reduced-motion: no-preference)`
}, (context)=>{
    let {isDesktop, isMobile} = context.conditions;
    if (isDesktop) {
        $(".gsap-async-scroll:nth-child(odd)").each(function(index) {
            let triggerElement = $(this);
            let targetElement = $(this);
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
            tl.to(targetElement, {
                y: "6rem",
                duration: 1
            });
        });
        $(".gsap-async-scroll:nth-child(even)").each(function(index) {
            let triggerElement = $(this);
            let targetElement = $(this);
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
            tl.to(targetElement, {
                y: "-6rem",
                duration: 1
            });
        });
        $(".gsap-async-scroll-reversed:nth-child(odd)").each(function(index) {
            let triggerElement = $(this);
            let targetElement = $(this);
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
            tl.to(targetElement, {
                y: "-6rem",
                duration: 1
            });
        });
        $(".gsap-async-scroll-reversed:nth-child(even)").each(function(index) {
            let triggerElement = $(this);
            let targetElement = $(this);
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
            tl.to(targetElement, {
                y: "6rem",
                duration: 1
            });
        });
    }
}
);


// 슬라이더 변수 설정
let slideIndex = 0;
const slides = document.querySelectorAll('.w-slide');

// 좌우 화살표 변수 설정
const prevArrow = document.querySelector('.arrow.is-prev');
const nextArrow = document.querySelector('.arrow.w-slider-arrow-right');

// 초기 슬라이드 설정
showSlide(slideIndex);

// 이전 슬라이드 보기
prevArrow.addEventListener('click', function() {
    showSlide(--slideIndex);
});

// 다음 슬라이드 보기
nextArrow.addEventListener('click', function() {
    showSlide(++slideIndex);
});

// 슬라이드 보여주기 함수
function showSlide(n) {
    // 슬라이드 인덱스가 너무 크거나 작을 경우 처리
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // 모든 슬라이드 숨기기
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // 현재 슬라이드만 보이게 설정
    slides[slideIndex].style.display = 'block';
}

let activeImg;//변수선언
    gsap.utils.toArray(".home_services_item w-dyn-item a").forEach((elem) => {
      let image = elem.querySelector('.home_service-item_image'),
        //.con02 ul li a를 배열을 forEach문으로  elme매개변수로 반복문실행 , 
       //elem의 하위요소,showImg를 image에 저장
       
          align = e => {
              setX(e.clientX);
              setY(e.clientY);              
          },
        //이벤트발생시 현재 마우스 위치의 x, y 좌표를 setX, setY 변수에 할당합니다.
        
          startPoint = () => document.addEventListener("mousemove", align),
          //startPoint함수는 mousemove와 align함수가 실행되는 함수

          stopPoint= () => document.removeEventListener("mousemove", align),
          //stopPoint함수는 mousemove와 align함수가 제거되는 함수

         fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true }); 
         //변수fade는 이미지가 자동투명도를 0.8되서 일시정지하여 변수 fade에 대입함
    
        //.con02 ul li a영역에 들어갔을때 fade변수가 실행되고 startPoint()함수가 호출되라
       elem.addEventListener('mouseenter', (e) => {
          fade.play();
          startPoint();
      

      //액티브이미지가 활성되면!! gsap바로 세팅
        if (activeImg) {
          gsap.set(image, {x: gsap.getProperty(activeImg, "x"), 
                           y: gsap.getProperty(activeImg, "y")}
               );
        }
       //이미지의 X축은 activeImg의 x값을 반환하고
       //이미지의 y축는 activeImg의 Y값을 반환하고
       //gsap.getProperty()는 (activImage의 X값)=> 속성을 반환
    
        // setX, setY 변수를 gsap.quickTo() 메소드를 사용하여, image 요소의 x, y 위치를 빠르게 변경
        activeImg = image;  //img.fadeImg
        setX = gsap.quickTo(image, "x", {duration: 0.5, ease:Elastic }),
        setY = gsap.quickTo(image, "y", {duration: 0.5, ease:Elastic })
      

        align(e);
        //이벤트시 마우스 위치의 x, y 좌표를 setX, setY 변수에 할당하는 함수호출 
      });

      elem.addEventListener('mouseleave', () => fade.reverse());
    });
//스크롤 컨택트 애니메이션
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.grid-child .text-style-caps');
        
        function checkVisibility() {
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if(rect.top <= window.innerHeight && rect.bottom >= 0) {
                    // element가 화면에 보일 때
                    el.style.opacity = 1;
                    el.style.transform = 'translateZ(0)';
                }
            });
        }
    
        window.addEventListener('scroll', checkVisibility);
        // 페이지 로드 시에도 한 번 확인
        checkVisibility();
    });
