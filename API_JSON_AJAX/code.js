concerts = {

	init : function(){
		$(document).ajaxError(function(e){
			console.log(this);
		});
		$.ajax({
			'url': 'http://apis.is/concerts',
			'type': 'GET',
			'dataType': 'json',
			'success': function(response) {
				concerts.JSON = response.results;
				return concerts.updateView();
			}
		});
	},

	updateView : function(){

		/*
		dateOfShow:"2016-04-01T22:00:00"
		eventDateName:"Nykur"
		eventHallName:"Græni Hatturinn (Akureyri)"
		imageSource:"https://d30qys758zh01z.cloudfront.net/images/medium/1.9504.jpg"
		name:"Útgáfutónleikar"
		userGroupName:"Bitra ehf"
		*/

		var blueprint = function(object){
			var cDiv = document.createElement("div");
			var cImgBox = document.createElement("div");
			var cImage = document.createElement("img");
			var cTitle = document.createElement("h1");
			var cSubTitle = document.createElement("h2");
			var cInfo = document.createElement("p");
			var cPublisher = document.createElement("p");
			var cTime = document.createElement("p");

			var tempDate = object.dateOfShow.slice(8,10) + object.dateOfShow.slice(4,8) + object.dateOfShow.slice(0,4) + " at " + object.dateOfShow.slice(11, 16);
			
			cTitle.innerText = object.eventDateName;
			cSubTitle.innerText = object.name;
			cInfo.innerText = object.eventHallName;
			cPublisher.innerText = object.userGroupName;
			cTime.innerText = tempDate;
			cImage.setAttribute("src", object.imageSource);


			if (cImage.width == 0 || cImage.height == 0){	//CHEAPFIX ???
				cImage.setAttribute("src", "error.png");
			}

			cDiv.appendChild(cImgBox);
			cImgBox.appendChild(cImage);
			cDiv.appendChild(cTitle);
			cDiv.appendChild(cSubTitle);
			cDiv.appendChild(cInfo);
			cDiv.appendChild(cPublisher);
			cDiv.appendChild(cTime);
			cDiv.className = "cBox";
			cImgBox.className = "cImgBox";
			cInfo.className = "cInfo";
			cPublisher.className = "cPublisher";
			cTime.className = "cTime";
			return cDiv;
		};

		for(var i = 0; i < concerts.JSON.length; i++){
			var temp = new blueprint(concerts.JSON[i]);
			$("#main").append(temp);
		}
	}
}
concerts.init();