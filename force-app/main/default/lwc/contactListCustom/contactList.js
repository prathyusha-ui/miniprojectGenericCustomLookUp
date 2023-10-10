import { LightningElement, wire } from 'lwc';
import conList from "@salesforce/apex/ContactsWithPhoto.conList"

export default class ContactList extends LightningElement {
    @wire(conList) wiredContacts;
}