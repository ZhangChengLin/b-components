import {removeModal, modalEvents} from "./util/index";

const bModal = (title, body, footer, ModalSizes, VerticallyCentered, LongContentType, Options, EventsType, EventsFunction) => {
  title = typeof title === 'function'
    ? title()
    : typeof title === 'string'
      ? title
      : '';
  body = typeof body === 'function'
    ? body()
    : typeof body === 'string'
      ? body
      : '';
  footer = typeof footer === 'function'
    ? footer()
    : typeof footer === 'string'
      ? footer
      : '';
  ModalSizes = typeof ModalSizes === "string" ? ModalSizes : "default";
  VerticallyCentered = typeof VerticallyCentered === "boolean" ? VerticallyCentered : false;
  LongContentType = typeof LongContentType === "boolean" ? LongContentType : false;
  Options = typeof Options === "object" ? Options : "";
  EventsType = typeof EventsType === "string" ? EventsType : "";
  EventsFunction = typeof EventsFunction === "function" ? EventsFunction : "";

  const document_body = document.querySelector("body");
  const TimeID = new Date().getTime().toString();
  const modal_ID = "Modal_" + TimeID;
  const modal_header_ID = "modalHeader_" + TimeID;
  const modal_title_ID = "modalTitle_" + TimeID;
  const modal_body_ID = "modalBody_" + TimeID;
  const modal_footer_ID = "modalFooter_" + TimeID;
  const modal = document.createElement("div");
  const modal_dialog = document.createElement("div");
  const modal_content = document.createElement("div");
  const modal_header = document.createElement("div");
  const modal_title = document.createElement("h5");
  const modal_close_btn = document.createElement("button");
  const modal_close_span = document.createElement("span");
  const modal_body = document.createElement("div");
  const modal_footer = document.createElement("div");

  modal.id = modal_ID;
  modal.className = "modal fade";
  modal.tabIndex = -1;
  modal.role = "dialog";
  typeof title === "string" ? modal.setAttribute("aria-labelledby", modal_title_ID) : "";

  modal_dialog.className = "modal-dialog";
  switch (ModalSizes) {
    case "default":
      break;
    case "sm":
      modal_dialog.className += " modal-sm";
      break;
    case "lg":
      modal_dialog.className += " modal-lg";
      break;
    case "xl":
      modal_dialog.className += " modal-xl";
      break;
    case "full":
      modal_dialog.className += " modal-fullscreen";
      break;
    case "full-sm":
      modal_dialog.className += " modal-fullscreen-sm-down";
      break;
    case "full-md":
      modal_dialog.className += " modal-fullscreen-md-down";
      break;
    case "full-lg":
      modal_dialog.className += " modal-fullscreen-lg-down";
      break;
    case "full-xl":
      modal_dialog.className += " modal-fullscreen-xl-down";
      break;
    default:
      modal_dialog.className += " " + ModalSizes;
  }

  switch (VerticallyCentered) {
    case true:
      modal_dialog.className += " modal-dialog-centered";
      break;
    case false:
    default:
  }

  switch (LongContentType) {
    case true:
      modal_dialog.className += " modal-dialog-scrollable";
      break;
    case false:
    default:
  }
  modal_dialog.role = "document";

  modal_content.className = "modal-content shadow-lg overflow-hidden";

  modal_header.className = "modal-header";
  modal_header.id = modal_header_ID;

  typeof title === "string" ? modal_title.id = modal_title_ID : "";
  title instanceof HTMLElement ? modal_header.appendChild(title) : modal_title.innerHTML = title;

  modal_close_btn.className = "btn-close";
  modal_close_btn.type = "button";
  modal_close_btn.dataset['bsDismiss'] = 'modal';
  modal_close_btn.setAttribute("aria-label", "Close");

  modal_close_span.setAttribute("aria-hidden", "true");

  modal_body.className = "modal-body";
  modal_body.id = modal_body_ID;
  body instanceof HTMLElement ? modal_body.appendChild(body) : modal_body.innerHTML = body;

  modal_footer.className = "modal-footer";
  modal_footer.id = modal_footer_ID;
  footer instanceof HTMLElement ? modal_footer.appendChild(footer) : modal_footer.innerHTML = footer;

  title ? modal_close_btn.appendChild(modal_close_span) : "";
  typeof title === "string" ? modal_header.appendChild(modal_title) : "";
  title ? modal_header.appendChild(modal_close_btn) : "";
  title ? modal_content.appendChild(modal_header) : "";
  modal_content.appendChild(modal_body);
  footer ? modal_content.appendChild(modal_footer) : "";
  modal_dialog.appendChild(modal_content);
  modal.appendChild(modal_dialog);
  document_body.appendChild(modal);

  EventsType && EventsFunction ? modalEvents(modal_ID, EventsType, EventsFunction) : "";

  const modal_element = document.querySelector("#" + modal_ID);
  const xxx = Options ? new bootstrap.Modal(modal_element, Options) : new bootstrap.Modal(modal_element);
  xxx.show();
  removeModal(modal_ID);
  return TimeID;
};

export default bModal
