


$(document).ready(function() {



    // Slider

    $('.slider').each(function() {
        var $this = $(this);
        var $group = $this.find('.slide_group');
        var $slides = $this.find('.slide');
        var bulletArray = [];
        var currentIndex = 0;
        var timeout;
        
        function move(newIndex) {
          var animateLeft, slideLeft;
          
          advance();
          
          if ($group.is(':animated') || currentIndex === newIndex) {
            return;
          }
          
          bulletArray[currentIndex].removeClass('active');
          bulletArray[newIndex].addClass('active');
          
          if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
          } else {
            slideLeft = '-100%';
            animateLeft = '100%';
          }
          
          $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
          });
          $group.animate({
            left: animateLeft
          }, function() {
            $slides.eq(currentIndex).css({
              display: 'none'
            });
            $slides.eq(newIndex).css({
              left: 0
            });
            $group.css({
              left: 0
            });
            currentIndex = newIndex;
          });
        }
        
        function advance() {
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            if (currentIndex < ($slides.length - 1)) {
              move(currentIndex + 1);
            } else {
              move(0);
            }
          }, 4000);
        }
        
        $('.next_btn').on('click', function() {
          if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
          } else {
            move(0);
          }
        });
        
        $('.previous_btn').on('click', function() {
          if (currentIndex !== 0) {
            move(currentIndex - 1);
          } else {
            move(3);
          }
        });
        
        $.each($slides, function(index) {
          var $button = $('<a class="slide_btn">&bull;</a>');
          
          if (index === currentIndex) {
            $button.addClass('active');
          }
          $button.on('click', function() {
            move(index);
          }).appendTo('.slide_buttons');
          bulletArray.push($button);
        });
        
        advance();
      });


    // EndSlider


    const navSlide = () =>{
        const hamburger = document.querySelector(".hamburger");
        const nav = document.querySelector(".nav-menu");
        const navMenu = document.querySelectorAll(".nav-menu li");
        const content = document.querySelector(".content");
        bodi = document.getElementById("body");
    
        hamburger.addEventListener("click", function () {
              nav.classList.toggle("nav-open");
              bodi.classList.toggle("overflow");
              navMenu.forEach((link, index) =>{
                if (link.style.animation) {
                 link.style.animation='';
                } else {
                 link.style.animation = `navLinkFade 1.5s ease forwards ${index / 4}s`;
                }
              });
              hamburger.classList.toggle("burger");
              content.classList.toggle("blur");

          })
        
    }
    navSlide();

    // $( "#hamburger" ).click(function() {
    //     if ($(".nav-menu").hasClass("nav-open")) {
    //         $(".nav-menu").removeClass("nav-open");
    //         $('#body').removeClass('overflow');
    //     } else {
    //         $(".nav-menu").addClass("nav-open");
    //         $('#body').addClass('overflow');
    //        setTimeout((kadal) =>{
    //         $(".nav-menu li:nth-child(1)").addClass("menu-open");
    //         kadal();
    //        },1000)
    //     }
    //   });
    
    $( ".banner-img" ).addClass("banner-img-show");
    $( ".text-banner-area" ).addClass("text-banner-area-show");
    // $( ".project-gallery img:nth-child(1)" ).addClass("kiri")
    // $( ".project-gallery img:nth-child(2)" ).addClass("atas")
    // $( ".project-gallery img:nth-child(3)" ).addClass("kanan")
    // $( ".project-gallery img:nth-child(4)" ).addClass("kiri")
    // $( ".project-gallery img:nth-child(5)" ).addClass("bawah")
    // $( ".project-gallery img:nth-child(6)" ).addClass("kanan")

    function testAsync(){
        return new Promise((resolve,reject)=>{
            //here our function should be implemented 
            setTimeout(()=>{
                $("#loader").remove();
                resolve();
            ;} , 1000
            );
        });
    }
    
    async function callerFun(){
        console.log("Caller");
        await testAsync();
        $('#body').removeClass('overflow');
        
    }
    
    callerFun();


 });
 
 
  



$(window).scroll(function() {
    nav = document.getElementById("nav");
   
     if(($(window).scrollTop() > 100 && $(window).width() >  768) ){
        nav.classList.add("responsive-nav");
        
    }
   else {
        
    nav.classList.remove("responsive-nav");
    }
});
$(window).scroll(function (){
    if ($(window).scrollTop() >700) {
        function gallery(){
            return new Promise((resolve,reject)=>{
                //here our function should be implemented 
                setTimeout(()=>{
                    $( ".project-gallery img:nth-child(1)" ).removeClass("kiri")
                    resolve();
                ;} , 500
                );
                setTimeout(()=>{
                    $( ".project-gallery img:nth-child(2)" ).removeClass("atas")
                    resolve();
                ;} , 1000
                );
                setTimeout(()=>{
                    $( ".project-gallery img:nth-child(3)" ).removeClass("kanan")
                    resolve();
                ;} , 500
                );
                setTimeout(()=>{
                    $( ".project-gallery img:nth-child(4)" ).removeClass("kiri")
                    resolve();
                ;} , 1000
                );
                setTimeout(()=>{
                    $( ".project-gallery img:nth-child(5)" ).removeClass("bawah")
                    resolve();
                ;} , 500
                );
                setTimeout(()=>{
                    $( ".project-gallery img:nth-child(6)" ).removeClass("kanan")
                    resolve();
                ;} , 1000
                );
                
            });
        }
        
        async function callergallery(){
            // $( ".project-gallery img:nth-child(1)" ).addClass("test")
            await gallery();
            // $( ".project-gallery img:nth-child(2)" ).addClass("test")
            
        }
        
        callergallery();
    } else {
        $( ".project-gallery img:nth-child(1)" ).addClass("kiri");
        $( ".project-gallery img:nth-child(2)" ).addClass("atas");
        $( ".project-gallery img:nth-child(3)" ).addClass("kanan");
        $( ".project-gallery img:nth-child(4)" ).addClass("kiri");
        $( ".project-gallery img:nth-child(5)" ).addClass("bawah");
        $( ".project-gallery img:nth-child(6)" ).addClass("kanan");
    }
});

// $(window).scroll(function(){
//     if ($(window).scrollTop() > 2000) {
//         $(".googlemap").addClass("googlemap-show");
//     } else if($(window).scrollTop() < 2000) {
//         $(".googlemap").removeClass("googlemap-show");
//     }

// });
$(window).scroll(function(){
    if ($(window).scrollTop() > 870) {
        $(".about-text").addClass("about-text-show");
    } else if($(window).scrollTop() < 870) {
        $(".about-text").removeClass("about-text-show");
    }

});







  


