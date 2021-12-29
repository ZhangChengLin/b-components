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

function EventsFunction_1() {
  alert('EventsFunction_1')
}

function EventsFunction_2() {
  alert('EventsFunction_2')
}

function EventsFunction_3() {
  console.log('EventsFunction_3')
}
