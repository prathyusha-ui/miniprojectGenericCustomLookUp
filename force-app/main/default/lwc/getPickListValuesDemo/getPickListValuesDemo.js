import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";

export default class GetPickListValuesDemo extends LightningElement {
    value;
    // accIndusttryPickListInfo;
    //accError;
    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    }) accInfo;

    
    @wire(getPicklistValues, {
        recordTypeId: "$accInfo.data.defaultRecordTypeId",
        fieldApiName: ACCOUNT_INDUSTRY
    }) recordType;
    /*recordType({ data, error }) {
        if (data) {
            console.log("data", data);
            this.accIndusttryPickListInfo = data;
            this.accError = null;
        }
        else if (error) {
            console.log("error", error);
            this.accError = error;
            this.accIndusttryPickListInfo = null;
        }
    }*/
    handleChange(event) {
        this.value = event.target.value;
    }
}