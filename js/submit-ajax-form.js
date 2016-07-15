
// Delay form submission, check for errors then post
function submitForm() {


	// Submit post on submit
	$('#example-form').on('submit', function(event){
	    event.preventDefault();

	    // Get Data
		var first_name = $('#first-name').val();
		var last_name = $('#last-name').val();
		var email = $('#email').val();
		var state = $('#state').val();



		if ($('#terms').is(':checked')) {

			// Validate text inputs
			$("#intended-rental").after("<span style='font-color:red;'> *</span>")

			// Validate select inputs

		} else {

		}



	    $.ajax({
	        url : "/submit-ajax-form/", // the endpoint
	        type : "POST", // http method
	        data : { first_name:first_name, last_name:last_name, email:email, state:state }, // data sent with the post request

	        // handle a successful response
	        success : function(json) {
	            $('#contact-name').val(''); // remove the value from the input
	            $('#contact-email').val(''); // remove the value from the input
	            $('#contact-message').val(''); // remove the value from the input

	            // Respond success
	            $('.contact-us').html("<p style='text-align:center;'>Thank you for your interest!<br />We will respond to your message shortly.</p>");

	        },

	        // handle a non-successful response
	        error : function(xhr,errmsg,err) {

	            // Respond success
	            $('.contact-us').html("<p style='text-align:center;'>There was an error sending contact request and we apologize for the inconvenience.<br />Please email us at info@wildercompany.com</p>");

	            console.log("Error: " + errmsg + xhr.status + ": " + xhr.responseText);
	        }
	    });


	});
	
}
