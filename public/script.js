/* global fetch */

const socket = io();

const buttons = Array.prototype.slice.call(document.querySelectorAll('.btn'))

buttons.forEach(element => {
  element.addEventListener('mousedown', (el) => postData({
    'target': el.target.id,
    'status': true
  }))

  element.addEventListener('mouseup', (el) => postData({
    'target': el.target.id,
    'status': false
  }))
})

function postData (data) {
  fetch(window.location.href + 'motors', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  })
}
