const WCLink = document.getElementById('WCLink')
const WCImage = document.getElementById('WCImage')

WCLink.addEventListener('mouseenter', () => {
  WCImage.classList.replace('dn', 'db')
})

WCLink.addEventListener('mouseleave', () => {
  WCImage.classList.replace('db', 'dn')
})