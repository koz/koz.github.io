const WCLink = document.getElementById('WCLink')
const WCImage = document.getElementById('WCImage')

const getRandomInt = (max, min = 0) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
}

WCLink.addEventListener('mouseenter', () => {
  WCImage.style.right = `${getRandomInt(40, 20)}%`
  WCImage.style.top = `${getRandomInt(50, 10)}%`
  WCImage.style.transform = 'scale(1)'
  WCImage.style.opacity = 1
})

WCLink.addEventListener('mouseleave', () => {
  WCImage.style.transform = 'scale(0)'
  WCImage.style.opacity = 0
})