(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); 

var projects = {
  'bliss': {
    'imageUrl': 'img/bliss.jpg',
    'title': 'Bliss Italian Resturant',
    'langs': '<span>HTML</span><span>CSS</span><span>JS</span><span>SASS</span><span>JQuery</span><span>Bootstrap 3</span>',
    'url': 'URL: <a href="https://fbrian0707.github.io/tasteless/" target="_blank">https://fbrian0707.github.io/tasteless/</a>',
    'work': `<li>Convert .psd photoshop files into html files</li>
             <li><i>contribute to design and solve design issues, prototyping</i></li>
             <li>create form validation and also integrate goolge maps api</li>
             <li><i>made responsive pages using bootstrap3 and media queries</i></li>
             <li>wrote vanila javascript and jquery code</li>
             <li>wrote php code for including mail service and some php in the template</li>`,
    'about': `<h3>About</h3><i>A Website for an italian restaurant.
              It allows customers to view special item of the day, check for availability and book a spot, also there is a contact form and comments sections where customers can rate the restaurant. 
              </p><p>Major part of the work done was in prototyping and the design was changed several times. There was also some PhP involved. 
              It also has a mail service which sends back messages to the respective authority.<i>`,
    'source': '<a href="https://github.com/fbrian0707/tasteless">https://github.com/fbrian0707/tasteless</a>'
  },
  'movies':{
    'imageUrl': 'img/movies.jpg',
    'title': 'Latest Movies',
    'langs': '<span>HTML</span><span>CSS</span><span>JS</span><span>SASS</span><span>twitter bootstrap</span><span>Angular.js</span><span>Restfull APIs</span>',
    'url': 'URL: <a href="https://fbrian0707.github.io/movies_api/" target="_blank">https://fbrian0707.github.io/movies_api/</a>',
    'about': `<h3>About</h3><i>Web application for consuming a movies <b>Restfull API</b>.
    It allows users to view top rated movies of the month, check the  movie ratings and also view the trailer of the movie, the application is made in angular.js framework and updates in real time.
    Major part of the work done was in registering and getting the api key also wrote a angular service to automatically get the key and use it forever. </p><p>
    Made the backend in <b>Node js</b>.Handeleded major routing in Angular. Included partials bootstrap.its a small but great app for checking the latest Movies<i>`,
 'work': `<li>Used the cli and hosted the application on <b>heroku</b></li>
             <li><i>Fixed a lot of bugs and deal with issues with <b>Angular.js</b> Versoning</i></li>
             <li>Angular <b>Form validation</b> and also integrate goolge maps api</li>
             <li><i>Query Api and get data using http service</i></li>
             <li>wrote vanila javascript, optimized browser randering speed</li>`,
    'source': '<a href="https://github.com/fbrian0707/movies_api">https://github.com/fbrian0707/movies_api</a>'
  },
  'traker':{
    'imageUrl': 'img/traker.jpg',
    'title': 'Fitness-Traker',
    'langs': '<span>HTML</span><span>CSS</span><span>JS</span><span>MapBox</span><span>Leaflet</span><span>Geo.json</span><span>Restfull APIs</span>',
    'url': 'URL: <a href="https://e-traker.firebaseapp.com/" target="_blank">https://e-traker.firebaseapp.com/</a>',
    'about': `<h3>About</h3><i>Web application for tracking user Movements.
               It uses <b>GPS</b> to get data from the users phone or laptop and maps it onto a Map in the webpage. 
               It’s a fun app if you want to track your movements. I made this for tracking my journey to caribbean islands. </p>
               <p>it takes GPx data and converts it into geo.json format which then uses a library like leaflet to map points onto the map. Currently the app takes its data from a database however it can be scaled to get real time data form the user<i>`,
    'work': `<li>Used the cli and hosted the application on <b>heroku</b></li>
             <li><i>Used the free version of <b>Mapbox</b>, and used <b>Leaflet</b> to map geo json data</i></li>
             <li>Angular <b>Form validation</b> and also integrate goolge maps api</li>
             <li><i>work with <b>GPx data</b> and convert it into geo.json format</i></li>
             <li>wrote vanila javascript, optimized browser randering speed</li>`,
    'source': '<a href="https://github.com/fbrian0707/fitness-tracker">https://github.com/fbrian0707/fitness-tracker</a>'
  },
  'shop':{
    'imageUrl': 'img/o-shop.jpg',
    'title': 'Online Shopping',
    'langs': '<span>HTML</span><span>CSS</span><span>JS</span><span>Angular 7</span><span>Firebase</span><span>Angular Material</span><span>JWT token</span>',
    'url': 'URL: <a href="https://oshop-2d115.firebaseapp.com/" target="_blank">https://oshop-2d115.firebaseapp.com/</a>',
    'about': `<h3>About</h3><i>An <b>Angular</b> 7 e-commerce application for small grocery stores.
              Users can check various grocery products, add them to a <b>cart</b>, and buy items.
              There is also a separate admin panel for admins where admin can edit products, create new products,and assign roles to other users.</p>
               <p>it uses <b>firebase</b> for backend services like database connection, backend scripts and for hosting. 
             Angular is a great framework and it works very well with firebase<i>`,
    'work': `<li>Made use of <b>firebase</b> in the Backend and  angular 7 in the frontend</b></li>
             <li><i>Created services, directives, <b>domain driven</b> forms, validation, route gaurds</i></li>
             <li>Created Authentication system, seperated used according to admin and user roles</li>
             <li><i>used <b>Bearer token</b> Authentication</i></li>
             <li>used http service to query the server</li>
             <li>Used <b>bootstrap 4</b> for css and grid system</li>`,
    'source': '<a href="https://github.com/fbrian0707/e-shop">https://github.com/fbrian0707/e-shop</a>'
  }


  
}

$('#myModal').on('shown.bs.modal', function (e) {
  var id = $(e.relatedTarget).data('id');
  $('.modal-image-wr img').attr({'src': projects[id].imageUrl});
  $('.modal-content .langs').html(projects[id].langs);
  $('.modal-title').html(projects[id].title);
  $('.modal-content .url').html(projects[id].url);
  $('.modal-content .work ul').html(projects[id].work);
  $('.modal-content .modal__about p').html(projects[id].about);
  $('.modal-footer p').html(projects[id].source);


  // console.log(projects[id].imageUrl)
})


// animations

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top + 200;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);


// collapsible
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();