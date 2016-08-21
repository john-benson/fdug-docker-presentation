import slide1 from './slide-1';
import slide2 from './slide-2';

const node = document.getElementsByClassName("slides")[0];
node.insertAdjacentHTML('beforeend', slide1);
node.insertAdjacentHTML('beforeend', slide2);
