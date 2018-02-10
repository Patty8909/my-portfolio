


    $(document).ready(function() {
        
        $(".button-collapse").sideNav();
        // On click, remove class on active element, add it to the new one
        
        $('header nav li a').click(function(e) {
          
          $('header nav li a.active').removeClass('active');
          $(this).addClass('active');
          
          // Scroll to anchor
          
          $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 70},'slow');
          
          e.preventDefault();
          return false;
          
        });
        
        // On scroll, remove class on active element and add it to the new one
        
        $(document).scroll(function() {
           
           var position = Math.floor($(this).scrollTop() / 800) + 1;
          
           $('header nav li a.active').removeClass('active');
           $('header nav li a.link-' + position).addClass('active');
          
        });
        
      });
