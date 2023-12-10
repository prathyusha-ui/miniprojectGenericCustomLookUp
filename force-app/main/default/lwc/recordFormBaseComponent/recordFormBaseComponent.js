import { LightningElement, api } from 'lwc';
import NAME_FIELD from "@salesforce/schema/Account.Name";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import ACTIVE_FIELD from "@salesforce/schema/Account.Active__c";

export default class RecordFormBaseComponent extends LightningElement {
    @api recordId;
    @api objectApiName;

    fieldsList = [NAME_FIELD, RATING_FIELD, ACTIVE_FIELD];
}