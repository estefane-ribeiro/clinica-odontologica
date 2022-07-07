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

