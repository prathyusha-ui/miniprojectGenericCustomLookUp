import { LightningElement, wire } from 'lwc';
import conList from "@salesforce/apex/ContactsWithPhoto.conList";
import { publish, MessageContext } from "lightning/messageService";
import recordSelected from "@salesforce/messageChannel/sendContact__c";

export default class ContactList extends LightningElement {
   
    @wire(conList) wiredContacts;
    selectedContact;

    
    @wire(MessageContext)
    messageContext;

    

    childResponseSelectionHandler(event) {
        console.log("event response");
        let selectedContactID = event.detail;
        this.selectedContact = this.wiredContacts.data.find((curritem) => curritem.Id === selectedContactID);
        console.log("Selectd contactInfo from contacts::", selectedContact);

        const payload = { lmsdata: this.selectedContact};

        publish(this.messageContext, recordSelected, payload);
    }

    
}