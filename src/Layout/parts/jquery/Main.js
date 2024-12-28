import $ from 'jquery';

$(document).ready(function () {
    $(".Home").click(function(){
      $(".submenuul").toggle();
    });

    $('.Home').on("click", function (event) {
      $('.icons').toggleClass('rotate');
      $('.icons').toggleClass('bi-chevron-right');
  });
  });
  