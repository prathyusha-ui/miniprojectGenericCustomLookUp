import { LightningElement, wire } from 'lwc';
import getAccRecords from '@salesforce/apex/AccountHandler.getAccRecords';
const columns = [
    { label: "Account Name", fieldName: "Name" },
    { label: "Account Industry", fieldName: "Industry"},
    { label: "Account Rating", fieldName: "Rating"},
    
];


export default class WireDecoratorProperty extends LightningElement {
    columns = columns;
    @wire(getAccRecords)
    accRecords;
    /*accRecords({ data, error }) {
        if (data) {
            console.log("data", data);
        } else if (error) {
            console.log("error", error);
        }
    }*/

}