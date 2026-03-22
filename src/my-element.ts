import './index.css';
import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import.meta.glob('./**/*.ts', { eager: true });

// Breakpoint en px — ajusta según tu diseño
const DESKTOP_BREAKPOINT = 1024;

@customElement('my-element')
export class MyElement extends LitElement {
  @state()
  private _isDesktop: boolean = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches;

  private _mediaQuery: MediaQueryList = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);

  private _onBreakpointChange = (e: MediaQueryListEvent): void => {
    this._isDesktop = e.matches;
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this._mediaQuery.addEventListener('change', this._onBreakpointChange);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._mediaQuery.removeEventListener('change', this._onBreakpointChange);
  }

  render(): TemplateResult {
    return html`
      ${this._isDesktop ? html`<page-desktop></page-desktop>` : html`<page-home></page-home>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}