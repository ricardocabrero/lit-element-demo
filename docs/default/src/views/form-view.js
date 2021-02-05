import { LitElement, html } from "../../node_modules/lit-element/lit-element.js";
import { styles } from "../styles/form-view-styles.js";
import "../components/form-user.js";

class FormView extends LitElement {
  static get properties() {
    return {
      edit: {
        type: Object
      }
    };
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
        <div class="form-view">
            <form-user .edit=${this.edit}></form-user>
        </div>`;
  }

}

customElements.define('form-view', FormView);