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
var regFade = 800;
var primaryColor = 'white';
var secondaryColor = 'gray';
var highlightColor = 'yellow';

$(document).ready(function(){

  // Filter projects by category
  $('.category').click(function(){
    // Highlight appropriate category
    $('.category-selected').removeClass('category-selected');
    $(this).addClass('category-selected');

    // Highlight appropriate projects
    categoryName = $(this).html().toLowerCase();
    filtered = '.category-' + categoryName;
    if (categoryName == 'all'){
      filtered = '.project'
    }

    $(filtered).removeClass('filtered-project', regFade);
    $('.project').not(filtered).addClass('filtered-project', regFade);
  });

  // Fade out project-list under header
  $(window).scroll(function(){
    var headerHeight = $('#project-header').height();
    var headerOffset = $('#project-header').offset().top;
    var fadeHeight = headerOffset - headerHeight - 10;
    var lessFadeHeight = fadeHeight + 20;
    var moreFadeHeight = fadeHeight - 15;

    var listItems = $('#project-list dt');

    jQuery.each(listItems, function(){

      var position = $(this).position().top;

      if (position < lessFadeHeight){
        $(this).addClass('less-faded');
      }
      else if ($(this).hasClass('less-faded') && position > lessFadeHeight){
        $(this).removeClass('less-faded');
      }
      if (position < fadeHeight){
        $(this).addClass('faded');
      }
      else if ($(this).hasClass('faded') && position > fadeHeight ) {
        $(this).removeClass('faded');
      }
      if (position < fadeHeight && position < moreFadeHeight){
        $(this).addClass('most-faded');
      }
      else if ($(this).hasClass('most-faded') && position > moreFadeHeight ) {
        $(this).removeClass('most-faded');
      }
    });
  });

  // Start Accordion
  // Collapse all
  $('dd.details').hide();

  // Respond to click
  $('dt.project.clickable').click(function() {
    var project = $(this);
    var detail = $(this).next();

    // If clicked item is open, close it
    if (detail.hasClass('detail-active')){
      detail.slideUp(400, function(){
        detail.toggleClass('underline');
        project.toggleClass('underline');
        project.toggleClass('project-active');
      });
    }
    // Otherwise, close active item and open the clicked one
    else {
      // Deactive open items
      $('.detail-active').slideUp();
      $('.project-active').toggleClass('project-active');

      // Activate clicked items
      detail.slideDown();
      project.toggleClass('underline');
      detail.toggleClass('underline');
      project.toggleClass('project-active');
    }
    detail.toggleClass('detail-active');
  });

});
$(function(){ $(document).foundation(); });