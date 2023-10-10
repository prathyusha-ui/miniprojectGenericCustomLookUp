import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberOne = "";
    numberTwo = "";
    result = 0;
    changeHandler(event){
        let inputName = event.target.name;
        console.log('inputName::',inputName);
        
        if(inputName === 'number1'){
            this.numberOne = event.target.value;
        }else if(inputName === 'number2'){
            this.numberTwo = event.target.value;
        }
        /*console.log('numberOne::',typeof numberOne);
        console.log('numberOne::', this.numberOne);
        console.log('numberOne::',typeof numberTwo);
        console.log('numberOne::', this.numberTwo);*/
    }
    clickHandler(event){
        let operationName = event.target.name;
        console.log('OP::',operationName);
        if(operationName === 'addition'){
            this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);
        }else if(operationName === 'subtraction'){
            this.result = this.numberOne - this.numberTwo;
        }else if(operationName === 'multiplication'){
            this.result = this.numberOne * this.numberTwo;
        }else if(operationName === 'division'){
            this.result = this.numberOne / this.numberTwo;
        }
        
    }
}