var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var details = document.getElementById("details");
var theBody = document.getElementsByTagName("body")[0];



function deleteFaces() {
    while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild)
    }
    while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild)
    }
}

function generateFaces(){
	details.innerHTML = 'Now level: '+ numberOfFaces/5 + ' ( Total '+ numberOfFaces + ' faces).';

	for(var i = 0; i<numberOfFaces; i++){

		var this_img = document.createElement("img");
		this_img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		var left = Math.floor(Math.random() *400);
		var top= Math.floor(Math.random() *400);
		this_img.style.left = left + "px";
		this_img.style.top = top  + "px";
		theLeftSide.appendChild(this_img);

	}

	var leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);


	theLeftSide.lastChild.onclick=function nextLevel(event){
		    event.stopPropagation();
			deleteFaces();		        
		    numberOfFaces += 5;
		    generateFaces(numberOfFaces);
	};			
};



theBody.onclick = function gameOver() {
		    alert("Game Over!");
		    theBody.onclick = null;
		    theLeftSide.lastChild.onclick = null;
		    if(confirm("Do you want to retry ?")) {
				deleteFaces();	
				generateFaces();
			}else {
				details.innerHTML = 'Your final goal is level ' + numberOfFaces / 5 ;
			} 
};
window.onload = generateFaces