import { LitElement, html } from "../../node_modules/lit-element/lit-element.js";
import { styles } from "../styles/button-user-styles.js";

class ButtonAdd extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    return html`
        <button>Add New User</button>`;
  }

}

customElements.define('button-add', ButtonAdd);