//---------------------------------PART 1------------------------------//
function validateForm() {
    var username = document.forms["loginform"]["username"].value;
    var password = document.forms["loginform"]["password"].value;
    var usernumber = document.forms["loginform"]["usernumber"].value;
    var geolocation = document.forms["loginform"]["geoglocation"].value;

    // check if any fields are empty
    if (username == "") {
        alert("Username must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (usernumber == "") {
        alert("User number must be filled out");
        return false;
    }
    if (geolocation == "") {
        alert("Geo location must be filled out");
        return false;
    }
    // check if username is valid
    re = /[0-9]/;
    if (!re.test(username)) {
        alert("Error: Username must contain at least one number (0-9)!");
        return false;
    }
    re = /[a-z]/;
    if (!re.test(username)) {
        alert("Error: Username must contain at least one lowercase letter (a-z)!");
        return false;
    }
    re = /[A-Z]/;
    if (!re.test(username)) {
        alert("Error: Username must contain at least one uppercase letter (A-Z)!");
        return false;
    }
    re = /[^0-9a-zA-Z]/;
    if (re.test(username)) {
        alert("Error: Username cannot have special characters");
        return false;
    }
    //check if password is valid
    re = /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,15}$/;
    if (!re.test(password)) {
        alert("Error: Password must contain at least 2 numbers and be 8 to 15 characters in length");
        return false;
    }
    //check if user number is valid
    re = /^\d{36}$/;
    if (!re.test(usernumber)) {
        alert("Error: User Number must be 36 digits and have no non-numeral characters");
        return false;
    }

    alert("User Registered");
    return true;
}
//---------------------------------PART 2------------------------------//

function launchOverlay(params){
	YUI().use('panel', function (Y) {
		var panel = new Y.Panel(params);
		panel.render();
		panel.on('visibleChange', function(e){
			if(e.newVal === false) {
				panel.destroy();
			}
		});
		console.log(panel);
	});
}
function launchCPanelOverlay(){

	var div = document.createElement('div');
	div.setAttribute('id' , 'lightbox');

	var yuibd = document.createElement('div');
	yuibd.setAttribute('class' , 'yui3-widget-bd');

	var iframe = document.createElement('iframe');
	iframe.setAttribute('id' , 'lightboxIFrame');
	iframe.setAttribute('border' , '0');
	iframe.setAttribute('frameborder' , '0');
	iframe.setAttribute('src' ,'https://www.cpanel.net');

	yuibd.appendChild(iframe);
	div.appendChild(yuibd);

	document.getElementsByTagName('body')[0].appendChild(div);

	/* wanted to set */
	launchOverlay({
		srcNode : '#lightbox',
		width   : '600px',
		height : '600px',
		centered: true,
        modal  : true
	});
}


//---------------------------------PART 3------------------------------//
function removeEveryNth(array){
	var i = array.length;
//function to remove every 3rd element
  while (i--) {
      (i + 1) % 3 === 0 && array.splice(i, 1);

  }
  return array;
}
//---------------------------------PART 4------------------------------//
function getFlickrPhotos(){
	$.ajax({
        url: "http://www.flickr.com/services/feeds/photos_public.gne?tags=punctuation,atsign&format=json",
        type: "GET",
        dataType :'jsonp',
        crossDomain: true
    });
}

function jsonFlickrFeed(result) {

	$('#flickrPhotos').empty();

	for(var i in result.items){
		var $div = $('<div />');
		var $img = $('<img />');
		$img.attr('src' , result.items[i].media.m);
		$img.attr('width' , '50px');
		$img.attr('title' , result.items[i].title);
		$div.addClass('flickr-image');
		$div.attr('width' , '50px');
		$div.append($img);
		$div.append(result.items[i].title);
		$('#flickrPhotos').append($div);
	}
}
