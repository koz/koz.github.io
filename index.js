const WCLink = document.getElementById('WCLink')
const WCImage = document.getElementById('WCImage')

WCLink.addEventListener('mouseenter', () => {
  WCImage.style.transform = 'scale(1)'
  WCImage.style.opacity = 1
})

WCLink.addEventListener('mouseleave', () => {
  WCImage.style.transform = 'scale(0)'
  WCImage.style.opacity = 0
})