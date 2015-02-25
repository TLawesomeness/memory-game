/* global _, Box */
'use strict';

$(document).ready(init);

var flip = [];
var backImg = [];

function init() {
  createBackImg();
  paintImages();
  // $('#boxSet').on('click', '.front', clickBox);
  $('#boxSet').click();
  // document.querySelector('.front').classList.toggle("flip");

  $('.flip-container').click(function() {
    $(this).find('.flipper').addClass('flip');
    var $flip = $('.flip');

    if ($flip.length === 2) {
      setTimeout(flips, 800);
    }
  });

  function flips() {
    if (matching()) {
      $('.flip').removeClass('flip').addClass('delete');
      $('.delete').bind('.flip');
      console.log('It\'s a match!');
    } else {
      $('.flip').removeClass('flip');
      console.log('No matches');
    }
  }

  function matching() {
    if (flip.length === 2) {
      if (flip[0].attr('id') === flip[1].attr('id')) {
        $('.flip').addClass('matchFound');
        $('.flip').removeClass('matchFound');
      }
    }
  }

  function createBackImg() {
    var b1 = new Box(0, 'Yi', 'http://iconbug.com/data/9c/512/6639d7e389cf294ae7df5fdaf93c62ff.png');
    var b2 = new Box(1, 'Udyr', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Udyr-Spirit-Guard-icon.png');
    var b3 = new Box(2, 'Caitlyn', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Caitlyn-icon.png');
    var b4 = new Box(3, 'Gragas', 'http://iconbug.com/data/7a/512/9984748cee0e592c1992a8ccbc18e42e.png');
    var b5 = new Box(4, 'Kat', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Katarina-Stay-Belle-icon.png');
    var b6 = new Box(5, 'Diana', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Diana-Dark-Valkyrie-icon.png');
    var b7 = new Box(6, 'Twitch', 'http://iconbug.com/data/45/512/6ae574cd6405e5dc47e304e7deaab389.png');
    var b8 = new Box(7, 'Nocture', 'http://iconbug.com/data/21/512/b96d99ce5b194328154e6f7e1e6ec7d7.png');
    var b9 = new Box(8, 'LeeSin', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Acolyte-Lee-Sin-icon.png');
    var b10 = new Box(9, 'Vi', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Vi-Neon-Strike-icon.png');

    backImg.push(b1, b1, b2, b2, b3, b3, b4, b4, b5, b5, b6, b6, b7, b7, b8, b8, b9, b9, b10, b10);
    backImg = _.shuffle(backImg);
  }

  function paintImages() {
    console.log(backImg);
    backImg.forEach(function(icon) {
      var $flipContainer = $('<div>');
      $flipContainer.addClass('flip-container');

      var $flipper = $('<div>');
      $flipper.addClass('flipper');

      var $back = $('<div id="' + icon.id + '">');
      $back.addClass('back');
      $back.css('background-image', 'url("' + icon.image + '")');

      var $image = $('<div>');
      $image.css('background-image', 'url("' + icon.image + '")');

      var $outer = $('<div>');
      $outer.addClass('backcolor');

      var $front = $('<div>');
      $front.addClass('front');
      // $front.css('background-image', 'url(../lolimages/cover.png)');

      $back.append($image);
      $flipper.append($front, $back);
      $flipContainer.append($outer);
      $outer.append($flipper);
      $('#boxSet').append($flipContainer);
    });
  }

}
