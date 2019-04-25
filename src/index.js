import _ from 'lodash';
import classes from './index.css'
import classes2 from './styles.css'
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', 'component'], ' ');

  return element;
}

const component2 = () => {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', 'component2'], ' ');

  return element;
}
document.body.appendChild(component());
document.body.appendChild(component2());


console.log("This is to check the source map (only in dev, in prd it gives a link to the compressed stuff)");
