import { LitElement, html, css } from 'lit'

class FeeFooter extends LitElement {
  static styles = css`
    .main-footer {
      color: salmon;
      background-color: black;
      padding: 1rem;
    }

    .container {
      text-align: center;
    }
  `

  render() {
    const date = new Date()
    const year = date.getFullYear()

    return html`
      <div class="main-footer">
        <div class="container">&copy; ${year} Copyright | Benzodiahmad@dicoding.org</div>
      </div>
    `
  }
}
customElements.define('fee-ahmad', FeeFooter)
