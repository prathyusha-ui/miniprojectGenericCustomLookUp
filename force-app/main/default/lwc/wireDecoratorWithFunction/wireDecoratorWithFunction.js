import { LightningElement, wire } from 'lwc';
import getAccRecords from "@salesforce/apex/AccountHandler.getAccRecords";

export default class WireDecoratorWithFunction extends LightningElement {
    //accinfo;
    //accError;
    @wire(getAccRecords) outFunction({ data, error }) {
        if (data) {
            //this.accinfo = data;
            //this.accError = null;
            console.log("accdata", data);
            let updatedAccRecords = data.map((currItem) => {
                let updatedObject = {};
                
                if (!currItem.hasOwnProperty("Rating")) {
                    updatedObject = { ...currItem, Rating : "warm" };
                    
                } else {
                    updatedObject = {...currItem} ; 
                }
                return updatedObject;
               
            });
           
            console.log("updatedAccRecords", updatedAccRecords);
            
        } else if (error) {
            console.log("error", error);
           // this.accError = error;
            //this.accinfo = null;
        }
        
    }
}