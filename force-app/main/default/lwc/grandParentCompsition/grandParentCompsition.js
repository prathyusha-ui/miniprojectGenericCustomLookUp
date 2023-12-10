import { LightningElement } from 'lwc';

export default class GrandParentCompsition extends LightningElement {
    fireChildHandler() {
        console.log("event is handled in  grandParent- at childlevel");
        
    }
}