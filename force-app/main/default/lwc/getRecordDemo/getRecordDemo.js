import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';

export default class GetRecordDemo extends LightningElement {
    @api recordId;
    accName;
    accAnnualRevenue;
    accDisplayValue;
    @wire(getRecord, {
        recordId: "$recordId",
        fields: [ACCOUNT_NAME, ACCOUNT_REVENUE]
    })
    outputFu({ data, error }) {
        if (data) {
            console.log("data", data);
            //this.accName = data.fields.Name.value;
            //this.accAnnualRevenue = data.fields.AnnualRevenue.value
            this.accName = getFieldValue(data, ACCOUNT_NAME);//getFieldValue is available for all data types..we don't have displayValue
            this.accAnnualRevenue = getFieldValue(data, ACCOUNT_REVENUE);//output:345678 ,we do have displayValue
            this.accDisplayValue = getFieldDisplayValue(data, ACCOUNT_REVENUE)//output:$345,678
            
        } else if (error) {
            console.log("error", error);
        }
    }
}