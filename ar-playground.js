const a = document.createElement("a")
if (a.relList.supports("ar")) {
  console.log(a.relList.supports("ar"))
} else console.log('does not work')