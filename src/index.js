import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.scss';
import 'reveal.js/css/theme/source/night.scss';

import initSlides from './slides';

initSlides(document.getElementsByClassName('slides')[0]);

Reveal.initialize();

window.Reveal = Reveal;
