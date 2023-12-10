import { LightningElement } from 'lwc';

export default class ChildComposition extends LightningElement {
    clickHandler() {
        let custEvent = new CustomEvent("fire", {
            detail: {
                bubbled: true,
                composed: true
            }
        });
        this.dispatchEvent(custEvent);
    
    }
}