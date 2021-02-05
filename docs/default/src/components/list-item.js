import { LitElement, html } from "../../node_modules/lit-element/lit-element.js";
import { styles } from "../styles/list-item-styles.js";
import "./card-item.js";

class ListItem extends LitElement {
  static get properties() {
    return {
      data: {
        type: Array
      }
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.addEventListener('item-delete', this.deleteItem);
  }

  deleteItem({
    detail
  }) {
    const filterItems = this.data.filter(el => el.id !== detail);
    this.data = filterItems;
    localStorage.setItem('users', JSON.stringify(this.data));
  }

  render() {
    return html`
        <ul>
        ${this.data.map(el => html`
            <card-item id=${el.id} name=${el.name} website=${el.website} email=${el.email}></card-item>`)}
        </ul>
        `;
  }

}

customElements.define('list-item', ListItem);