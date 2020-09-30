// animate js link here 
new WOW().init();



// custom sticky js part
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
}); 




// tab-part jquery code here 
$(document).ready(function(){
           $(".tab-2-content").hide(); 
           $(".tab-3-content").hide(); 
            
            //for tab - 1
            $(".tab-1").on("click", function(){
                $(".tab-1-content").show(); 
                $(".tab-2-content").hide(); 
                $(".tab-3-content").hide();
                
                $(".tab-1").addClass("active-color");
                $(".tab-2").removeClass("active-color");
                $(".tab-3").removeClass("active-color");
            });
            
            //for tab - 2
            $(".tab-2").on("click", function(){
                $(".tab-1-content").hide(); 
                $(".tab-2-content").show(); 
                $(".tab-3-content").hide();
                
                $(".tab-1").removeClass("active-color");
                $(".tab-2").addClass("active-color");
                $(".tab-3").removeClass("active-color");
            });
            
            //for tab - 3
            $(".tab-3").on("click", function(){
                $(".tab-1-content").hide(); 
                $(".tab-2-content").hide(); 
                $(".tab-3-content").show();
                
                $(".tab-1").removeClass("active-color");
                $(".tab-2").removeClass("active-color");
                $(".tab-3").addClass("active-color");
            });
        });