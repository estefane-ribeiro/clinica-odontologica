window.addEventListener('scroll', () => {
  let t = document.getElementById('topo')
  const scrolled = window.scrollY

  if (Math.ceil(scrolled) > 500) {
    t.style.cssText =
      'display: flex;' + 'align-items: center;' + 'justify-content: center;'
  } else {
    t.style.display = 'none'
  }
})
