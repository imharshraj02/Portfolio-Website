$(".home").click(function(){
    $("section").addClass("disp");
    $("#home").removeClass("disp");
  });

$(".skills").click(function(){
    $("section").addClass("disp");
    $("#skills").removeClass("disp");
  });

$(".projects").click(function(){
    $("section").addClass("disp");
    $("#projects").removeClass("disp");
  });

$(".certificates").click(function(){
    $("section").addClass("disp");
    $("#certificates").removeClass("disp");
  });

$(".contact").click(function(){
    $("section").addClass("disp");
    $("#contact").removeClass("disp");
  });

  // Targeting video element 
  let clip = $(".vid")
  
  /* Applying mouseover event on video clip 
  and then we call play() function to play 
  the video when the mouse is over the video */
  clip.on("mouseover", function (e) {
    $(this).trigger('play');
    $container.find(".video .icon").css("visibility","visible");

  })

  /* Applying mouseout event on video clip 
  and then we call pause() function to stop 
  the video when the mouse is out the video */
  clip.on("mouseout", function (e) {
    $(this).trigger('pause');
    $container.find(".video .icon").css("visibility","hidden");
  })