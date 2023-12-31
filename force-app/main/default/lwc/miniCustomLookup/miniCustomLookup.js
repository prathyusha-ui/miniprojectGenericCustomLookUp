import { LightningElement, wire, api } from 'lwc';
import searchRecords from "@salesforce/apex/CustomLookupController.searchRecords";
const DELAY = 300;

export default class MiniCustomLookup extends LightningElement {
    //mini project Custom LookUp
    @api apiName = "Account";
    searchValue;
    @api objectLabel = "Account";
    @api iconName = "standard:account";
    delayTimeout;
    selectedRecord = {
        selectdId: "",
        selectedName: ""
    };
    displayOptions = false;

    get isRecordSelected() {
        console.log("isRecordSelected",this.selectedRecord.selectdId =="" ? false : true);
        return this.selectedRecord.selectdId == "" ? false : true;
    }
    @wire(searchRecords, {objApiName : "$apiName", searchKey :"$searchValue" })
    outputs;/*outputsFunction(data,error){
        if(data){
            console.log("Data present");
            console.log("data",data);
        }else if(error){
            console.log("error",error);
        }

    }*///To check retreving data from apex class
    /*get showOutput() {
        return this.outputs.data;
    }*/

    changeHandler(event) {
        window.clearTimeout(this.delayTimeout);
        let enteredValue = event.target.value;
        //debouncing-- do not update the reactive property as long as this function is being called within a delay
        this.delayTimeout = setTimeout(() => {
            this.searchValue = enteredValue;
            this.displayOptions = true;
        }, DELAY);
    }

    clickHandler(event) {
        let selectedId = event.currentTarget.dataset.item;
        console.log("SelectedId", selectedId);
        let outputRecord = this.outputs.data.find((currItem) => 
            currItem.Id == selectedId
        );
        this.selectedRecord = {
            selectdId: outputRecord.Id,
            selectedName: outputRecord.Name
        
        };
        this.displayOptions = false;
        
    }

    removelHandler(event) {
        this.selectedRecord = {
            selectdId: "",
            selectedName: ""
        };
        this.displayOptions = false;
        
    }


}
