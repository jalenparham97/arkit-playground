const a = document.createElement("a")
if (a.relList.supports("ar")) {
  a.setAttribute('ref', 'ar')
  a.setAttribute('href', 'https://firebasestorage.googleapis.com/v0/b/arkit-playground.appspot.com/o/heart.usdz?alt=media&token=eaae349d-0cc7-4212-ad71-9458eece0e1c')
  a.innerText = 'arkit button'

  document.querySelector('body').appendChild(a)
} 