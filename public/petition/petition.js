function filePetition(){

        var signatoryName = document.getElementById( 'signatory' );
        var email = document.getElementById( 'emailaddress' );

        var xhr = new XMLHttpRequest();

        xhr.open('POST', 'http://localhost:3000/campaigns/4/signatories.json', true);
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.onload = function () {
            console.log('onload');
        };

	xhr.onreadystatechange = function() {
    		if (xhr.readyState === 4){
			showFeedback( 'Thanks! Your petition has been added.' );
   		}
	};	
        
        xhr.onerror = function () { 
		showFeedback( 'Oops! Problem submitting - please try again' );
	}; 

        var signature = { email: email.value, name: signatoryName.value };
        xhr.send( JSON.stringify(signature) );
}

function showFeedback( feedback ){
	
	var banner = document.getElementById( "banner" );
	var offsetWidth = banner.offsetWidth;
	var notificationArea = document.getElementById( "notificationArea" );
	notificationArea.className = "notificationShow";
	notificationArea.style.width = offsetWidth;
	
	notificationArea.innerHTML = feedback;
	
	setTimeout( function(){ hideFeedback(); },4000 );
}

function hideFeedback(){
	var notificationArea = document.getElementById( "notificationArea" );
	notificationArea.className = "notificationHide";
}