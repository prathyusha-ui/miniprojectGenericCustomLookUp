import { LightningElement, api } from 'lwc';

export default class FullNameUsingGetterNSetter extends LightningElement {
   firstName = "";
   lastName = "";
   fullName = "";
   
   
    changeHandler(event){
        let inputName = event.target.name;
        if(inputName === "FirstName"){
            this.firstName = event.target.value;
        }else if(inputName === "LastName"){
            this.lastName = event.target.value;
        }
        this.fullName = this.firstName+" "+this.lastName;
    }
        
     
     get fullNamewithCaps(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();

      }
    
}