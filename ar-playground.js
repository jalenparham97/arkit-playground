const body = document.querySelector('body')
const a = document.createElement("a")
if (a.relList.supports("ar")) {
  a.setAttribute('ref', 'ar')
  a.setAttribute('href', 'http://www.westelm.com/netstorage/webar/assets/Austin_Leather_Ottoman-2618069.usdz')
  a.innerText = 'web ar viewer'
  body.appendChild(a)
} else {
  const h1 = document.createElement('h1')
  h1.innerText = 'WebAR does not work here. Try opening the site on an iPhone device'
  body.appendChild(h1)
}