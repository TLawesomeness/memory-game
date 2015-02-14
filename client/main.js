/* global _ */
'use strict';

$(document).ready(init);

function init() {
  createCards();
  paintCards();

  $('#secs').text(seconds);
  $('#timer').click(timerStart);
  $('.card').click(cardFlips);
}

var cards = [];
var checked = [];
var matches = [];
var flipCard = 0;
var seconds = 60;
var timer;

function timerStart() {
  timer = setInterval(timerCount, 1000);
}

function timerCount() {
  seconds--;
  if (seconds <= 0) {
    clearInterval(timer);
    alert('Try Again');
  }
  $('#secs').text(seconds);
}

function createCards() {
  var c1 = {name: 'Yi', image: 'http://iconbug.com/data/9c/512/6639d7e389cf294ae7df5fdaf93c62ff.png'};
  var c2 = {name: 'Udyr', image: 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Udyr-Spirit-Guard-icon.png'};
  var c3 = {name: 'Caitlyn', image: 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Caitlyn-icon.png'};
  var c4 = {name: 'Gragas', image :'http://iconbug.com/data/7a/512/9984748cee0e592c1992a8ccbc18e42e.png'};
  var c5 = {name: 'Kat', image :'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Katarina-Stay-Belle-icon.png'};
  var c6 = {name: 'Diana', image: 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Diana-Dark-Valkyrie-icon.png'};
  var c7 = {name: 'Twitch', image :'http://iconbug.com/data/45/512/6ae574cd6405e5dc47e304e7deaab389.png'};
  var c8 = {name: 'Nocture', image: 'http://iconbug.com/data/21/512/b96d99ce5b194328154e6f7e1e6ec7d7.png'};
  var c9 = {name: 'LeeSin', image: 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Acolyte-Lee-Sin-icon.png'};
  var c10 = {name: 'Vi', image: 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Vi-Neon-Strike-icon.png'};

  cards.push(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10);
}

function paintCards() {
  var cardArray = _.shuffle(cards);
  for (var i = 0; i < cardArray.length; i++) {

    var $card = $('<div>');
    $card.addClass('col-xs-3');
    $card.addClass('border');

    var $cardInner = $('<div>');
    $cardInner.addClass('card animated');
    $cardInner.attr('id', cardArray[i].name);
    $cardInner.css('background-image', 'url("' + cardArray[i].image + '")');

    $card.append($cardInner);
    $('#setCards').append($card);
  }
}

function cardFlips() {
  if (flipCard < 2 && _.find(cards, _.matchesProperty($(this).attr('id')))) {
    $(this).css('opacity', '1');
    flipCard++;
    checked.push($(this));
    if (checked.length === 2) {
      checkMatches(checked);
      checked = [];
      flipCard = 0;
    }
  }
}

function checkMatches(array) {
  if (array[0].attr('id') === array[1].attr('id')) {
    array.forEach(function(e) {
      matches.push(_.remove(cards, function(cd) { return cd.name === e.attr('id'); })[0]);
    });
    if (cards.length === 0) {
      clearInterval(timer);
      alert('You did it!');
    }
  } else {
    array.forEach(function(e) {
      e.fadeTo(450, 0);
    });
  }
}
