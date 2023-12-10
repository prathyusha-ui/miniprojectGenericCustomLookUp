import { LightningElement, api } from 'lwc';

export default class Contactitem extends LightningElement {
    @api contact;

    clickOnImg(event) {
        event.preventDefault();
        console.log("Photo selected");
        //sending selected contactId to parent using creation of custom event, custom event name should be in smaller case
        let selectevent = new CustomEvent("selection", { detail: this.contact.Id });

        //dispatch event
        console.log("dispatch", selectevent);
        this.dispatchEvent(selectevent);

    }
}