const getTimeString = () => {
  return new Date().getTime().toString()
}

function removeOffcanvas(offcanvas_id) {
  const offcanvas_element = document.querySelector("#" + offcanvas_id);
  offcanvas_element.addEventListener("hidden.bs.offcanvas", function () {
    let x = bootstrap.Offcanvas.getInstance(offcanvas_element);
    x.dispose();
    setTimeout(function () {
      offcanvas_element.parentElement.removeChild(offcanvas_element);
    }, 3e3);
  });
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
      offcanvas.addEventListener("show.bs.offcanvas", function () {
        return eventFunction();
      });
      break;
    case "shown":
      offcanvas.addEventListener("shown.bs.offcanvas", function () {
        return eventFunction();
      });
      break;
    case "hide":
      offcanvas.addEventListener("hide.bs.offcanvas", function () {
        return eventFunction();
      });
      break;
    case "hidden":
      offcanvas.addEventListener("hidden.bs.offcanvas", function () {
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
