import { LitElement, html } from "../../node_modules/lit-element/lit-element.js";
import { styles } from "../styles/error-message-styles.js";

class ErrorMessage extends LitElement {
  static get properties() {
    return {
      text: {
        type: String
      }
    };
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
        <p>${this.text}</p>`;
  }

}

customElements.define('error-message', ErrorMessage);