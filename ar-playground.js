const a = document.createElement("a")
if (a.relList.supports("ar")) {
  a.setAttribute('rel', 'ar')
  a.setAttribute('href', 'heart.hsdz')
  a.innerText = 'arkit button'

  document.querySelector('body').appendChild(a)
} 