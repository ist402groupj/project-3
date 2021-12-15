import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../trading-card.js';
// import '../Name.js';
// import '../Traits.js';

describe('TradingCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <trading-card need="buddy"> </trading-card>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Buddy the Elf');
  });

  it('renders a simple icon', () => {
    const icon = element.shadowRoot.querySelector('simple-icon-lite');
    expect(icon).to.exist;
    expect(icon.textContent).to.equal('');
  });

  // accesbility
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
