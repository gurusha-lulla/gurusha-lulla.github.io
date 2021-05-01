$(document).ready(function() {

	// TOOLTIPS
	$('[data-toggle="tooltip"]').tooltip();

	$('.specific-tip-1').tooltip({
		html: true,
  		placement: 'left',
	});

	$('.specific-tip-2').tooltip({
		html: true,
  		placement: 'top',
	});

	$('.specific-tip-3').tooltip({
		html: true,
  		placement: 'right',
	});

	// POPOVERS
	$('[data-toggle="popover"]').popover();

	$('.popover-dismiss').popover({
  		trigger: 'focus'
	})
});
