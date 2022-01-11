function calcNumber() {
  return (1 + 2 + 3).toString()
}

function returnHeader() {
  return "function header"
}

function returnBody() {
  return "function body"
}

function returnFooter() {
  return "function footer"
}

function returnEmpty() {
  return ''
}

function returnNull() {
  return null
}

function returnNaN() {
  return NaN
}

function returnUndefined() {
  return undefined
}

function returnHTML_Element() {
  const html = document.createElement("div")
  const p = document.createElement("p")
  html.className = "bg-success"
  p.className = "text-center"
  p.innerHTML = "this is html obj."
  html.appendChild(p)
  return html
}

function eventsFunction_1() {
  alert('eventsFunction_1')
}

function eventsFunction_2() {
  alert('eventsFunction_2')
}

function eventsFunction_3() {
  console.log('eventsFunction_3')
}
