import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire, track } from 'lwc';
import ACCOUNT_OBJECT from "@salesforce/schema/Deal_Details__c";

export default class PicklistValuesOfSpecificRectypeId extends LightningElement {
    @track information;
    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    }) infomation({ data, error }) {
        if (data) {
            console.log("data", data);
        } else if (error) {
            console.log("error", error);
        }

    } 

    
    get recTypeId() {
        console.log("fetching specific RecordType")
        const rtis = this.infomation.data.recordTypeInfos;
        console.log("RecInfo", rtis);
        let recId = Object.keys(rtis).find((currItem) => rtis[currItem].name === "RT_for_LED");
        console.log("RecTypeID::", recId);

    }

}