function alertText() {
  alert("alertText");
}

function alertNumber() {
  alert(returnNumber());
}

function consoleLogText() {
  console.log("consoleLogText");
}

function returnNumber() {
  return 222 + 333;
}

function calcNumber() {
  return (1 + 2 + 3).toString();
}

function returnHeader() {
  return "function header";
}

function returnBody() {
  return "function body";
}

function returnFooter() {
  return "function footer";
}

function returnHTML_Element() {
  const html = document.createElement("div");
  const p = document.createElement("p");
  html.className = "bg-success";
  p.className = "text-center";
  p.innerHTML = "this is html obj.";
  html.appendChild(p);
  return html;
}

function EventsFunction_1() {
  alert('EventsFunction_1')
}

function EventsFunction_2() {
  alert('EventsFunction_2')
}
