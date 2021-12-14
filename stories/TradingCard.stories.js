import { html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

import './TradingCard.js';


export default {
  title: 'Project Three',
  component: 'trading-card',
  argTypes: { //not sure what the argtypes need to be?
    need: { type: String, reflect: true },
    cardImage: { type: Array },
  },
};

function Template({name, image,age, height,holidayCheer}) {
  return html` 
  ${this.cardImage.map(
    item => //I think the html is wrong below
      html`  
        <ul>
          <h1 style="text-align:center">${item.name}</h1>
          <img src=${item.image} alt="" />
          <div>
            <simple-icon-lite icon="star-border"></simple-icon-lite>
            Age: ${item.age}
          </div>
          <div>
            <simple-icon-lite
              icon="social:person-outline"
            ></simple-icon-lite>
            Height: ${item.height}
          </div>
          <div>
            <simple-icon-lite icon="places:ac-unit"></simple-icon-lite>
            Holiday Cheer: ${item.holidayCheer}
          </div>
        </ul>
      `
  )}
`;
}

export const TradingCard = TradingCardTemplate.bind({});
this.cardImage = [
  {
    name: 'Buddy the Elf',
    image: './assets/Elf.jpg',
    age: '30',
    height: '6ft 3',
    holidayCheer: '99',
  },
];
export const Card = Template.bind({});