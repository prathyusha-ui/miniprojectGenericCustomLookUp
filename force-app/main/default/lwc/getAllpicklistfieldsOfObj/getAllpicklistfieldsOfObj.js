import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class GetAllpicklistfieldsOfObj extends LightningElement {
    
    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    }) accInformation;
        
    
    @wire(getPicklistValuesByRecordType, {
        recordTypeId: "$accInformation.data.defaultRecordTypeId",
        objectApiName: ACCOUNT_OBJECT
        
    })
    feilds;
     /*feilds({ data, error }) {
        if (data) {
            console.log("all PickList fields::", data);
            
        } else if (error) {
            console.log("error", error);
        }
        
    }*/
}