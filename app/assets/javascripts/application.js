// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require jquery.ui.all
//= require_tree .

$(document).foundation();

// Config
var fastFade = 100;
var regFade = 300;
var primaryColor = 'white';
var secondaryColor = 'gray';
var highlightColor = 'yellow';

$(document).ready(function(){

  // Filter projects by category
  $('.category').click(function(){

    highlightCategory(this);

    // Highlight appropriate projects
    categoryName = $(this).html().toLowerCase();
    filtered = '.category-' + categoryName;

    $(filtered).animate({'color': primaryColor}, regFade);
    $('.project').not(filtered).animate({'color': secondaryColor}, regFade);
  });

  // Remove category filter
  $('#all-projects').click(function(){
    highlightCategory(this);
    $('.project').animate({'color': primaryColor});
  });

  // TODO: Project details display
  $('.project').click(function(){
  });

  function highlightCategory(div){
    // Highlight selected category
    $('.category, #all-projects').css({'color': primaryColor});
    $(div).animate({'color': highlightColor}, regFade);
  }
});
$(function(){ $(document).foundation(); });
