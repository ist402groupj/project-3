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
function CardTemplate({need, name, image, age, height, holidayCheer }) {
  return html` <trading-card
  need = "${need}"
   name="${name}"
   image="${image}"
   age="${age}"
   height="${height}"
   holidayCheer="${holidayCheer}"
   ></trading-card> `;
}


export const Card = CardTemplate.bind({});
  Card.ards = {
    need: 'Card',
  }

export const TradingCard = CardTemplate.bind({});
TradingCard.args = {
 /* need:'Trading Card',
  name="Buddy The Elf",
  image="./assets/Elf.jpg",
  age="30",
  height="6ft 3",
  holidayCheer="99",*/
  slot: html`<trading-card></trading-card>
  `,
}


  
  