export default function ()
{
  const pageUrl = $(location).attr("href");
  $(window).resize(navScroll);
  $(document).ready(navScroll);
  $(window).scroll(navScroll);
  var transitionHeight = 250;
  if (pageUrl.includes("Solutions")) {
    console.log("This is the solutions page");
    transitionHeight = 90;
  }
  function navScroll(){
      if($(window).width() >= 992) {
        $("#global-nav").removeClass("small-screen");
          var scrollTop = 0;
            scrollTop = $(window).scrollTop();
             $('.counter').html(scrollTop);

            if (scrollTop >= transitionHeight) {
                $('#global-nav').css({
                    "padding":"0px"
                })
                $(".scrollN").css({
                    "color":"#101010",
                    "padding-bottom":"0px",
                    "padding-top":"0px"
                })

              $('#global-nav').addClass('scrolled-nav');

          } else if (scrollTop < transitionHeight) {
              $(".scrollN").css({
                  "padding-bottom":"10px",
                  "padding-top":"10px"
              })

              $('#global-nav').removeClass('scrolled-nav');
            }
      }
      else {
          $(".scrollN").css({
              "padding-bottom":"10px",
              "padding-top":"10px"
          })
          $('#global-nav').css({
              "padding":"21px",
              "padding-top":"8px",
              "padding-bottom":"8px"
          })
          $("#global-nav").addClass("small-screen");
      }
  }

}
