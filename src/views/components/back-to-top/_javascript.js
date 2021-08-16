const body = document.querySelector('body')
const html = document.querySelector('html')
const btt = document.querySelector('#back-to-top')
const bttLink = document.querySelector('#back-to-top__link')
const viewportHeight = window.innerHeight

btt.classList.add('back-to-top-js--display-none')
btt.classList.add('back-to-top-js')
bttLink.classList.add('back-to-top-js__link')

const docHeight = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
)

if (docHeight > viewportHeight * 3) {
  btt.classList.remove('back-to-top-js--display-none')
}
