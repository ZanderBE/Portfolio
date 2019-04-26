// Modal window for the project images
// Get the modal
var modal = document.querySelector('.myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var i;
var img = document.getElementsByClassName("myImg");
var modalImg = document.querySelector('.img01');

 for(i=0;i< img.length;i++)
   {
    img[i].onclick = function(){

    modal.style.display = "block";
       modalImg.src = this.src;

 }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
$('.close').on('click', function() {
  modal.style.display = "none";
})



//Navbar Functionality
// navbar background color change on scroll
$(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 50){
            $('.navbar').css('background', 'transparent');
            $('.navbar-light .navbar-brand').css('color', '#A71930');
            $('.navbar-light .navbar-nav .nav-link').css('color', '#A71930');
            $('.navbar-light .navbar-nav .nav-link.active').css('color', '#4A4A4A');
        } else{
            $('.navbar').css({
              'background' : '#A71930',
              'transition' : 'background 200ms linear'
            });
            $('.navbar-light .navbar-brand').css('color', 'white');
            $('.navbar-light .navbar-nav .nav-link').css('color', 'white');
            $('.navbar-light .navbar-nav .nav-link.active').css('color', '#4A4A4A');
        }
    });

// Selecting navbar active states on click
$(".navbar-nav .nav-link").on("click", function(){
   $(".navbar-nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

// Scrollspy
$('body').scrollspy({ target: '#navbar', offset: 250});

//Button Functionality
// Change button namme after 'more info' is clicked
$('.moreinfo-btn').on('click', function() {
  const buttonReference = $(event.target).text();
  if (buttonReference === 'More Info') {
    $(event.target).html('Close');
  } if (buttonReference == 'Close') {
    $(event.target).html('More Info');
  }
});

// change button name after 'show more' has been clicked
$('.showme-more-btn').on('click', function() {
  const buttonReference2 = $(event.target).text();
  if (buttonReference2 === 'Show more') {
    $(event.target).html('Close');
  } else {
    $(event.target).html('Show more');
  }
})

// Change send button to sent button if succesful
$('.btn-send').on('click', function() {
  event.preventDefault();
  $('.btn-send').html('Sent!');
  $('.btn-send').css('background-color', 'green');
});
