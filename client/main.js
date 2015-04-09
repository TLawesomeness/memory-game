/* global _*/
'use strict';

$(document).ready(init);

var backImg = [];
var timer;
var timeCount;

function init() {
  createBack();
  paintImages();
  $('.flip-container').click(showCard);
  $('.start').click(go);
}

function go() {
  timeCount = 60;
  $('#timer').html(timeCount);
  $('.start').prop('disabled', true);
  console.log('clicked');

  timer = setInterval(function() {
    --timeCount;
    $('#timer').html(timeCount);
    if (timeCount === 0) {
      if ($('.back').length === 0) {
        alert('You Won!');
        clearInterval(timer);
        $('.start').prop('disabled', false);
      } else {
        alert('Too Slow! Try Again.');
        clearInterval(timer);
        $('.start').prop('disabled', false);
      }
    }
  }, 1000);
}

function showCard() {
  $(this).find('.flipper').addClass('flip');
  var $flip = $('.flip');

  if ($flip.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

var storedCards = [];

function checkMatch() {
  var img1 = $('.flip > .back')[0].id;
  var img2 = $('.flip > .back')[1].id;
  if (img1 === img2) {
    $('.flip').fadeOut();
    storedCards.push('.flip');
    console.log(storedCards);
    console.log('It\'s a match!');

  } else {
    $('.flip').removeClass('flip');
    console.log('No matches');
  }
}

// function revealedCards() {
//   $('.matched').remove();
//   if ($('.flip').length === 20) {
//     alert('you win!');
//   }
// }
//
// function ifMatch() {
//   if (checkMatch()) {
//     $('.flip').removeClass('flip').addClass('matched');
//     $('.matched').bind('flip', revealedCards);
//   } else {
//     $('.flip').removeClass('flip');
//   }
// }

function Box(id, name, image) {
  this.id = id;
  this.name = name;
  this.image = image;
}

function createBack() {
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

    var $front = $('<div>');
    $front.addClass('front');

    var $outer = $('<div>');
    $outer.addClass('backcolor');

    $flipper.append($front, $back);
    $flipContainer.append($outer);
    $outer.append($flipper);
    $('#gameBox').append($flipContainer);
  });
}
