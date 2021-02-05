import { LitElement, html } from "../../node_modules/lit-element/lit-element.js";
import { styles } from "../styles/card-item-styles.js";

class CardItem extends LitElement {
  static get properties() {
    return {
      name: {
        type: String
      },
      website: {
        type: String
      },
      email: {
        type: String
      },
      id: {
        type: Number
      }
    };
  }

  static get styles() {
    return [styles];
  }

  handleDelete() {
    this.dispatchEvent(new CustomEvent('item-delete', {
      bubbles: true,
      composed: true,
      detail: this.id
    }));
  }

  handleEdit() {
    this.dispatchEvent(new CustomEvent('item-edit', {
      bubbles: true,
      composed: true,
      detail: {
        name: this.name,
        website: this.website,
        email: this.email
      }
    }));
  }

  render() {
    return html`
        <div id=${this.id} class="card">
            <p><strong>Name: </strong>${this.name}</p>
            <p><strong>Website: </strong>${this.website}</p>
            <p><strong>Email: </strong>${this.email}</p>
            <div class="btns">
                <button @click=${this.handleEdit}>Edit</button>
                <button @click=${this.handleDelete}>Delete</button>
            </div>
        </div>`;
  }

}

customElements.define('card-item', CardItem);