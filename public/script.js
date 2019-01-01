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
