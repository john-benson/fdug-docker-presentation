import intro from './intro';
import d4w from './docker-for-windows';
import mi from './many-instances';

export default el => {
  intro(el);
  d4w(el);
  mi(el);
}
