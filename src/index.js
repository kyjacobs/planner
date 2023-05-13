import './normalize.css';
import './style.css';
import {clearDay, buildDay} from './day'

(function () {
    console.log("Beginning IFFE");
    buildDay();
    // clearDay();
  })();



