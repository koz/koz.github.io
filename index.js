
const getRandomInt = (max, min = 0) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
}

const links = [{link: 'WCLink', image: 'WCImage'}, {link: 'BLink', image: 'BImage'}]

links.forEach((l) => {
  const linkEl = document.getElementById(l.link)
  const imageEl = document.getElementById(l.image)

  if (!linkEl || !imageEl) {
    return;
  }

  linkEl.addEventListener('mouseenter', () => {
    imageEl.style.right = `${getRandomInt(40, 20)}%`
    imageEl.style.top = `${getRandomInt(50, 10)}%`
    imageEl.style.transform = 'scale(1)'
    imageEl.style.opacity = 1
  })

  linkEl.addEventListener('mouseleave', () => {
    imageEl.style.transform = 'scale(0)'
    imageEl.style.opacity = 0
  })
})
