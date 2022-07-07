let count = 1
document.getElementById('radio1').checked = true

setInterval(function () {
  nextimages()
}, 5000)

function nextimages() {
  count++
  if (count > 4) {
    count = 1
  }
  document.getElementById('radio' + count).checked = true
}

window.addEventListener('scroll', () => {
  let t = document.getElementById('topo')
  const scrollable =
    (document.documentElement.scrollHeight - window.innerHeight) / 4
  const scrolled = window.scrollY

  if (Math.ceil(scrolled) > 500) {
    t.style.cssText =
      'display: flex;' + 'align-items: center;' + 'justify-content: center;'
  } else {
    t.style.display = 'none'
  }
})
