const body = document.querySelector('body')
const a = document.createElement("a")
if (a.relList.supports("ar")) {
  a.setAttribute('ref', 'ar')
  // a.setAttribute('href', 'https://firebasestorage.googleapis.com/v0/b/arkit-playground.appspot.com/o/heart.usdz?alt=media&token=eaae349d-0cc7-4212-ad71-9458eece0e1c')
  a.setAttribute('href', 'https://www.dropbox.com/sh/n2fhbrbbn2klevy/AAB4LIbXqfqtEsL4PvPOotboa?dl=0&preview=Phoebe_Leather_Chair_Arm-3912669.usdz')
  a.innerText = 'web ar viewer'
  body.appendChild(a)
} else {
  const h1 = document.createElement('h1')
  h1.innerText = 'WebAR does not work here. Try opening the site on an iPhone device'
  body.appendChild(h1)
}