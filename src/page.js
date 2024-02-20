import loadHeader from "./header";
import loadFooter from "./footer";

function loadPage() {
  const body = document.querySelector('body');
  body.appendChild(loadHeader());
  body.appendChild(loadFooter());
}

export default loadPage;