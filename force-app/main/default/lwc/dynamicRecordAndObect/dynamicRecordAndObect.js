import { LightningElement, api} from 'lwc';

export default class DynamicRecordAndObect extends LightningElement {
    @api recordId;
    @api objectApiName;
}