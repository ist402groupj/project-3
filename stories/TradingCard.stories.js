import { html } from 'lit';

import '../src/TradingCard.js';


export default {
  title: 'TradingCard',
  component: 'trading-card',
  argTypes: {
    need: {control: 'text'},
    name: {control: 'text'},
    image:{control: 'text'},
    age: {control: 'text'},
    height:{control: 'text'},
    holidayCheer: {control: 'text'} 
  },
};

// todo: define and use slot
function CardTemplate({need, slot }) {
  return html`
   <trading-card need="${need}">
   ${slot}
   </trading-card>`;
}

export const Card = CardTemplate.bind({});
  Card.ards = {
    need: 'Card',
  }

export const TradingCard = CardTemplate.bind({});
TradingCard.args = {
  need: "buddy",
  slot: html`<trading-card need="buddy"></trading-card>
  `,
}
  