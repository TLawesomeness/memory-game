/* global _, Box */
'use strict';

$(document).ready(init);

function init() {
  createBoxes();
  paintBoxes();
  $('boxSet1').on('click', clickBox);
}

var boxSet = [];

function clickBox() {
  $(this).addClass('clicked');

  var image = $(this).find('art').text();
  var boxImage = _.find(boxSet, function(b) {return b.art === image;});

}

function createBoxes() {
  var b1 = new Box('Yi', 'http://iconbug.com/data/9c/512/6639d7e389cf294ae7df5fdaf93c62ff.png');
  var b2 = new Box('Udyr', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Udyr-Spirit-Guard-icon.png');
  var b3 = new Box('Caitlyn', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Caitlyn-icon.png');
  var b4 = new Box('Gragas', 'http://iconbug.com/data/7a/512/9984748cee0e592c1992a8ccbc18e42e.png');
  var b5 = new Box('Kat', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Katarina-Stay-Belle-icon.png');
  var b6 = new Box('Diana', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Diana-Dark-Valkyrie-icon.png');
  var b7 = new Box('Twitch', 'http://iconbug.com/data/45/512/6ae574cd6405e5dc47e304e7deaab389.png');
  var b8 = new Box('Nocture', 'http://iconbug.com/data/21/512/b96d99ce5b194328154e6f7e1e6ec7d7.png');
  var b9 = new Box('LeeSin', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Acolyte-Lee-Sin-icon.png');
  var b10 = new Box('Vi', 'http://icons.iconarchive.com/icons/fazie69/league-of-legends/512/Vi-Neon-Strike-icon.png');

  boxSet.push(b1, b1, b2, b2, b3, b3, b4, b4, b5, b5, b6, b6, b7, b7, b8, b8, b9, b9, b10, b10);
  boxSet = _.shuffle(boxSet);
}

function paintBoxes() {
  boxSet.forEach(function(art) {
    var $outer = $('<div>');
    $outer.addClass('art');


    var $img = $('<div>');
    $img.css('background-image', 'url("' + art.image + '")');

    $outer.append($img);
    $('#boxSet').append($outer);
  });
}
