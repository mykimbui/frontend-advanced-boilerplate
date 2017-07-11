//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {

  $('.tops').each(function (i, item){
    TweenMax.to(item, 2 + 5 * Math.random(), {rotation: Math.random()< .5? '+=360' : '-=360', repeat: -1, ease: Linear.easeNone}, .25)
  })
    $('.sides').each(function (i, item){
    TweenMax.to(item, 2 + 5 * Math.random(), {rotation: Math.random()< .5? '+=360' : '-=360', repeat: -1, ease: Linear.easeNone}, .25)
  })
  // TweenMax.to('.tops', 2 + 5 * Math.random(), {rotation: Math.random()< .5? '+=360' : '-=360', repeat: -1, ease: Linear.easeNone}, .25)
  // TweenMax.to('.sides', 2 + 5 * Math.random(), {rotation: Math.random()< .5? '+=360' : '-=360', repeat: -1, ease: Linear.easeNone}, .25)
  TweenMax.allTo('.drifter', 10, {y:100, x: 100, repeat: -1, yoyo: true, ease: Linear.easeNone})
  // $('.sides').each(function (i, item){
  //   TweenMax.to(item, 2 + 5 * Math.random(), {rotation: Math.random()< .5? '+=360' : '-=360', repeat: -1, ease: Linear.easeNone})
  // })
});
