import { LightningElement } from 'lwc';

export default class ParentComposition extends LightningElement {
    fireHandler() {
        console.log("event is handled in Parent- at child level(Shadow DOM)");
    }
    fireDivHandler() {
        console.log("event is handled in Parent- at divlevel(DOM)");
        
    }
}