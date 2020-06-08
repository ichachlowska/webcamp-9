$('#inst_slider').slick({
  prevArrow:
    '<a class="slick-prev" href=""><i class="icon-angle-left"></i></a>',
  nextArrow:
    '<a class="slick-next" href=""><i class="icon-angle-right"></i></a>',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  loops: true,
  responsive: [
    {
      breakpoint: 757,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

$('#shoes').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  loops: true,
  responsive: [
    {
      breakpoint: 757,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

$('#main_slider').slick({
  slidesToShow: 1,
  loops: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

function reportWindowSize() {
  if (screen.width > 757) {
    desktopScripts();
  }

  if (screen.width < 757) {
    mobileScripts();
  }
}

function mobileScripts() {
  var acc = document.getElementsByClassName('menu_acc');
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }
  $('#inst_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    loops: true,
  });
}
function desktopScripts() {}

window.addEventListener('resize', reportWindowSize);
reportWindowSize();
