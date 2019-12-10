const body = document.querySelector('body')
const a = document.createElement("a")
if (a.relList.supports("ar")) {
  a.setAttribute('ref', 'ar')
  a.setAttribute('href', 'https://firebasestorage.googleapis.com/v0/b/arkit-playground.appspot.com/o/Adam_Uph_Chair_Dining_Arm-4859109.usdz?alt=media&token=39931a69-7aac-4b87-a1bb-dca34bfa81fe')
  a.innerText = 'web ar viewer'
  body.appendChild(a)
} else {
  const h1 = document.createElement('h1')
  h1.innerText = 'WebAR does not work here. Try opening the site on an iPhone device'
  body.appendChild(h1)
}