import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import recordSelected from "@salesforce/messageChannel/sendMessgae__c";

export default class Publisher extends LightningElement {

    @wire(MessageContext)
    messageContext;

    publishMsg() {
        const payload = { lmsData: "Welcome from Tech Journey" };

    publish(this.messageContext, recordSelected, payload);
    }

}