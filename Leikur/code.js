player = {

  x : 4,
  y : 4,

  move : function(z) {		
		switch (z) {
			case 38: // Up
				document.getElementById('key').innerHTML = z;
				if (this.y == 0) {
					this.y = 9;
				} else {
					this.y -= 1;
				}
				break;
			case 40: // Down
				document.getElementById('key').innerHTML = z;
				if (this.y == 9) {
					this.y = 0;
				} else {
					this.y += 1;
				}
				break;
			case 37: // Left
				document.getElementById('key').innerHTML = z;
				if (this.x == 0) {
					this.x = 9;
				} else {
					this.x -= 1;
				}
				break;
			case 39: // Right
				document.getElementById('key').innerHTML = z;
				if (this.x == 9) {
					this.x = 0;
				} else {
					this.x += 1;
				}
				break;
			default:
				document.getElementById('key').innerHTML = z;
				break;
		}
		updateMap();
	}
}
empty = '<div class="empty"/>';
function updateMap(){
	layout = [
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
		[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty]
	];
	layout[player.y][player.x] = '<div id="player"/>';
	for (row of layout) {
		//page.innerHTML += '<div class="row">';
			for (field of row) {
				page.innerHTML += field;
			}
		//page.innerHTML += '</div>';
	}
}
	

keyPressed = document.getElementById('key');
page = document.getElementById('main');
document.addEventListener('keydown', function(pressed) {
	page.innerHTML = '';
	player.move(pressed.keyCode);
});

updateMap();