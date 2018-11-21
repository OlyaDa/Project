/*active buttons script*/
var header = document.getElementById("menu");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*tabs-filters*/
$(function() {  
    $('.toggles li').click(function() {    
        var get_id=this.id;  
        var get_current = $('.posts .' + get_id); 
        $('.coltabs').not(get_current).hide(500);
         get_current.show(500);                                  
    });
    
         $('#showall').click(function() {                       
           $('.coltabs').show(500);                     
         });

      }); 


 $(function() {  
    $('.slickslider').slick({            /*обращаемся к блоку где слайдер и вызываем сам слайдер */
         dots:true,                         /*что б показівало точки*/
         slidesToShow:4,                                   /*что б показывало сразу 3 срайда так как у меня 3 блока лого о нас и текст*/
         arrows:false,                       /*убираем стрелки*/
         autoplay: true,
         autoplaySpeed:2000,
         pauseOnHover: true, /*что б когда наводил не крутились слайды*/
         slidesToScroll: 2, /*можно подстроить количесвто точек */
       
         responsive: [
          {
            breakpoint: 1180,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 825,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
  
        ]
    
      });   
 }); 









