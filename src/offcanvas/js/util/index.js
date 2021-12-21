const getTimeString = () => {
  return new Date().getTime().toString()
}


/**
 * @param {string} offcanvasId
 * @param {string} eventName
 * @param {function} eventFunction
 */
const offcanvasEvents = (offcanvasId, eventName, eventFunction) => {
  const offcanvas = document.querySelector("#Offcanvas_" + offcanvasId);
  switch (eventName) {
    case "show":
      offcanvas.addEventListener("show.bs.modal", function () {
        return eventFunction();
      });
      break;
    case "shown":
      offcanvas.addEventListener("shown.bs.modal", function () {
        return eventFunction();
      });
      break;
    case "hide":
      offcanvas.addEventListener("hide.bs.modal", function () {
        return eventFunction();
      });
      break;
    case "hidden":
      offcanvas.addEventListener("hidden.bs.modal", function () {
        return eventFunction();
      });
      break;
    default:
      throw 'eventName error'
  }
}


export {
  getTimeString,
  offcanvasEvents
}
