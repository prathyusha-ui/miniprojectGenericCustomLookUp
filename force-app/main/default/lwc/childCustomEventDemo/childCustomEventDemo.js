import { LightningElement,api } from 'lwc';

export default class ChildCustomEventDemo extends LightningElement {
    sendMsg() {
        //create custom event to send msg to parent
        let parentMsg = new CustomEvent("custommsg");
    //dispatch event to parent
        this.dispatchEvent(parentMsg);
    }
    
}