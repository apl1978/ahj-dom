import Goblin from './goblin/goblin';

document.addEventListener('DOMContentLoaded', () => {

  const field = document.querySelector('.field');
  const goblin = new Goblin(field);
  for (let i = 0; i < 16; i++) {
    goblin.addNewGoblin();
  }
  
  const activeGoblin = field.firstElementChild;
  activeGoblin.classList.add('active');
  
  const mainInterval = setInterval(() => {
     goblin.toggleActive();
  }, 1000);
  
})
