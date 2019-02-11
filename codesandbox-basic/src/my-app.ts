import { html, css, LitElement, customElement } from "lit-element";

import "@vaadin/vaadin-form-layout/vaadin-form-layout.js";
import "@vaadin/vaadin-text-field/vaadin-text-field.js";
import "@vaadin/vaadin-text-field/vaadin-text-area.js";
import "@vaadin/vaadin-date-picker/vaadin-date-picker.js";

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`
      <h1>Vaadin Components Example</h1>

      <vaadin-form-layout>
        <vaadin-text-field
          label="First Name"
          placeholder="First Name"
        ></vaadin-text-field>
        <vaadin-text-field
          label="Last Name"
          placeholder="Last Name"
        ></vaadin-text-field>
        <vaadin-text-field
          label="Email"
          placeholder="email@example.com"
        ></vaadin-text-field>
        <vaadin-date-picker
          label="Birthday"
          placeholder="Birthday"
        ></vaadin-date-picker>
        <vaadin-text-area
          label="Bio"
          colspan="2"
          placeholder="Free-form bio text"
        ></vaadin-text-area>
      </vaadin-form-layout>
    `;
  }

  static styles = css`
    :host {
      padding-left: 1em;
      padding-right: 1em;
      display: block;
    }
  `;
}
