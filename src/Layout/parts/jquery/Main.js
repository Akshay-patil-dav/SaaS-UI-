import $ from 'jquery';

$(document).ready(function () {
  $(".Home").click(function () {
    $(".submenuul").toggle();
  });




  $('.Home').on("click", function (event) {
    $('.icons').toggleClass('rotate');
    $('.icons').toggleClass('bi-chevron-right');
  });


  /*********************************************** */

  $(".Ecommerce").click(function () {
    $(".submenuul-commerce").toggle();
  });

  $('.Ecommerce').on("click", function (event) {
    $('.icons-Ecommerce').toggleClass('rotate');
    $('.icons-Ecommerce').toggleClass('bi-chevron-right');
  });

  /*********************************************** */

  $(".CRM").click(function () {
    $(".submenuul-CRM").toggle();
  });

  $('.CRM').on("click", function (event) {
    $('.icons-CRM').toggleClass('rotate');
    $('.icons-CRM').toggleClass('bi-chevron-right');
  });

  /*********************************************** */

  $(".project").click(function () {
    $(".submenuul-project").toggle();
  });

  $('.project').on("click", function (event) {
    $('.icons-project').toggleClass('rotate');
    $('.icons-project').toggleClass('bi-chevron-right');
  });

  /*********************************************** */

  $(".Customer").click(function () {
    $(".submenuul-Customer").toggle();
  });

  $('.Customer').on("click", function (event) {
    $('.icons-Customer').toggleClass('rotate');
    $('.icons-Customer').toggleClass('bi-chevron-right');
  });



});
