$(document).ready(function () {
var words = [
'Lorem ',
'ipsum ',
'delor',
'sit',
'amet',
'consect',
'adipisci',
'elit,',
'sed.',
'Eiusmod',
'tempor',
'a',
'enim',
'minim',
'season',
'nulla',
'dolore',
'sint',
'id',
'est',
'laboris',
'ut.',
'aute',
'laborum',
'toe'
];
var message = '';
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var scrolled = false;
var timeDelay = 200;
var cardReveal = function () {
$('#message').text(message).show();
};
if (month === 12) {
$('li').each(function (index) {
var adventwindow = index + 1;
var item = $(this);
if (day !== adventwindow && adventwindow < day) {
window.setTimeout(function () {
item.children('.door').addClass('open');
}, timeDelay);
}
timeDelay += 100;
if (adventwindow <= day) {
var word = words[index];
$(this).append('<div class="revealed">' + word + '</div>');
message = message + ' ' + word;
}
if (adventwindow === day) {
$(this).addClass('current');
$(this).addClass('jiggle');
}
$(this).on('click', function () {
if (adventwindow <= day) {
$(this).children('.door').toggleClass('open');
}
$(this).removeClass('jiggle');
if (day >= 25 && adventwindow === 25) {
messageReveal();
if (!scrolled) {
$('html, body').animate({ scrollTop: $('#message').offset().top }, 2000);
scrolled = true;
}
}
});
});
if (day >= 26) {
messageReveal();
}
}
});