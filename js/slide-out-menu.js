$(document).ready(function(){
  // Change this to whatever element is your trigger
  $('.slide-out-menu-demo__intro__button').click(function(){
      // Appends the "open" class to the wrapper and menu itself when clicked
      $(".slide-out-menu__wrapper ,.slide-out-menu__content").addClass("open");
  });

  // Removes the open classess when the menu is clicked close
  $('.slide-out-menu__wrapper').click(function(){
      $(".slide-out-menu__wrapper ,.slide-out-menu__content").removeClass("open");
  });
});