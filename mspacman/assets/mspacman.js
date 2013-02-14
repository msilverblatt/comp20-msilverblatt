function init(){

}



 function draw() {
 	sprite = new Image();
 	sprite.src="assets/pacman10-hp-sprite.png";

        canvas = document.getElementById('game');
        console.log("hello");
        // Check if canvas is supported on browser
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
            img = document.getElementById("sprites");
            ctx.drawImage(sprite,82,22,14,14,5,10,14,14);
            ctx.drawImage(sprite,141,82,16,16,5,115,16,16);
            //...
        }
        else {
            alert('Sorry, canvas is not supported on your browser!');
        }
    } 