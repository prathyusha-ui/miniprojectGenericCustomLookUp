import { LightningElement } from 'lwc';

export default class ParentCustomEventDemo extends LightningElement {
    displayMsg = false;
    childResponseHandler() {
        this.displayMsg = true;
        
    }
}