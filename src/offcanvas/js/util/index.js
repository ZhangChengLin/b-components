const getTimeString = () => {
  return new Date().getTime().toString()
}

/**
 * @param {string} offcanvasId
 * @param {string} EventsType
 * @param {Function} EventsFun
 */
const offcanvasEvents = (offcanvasId, EventsType, EventsFun) => {
  const offcanvas = document.querySelector("#Offcanvas_" + offcanvasId);
  switch (EventsType) {
    case "show":
      offcanvas.addEventListener("show.bs.offcanvas", function () {
        return EventsFun();
      });
      break;
    case "shown":
      offcanvas.addEventListener("shown.bs.offcanvas", function () {
        return EventsFun();
      });
      break;
    case "hide":
      offcanvas.addEventListener("hide.bs.offcanvas", function () {
        return EventsFun();
      });
      break;
    case "hidden":
      offcanvas.addEventListener("hidden.bs.offcanvas", function () {
        return EventsFun();
      });
      break;
    default:
      throw 'eventName error'
  }
}

const removeOffcanvas = offcanvasId => {
  const offcanvas_element = document.querySelector("#" + offcanvasId);
  offcanvas_element.addEventListener("hidden.bs.offcanvas", function () {
    let x = bootstrap.Offcanvas.getInstance(offcanvas_element);
    x.dispose();
    setTimeout(function () {
      offcanvas_element.parentElement.removeChild(offcanvas_element);
    }, 3e3);
  });
};


export {
  getTimeString,
  offcanvasEvents,
  removeOffcanvas
}
