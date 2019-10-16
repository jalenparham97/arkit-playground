const a = document.createElement("a")
if (a.relList.supports("ar")) {
  a.setAttribute('ref', 'ar')
  a.setAttribute('href', 'heart.usdz')
  a.innerText = 'arkit button'

  document.querySelector('body').appendChild(a)
} 