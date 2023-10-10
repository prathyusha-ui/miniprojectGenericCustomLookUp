import { LightningElement, wire } from 'lwc';
import { getFieldValue, getRecords } from "lightning/uiRecordApi";
import ACCOUNT_FIELD_NAME from "@salesforce/schema/Account.Name"
import ACCOUNT_FIELD_RATING from "@salesforce/schema/Account.Rating";
import CONTACT_NAME from "@salesforce/schema/Contact.Name";

export default class GetRecordsDemo extends LightningElement {
    outputs;
    errors;
    /*accName;
    accName2;
    accRating;
    conName;*/
    @wire(getRecords, {
        records: [{
            recordIds: ["0015g00001BDZ9uAAH","0015g00001GAf7cAAD"],
            fields: [ACCOUNT_FIELD_RATING,ACCOUNT_FIELD_NAME]
         },
         {
             recordIds: ["0035g00000mxYGSAA2"],
             fields : [CONTACT_NAME]
         }
        ]
        
    })e2({ data, error }){
        if(data){
            console.log("data", data);
           /* this.accName = data.results[0].result.fields.Name.value;
            this.accRating = data.results[0].result.fields.Rating.value;
            this.accName2 = data.results[1].result.fields.Name.value;
            this.conName = getFieldValue(data.results[2].result, CONTACT_NAME);*/
            this.outputs =data;
            this.errors = null;

        } else if(error){
            console.log("error", error);
            this.errors = error;
            this.outputs = null;
        }
    }
}