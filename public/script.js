const socket = io();

const buttons = Array.prototype.slice.call(document.querySelectorAll('.btn'));

buttons.forEach((element) => {
  element.addEventListener('mousedown', el => postData({
    target: Number(el.target.id),
    status: 1,
  }));

  element.addEventListener('mouseup', el => postData({
    target: Number(el.target.id),
    status: 0,
  }));
});

document.addEventListener('keydown', function(event){
  //console.log(event);
  switch(event.code) {
	  case 'ArrowUp': 
	 	  postData({
        target: 0,
        status: 1,
      });

	 	  postData({
        target: 1,
        status: 1,
      });

			console.log('up');
			break;
		case 'ArrowDown':

	 	  postData({
        target: 2,
        status: 1,
      });

	 	  postData({
        target: 3,
        status: 1,
      });

      console.log('down');
		  break;
	}
});


document.addEventListener('keyup', function(event){	
  switch(event.code) {
	  case 'ArrowUp': 
	 	  postData({
        target: 0,
        status: 0,
      });

	 	  postData({
        target: 1,
        status: 0,
      });
			
		 	console.log('up');
			
			break;
		case 'ArrowDown':	
      console.log('down');
		 
	 	  postData({
        target: 2,
        status: 0,
      });

	 	  postData({
        target: 3,
        status: 0,
      });

			console.log('down');
			break;
	}
})

socket.on('sensor', (data) => {
  document.querySelector('.sensors').innerHTML = JSON.stringify(data);
});

function postData(data) {
  socket.emit('motor', data);
}
