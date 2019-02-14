/* global fetch */

/* global io */
const socket = io();

const buttons = Array.prototype.slice.call(document.querySelectorAll('.btn'));

buttons.forEach((element) => {
  element.addEventListener('mousedown', el => postData({
    target: Number(el.target.id),
    status: true,
  }));

  element.addEventListener('mouseup', el => postData({
    target: Number(el.target.id),
    status: false,
  }));
});

document.addEventListener('keydown', function(event){
  //console.log(event);
  switch(event.code) {
	  case 'ArrowUp': 
	 	  postData({
        target: 0,
        status: true,
      });

	 	  postData({
        target: 1,
        status: true,
      });

			console.log('up');
			break;
		case 'ArrowDown':

	 	  postData({
        target: 2,
        status: true,
      });

	 	  postData({
        target: 3,
        status: true,
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
        status: false,
      });

	 	  postData({
        target: 1,
        status: false,
      });
			
		 	console.log('up');
			
			break;
		case 'ArrowDown':	
      console.log('down');
		 
	 	  postData({
        target: 2,
        status: false,
      });

	 	  postData({
        target: 3,
        status: false,
      });

			console.log('down');
			break;
	}
})
socket.on('sensor', (data) => {
  document.querySelector('.sensors').innerHTML = JSON.stringify(data);
});

function postData(data) {
  /* Fetch data from server
  fetch(`${window.location.href}motors`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  */

  socket.emit('motor', data);
}
