import './normalize.css';
import './style.css';
import { buildDay, nextDay, previousDay } from './day';
import { addInputArea, getUserInput, removeInputContainer } from './entries';


const planner = (function() { 

    const init = () => {
        buildDay();
        bindEvents();
    }

    const bindEvents = () => {
        const contentBtn = document.querySelector('#add-content-btn');
        contentBtn.addEventListener('click', addInputArea);
    }

    return {init};

})();

planner.init();

  
  




