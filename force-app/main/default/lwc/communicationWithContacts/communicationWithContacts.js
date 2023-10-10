import { LightningElement, wire } from 'lwc';
import conList from "@salesforce/apex/ContactsWithPhoto.conList"

export default class ContactList extends LightningElement {
   
    @wire(conList) wiredContacts;
    selectedContact;

    childResponseSelectionHandler(event) {
        let selectedContactID = event.detail;
        this.selectedContact = this.wiredContacts.data.find((curritem) => curritem.Id == selectedContactID);
        console.log("Selectd contactInfo from contacts::", selectedContact);
    }
}