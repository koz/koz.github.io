const WCLink = document.getElementById('WCLink')
const WCImage = document.getElementById('WCImage')

WCLink.addEventListener('mouseenter', () => {
  WCImage.classList.replace('dn-ns', 'db-ns')
})

WCLink.addEventListener('mouseleave', () => {
  WCImage.classList.replace('db-ns', 'dn-ns')
})