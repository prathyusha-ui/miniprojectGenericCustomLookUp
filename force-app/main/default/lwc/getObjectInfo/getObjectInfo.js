import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class GetObjectInfo extends LightningElement {
    accInfo;
    accError;
    @wire(getObjectInfo, {
        objectApiName : ACCOUNT_OBJECT
    }) objInformation({ data, error }) {
        if (data) {
            console.log("data", data);
            this.accInfo = data;
            this.accError = null;
        } else if (error) {
            console.log("error", error);
            this.accError = error;
            this.accInfo = null;
        }
    }
}