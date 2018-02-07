/** 
 * Web      : Property
 * Author   : Fauzi Ferdiansyah
 * Github   : https://github.com/FauziFerdiansyah
 * Licensed : MIT © Fauzi Ferdiansyah
 */
// DOCUMENT READY FUNCTION
'use strict';
document.addEventListener('DOMContentLoaded', function () {
// BULMA JAVASCRIPT ###################################################################################################
	// Dropdowns

  var $metalinks = getAll('#meta a');

  if ($metalinks.length > 0) {
    $metalinks.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.preventDefault();
        var target = $el.getAttribute('href');
        var $target = document.getElementById(target.substring(1));
        $target.scrollIntoView(true);
        // window.history.replaceState(null, document.title, `${window.location.origin}${window.location.pathname}${target}`);
        return false;
      });
    });
  }

  // Dropdowns

  var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation();
        $el.classList.toggle('is-active');
      });
    });

    document.addEventListener('click', function (event) {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }
	// Toggles --------------------------------------------------------------------------------------------------------
	var $burgers = getAll('.burger');

	if ($burgers.length > 0) {
	  $burgers.forEach(function ($el) {
		$el.addEventListener('click', function () {
		  var target = $el.dataset.target;
		  var $target = document.getElementById(target);
		  $el.classList.toggle('is-active');
		  $target.classList.toggle('is-active');
		});
	  });
	}
	// # Toggle -------------------------------------------------------------------------------------------------------

	// Scrolling ------------------------------------------------------------------------------------------------------
	var navbarEl = document.getElementById("nav-main");
	var navbar_main = document.getElementById("nav-main");
	var offsetHeight = navbar_main.offsetHeight;
	var NAVBAR_HEIGHT = offsetHeight;
	var THRESHOLD = 160;
  var navbarOpen = false;
  var horizon = NAVBAR_HEIGHT;
  var whereYouStoppedScrolling = 0;
  var scrollFactor = 0;
  var currentTranslate = 0;

	function upOrDown(lastY, currentY) {
    if (currentY >= lastY) {
      return goingDown(currentY);
    }
    return goingUp(currentY);
  }

  function goingDown(currentY) {
    var trigger = NAVBAR_HEIGHT;
    whereYouStoppedScrolling = currentY;

    if (currentY > horizon) {
      horizon = currentY;
    }

    translateHeader(currentY, false);
  }

  function goingUp(currentY) {
    var trigger = 0;

    if (currentY < whereYouStoppedScrolling - NAVBAR_HEIGHT) {
      horizon = currentY + NAVBAR_HEIGHT;
    }

    translateHeader(currentY, true);
  }

  function constrainDelta(delta) {
    return Math.max(0, Math.min(delta, NAVBAR_HEIGHT));
  }

  function translateHeader(currentY, upwards) {
    // let topTranslateValue;
    var translateValue = void 0;

    if (upwards && currentTranslate == 0) {
      translateValue = 0;
    } else if (currentY <= NAVBAR_HEIGHT) {
      translateValue = currentY * -1;
    } else {
      var delta = constrainDelta(Math.abs(currentY - horizon));
      translateValue = delta - NAVBAR_HEIGHT;
    }

		if(!document.getElementById("menuMain").classList.contains("is-active")){
			if (translateValue != currentTranslate) {
				var navbarStyle = '\n        transform: translateY(' + translateValue + 'px);\n      ';
				currentTranslate = translateValue;
				navbarEl.setAttribute('style', navbarStyle);
			}
		}
    

    if (currentY > THRESHOLD * 2) {
      scrollFactor = 1;
    } else if (currentY > THRESHOLD) {
      scrollFactor = (currentY - THRESHOLD) / THRESHOLD;
    } else {
      scrollFactor = 0;
    }

    var translateFactor = 1 + translateValue / NAVBAR_HEIGHT;
  }

  translateHeader(window.scrollY, false);

  var ticking = false;
  var lastY = 0;

  window.addEventListener('scroll', function () {
    var currentY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        upOrDown(lastY, currentY);
        ticking = false;
        lastY = currentY;
      });
    }

    ticking = true;
  });
	// # Scrolling ----------------------------------------------------------------------------------------------------
	  
	// Modals ---------------------------------------------------------------------------------------------------------
	var rootEl = document.documentElement;
	var $modals = getAll('.modal');
	var $modalButtons = getAll('.modal-button');
	var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
  
	if ($modalButtons.length > 0) {
	  $modalButtons.forEach(function ($el) {
		$el.addEventListener('click', function () {
		  var target = $el.dataset.target;
		  var $target = document.getElementById(target);
		  rootEl.classList.add('is-clipped');
		  $target.classList.add('is-active');
		});
	  });
	}
	function closeModals() {
		rootEl.classList.remove('is-clipped');
		$modals.forEach(function ($el) {
			$el.classList.remove('is-active');
		});
	}
	if ($modalCloses.length > 0) {
	  $modalCloses.forEach(function ($el) {
			$el.addEventListener('click', function () {
				closeModals();
			});
	  });
	}
	// # Modals -------------------------------------------------------------------------------------------------------

// # BULMA JAVASCRIPT #################################################################################################

	// Function for show hide option detail
	document.getElementsByClassName("div-btn")[0].addEventListener("click", displayDetail);
		function displayDetail() {
			var myButtonClasses = document.getElementById("openDetail").classList;
			myButtonClasses.remove("is-active");
			if (myButtonClasses.contains("closed-detail")) {
				myButtonClasses.remove("closed-detail");
			} else {
				myButtonClasses.add("closed-detail");
			}
			if (myButtonClasses.contains("open-detail")) {
				myButtonClasses.remove("open-detail");
			} else {
				myButtonClasses.add("open-detail");
			}
		}

	document.getElementsByClassName("cls-dropdown-detail")[0].addEventListener("click", closeDetail);
		function closeDetail() {
			var myButtonClasses2 = document.getElementById("openDetail").classList;
				myButtonClasses2.remove("open-detail");
				document.getElementById("openDetail").setAttribute("class","dropdown-cst closed-detail");
		}
	
	document.getElementById("toTop").addEventListener("click", scrollToTop);

	function scrollToTop() {
			if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
					window.scrollBy(0, -50);
					requestAnimationFrame(scrollToTop);
			}
	}
		
}); 

// ALL FUNCTION Global ----------------------------------------------------------------------------------------------
function getAll(selector) {
	return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}
// # ALL FUNCTION -------------------------------------------------------------------------------------------------