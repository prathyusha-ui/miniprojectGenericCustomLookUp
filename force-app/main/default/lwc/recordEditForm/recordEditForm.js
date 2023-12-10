import { LightningElement, api } from 'lwc';
import ACCOUNT from "@salesforce/schema/Account";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import DATE_FIELD from "@salesforce/schema/Account.SLAExpirationDate__c"
import { NavigationMixin } from "lightning/navigation";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class RecordEditForm extends NavigationMixin(LightningElement) {

    @api objectApiName;

    fields = {
        name: ACCOUNT_NAME_FIELD,
        industry: INDUSTRY_FIELD,
        expiryDate: DATE_FIELD
    };

    successHandler(event) {
        //console.log(JSON.stringify(event.detail));
        console.log("created record info::", event.detail);

        let pageRef = {
            type: "standard__recordPage",
            attributes: {
                recordId: event.detail.id,
                objectApiName: this.objectApiName,
                actionName: "view"
            }
        };
        this[NavigationMixin.Navigate](pageRef);  
    }
    
    errorHandler(event) {
        const cusevent = new ShowToastEvent({
            title: "Error",
            message: event.detail.message,
            variant: "error"
                
        });
        this.dispatchEvent(cusevent);
    
}
submitHandler(event) {
        //check Industry is blank,if yes populate default value is energy
    event.preventDefault();
    console.log("sunmit::", event.detail);
        console.log(JSON.stringify(event.detail));
        const dataFields = event.detail.fields;
        if (!dataFields.Industry) {
            dataFields.Industry = "Energy";
        }
        this.template.querySelector("lightning-record-edit-form").submit(dataFields);
    
}
 
    resetHandler() {
        let inputfields = this.template.querySelectorAll("lightning-input-field");
        inputfields.forEach((currItem) => currItem.reset());
}
}