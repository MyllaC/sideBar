let btn = document.querySelector('#menu')
let sidebar = document.querySelector('.sidebar')
let searchBtn = document.querySelector('.bx-search')

btn.onclick = function () {
  sidebar.classList.toggle('active')
}
