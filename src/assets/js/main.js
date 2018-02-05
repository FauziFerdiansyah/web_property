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
	var navbar_main = document.getElementById("nav-main");
	var offsetHeight = navbar_main.offsetHeight;

	var scrollableElement = document.getElementById('root');
	scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);
	
	function findScrollDirectionOtherBrowsers(event){
		var delta;
		var menuMain = document.getElementById("menuMain");
	
		if (event.wheelDelta){
			delta = event.wheelDelta;
		}else{
			delta = -1 *event.deltaY;
		}
		if(!hasClass(menuMain, 'is-active') === true){
			if (delta < 0){
				navbar_main.style.transform = "translateY(-"+offsetHeight+"px)";
				navbar_main.classList.add("scroll");
			}else if (delta > 0){
				navbar_main.style.transform = "translateY(0px)";
				navbar_main.classList.remove("scroll");
			}
		}
		
	}
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
	
	if ($modalCloses.length > 0) {
	  $modalCloses.forEach(function ($el) {
		$el.addEventListener('click', function () {
		  closeModals();
		});
	  });
	}
	// # Modals -------------------------------------------------------------------------------------------------------

	// ALL FUNCTION ---------------------------------------------------------------------------------------------------
	function getAll(selector) {
		return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
	}
	function closeModals() {
		rootEl.classList.remove('is-clipped');
		$modals.forEach(function ($el) {
			$el.classList.remove('is-active');
		});
	}
	// function for HAS CLASS
	function hasClass(element, cls) {
			return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}
	// # ALL FUNCTION -------------------------------------------------------------------------------------------------
	
// # BULMA JAVASCRIPT #################################################################################################
}); 