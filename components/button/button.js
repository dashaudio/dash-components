import template from './button.html';
import styles from './host.scss';

export class DashButton extends HTMLElement {

  createdCallback() {
    var shadow = this.createShadowRoot().innerHTML = `<style>${styles}</style>${template}`;
  }

}
