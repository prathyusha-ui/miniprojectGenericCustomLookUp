import { LightningElement } from 'lwc';
export default class ToDoManager extends LightningElement {
    taskname ="";
    taskdate = null ;
    ongoingtask=[];
    completedtask = [];
    
    changeHandler(event){
        let {name, value} = event.target;
        if(name === "taskname"){
            this.taskname = value;
        }
        else if(name === "taskdate"){
            this.taskdate = value;
        }
    }

    resetHandler(){
        this.taskname = "";
        this.taskdate = null;
    }
    
    addTaskHandler1(){
        //if task end date is missing, then populate todays date as end date
        if(!this.taskdate){
            this.taskdate = new Date().toISOString().slice(0,10);
        }
                
        if(this.validateTask()){
            //adding task details
           this.ongoingtask = [ ...this.ongoingtask,{
            taskname : this.taskname,
            taskdate : this.taskdate
             }];
            
            this.resetHandler();   
            console.log("ongoing task list::",this.ongoingtask)
            let sortedArray = this.sortTask(this.ongoingtask);//to sorting
            this.ongoingtask = [...sortedArray];//overwrite incompletetask
            console.log("incompletetask",this.ongoingtask);
           
        }
    }
        
    

    validateTask(){
        let isValid = true;
        let element = this.template.querySelector(".taskname");
        //condition 1 : check if taskname is empty ,if its empty set isValid false
        if(!this.taskname){
            isValid = false;
        }else{
           
            //if taskname is there check for duplicate
            //if find method, will find an item in array it returns first matching entry if not found it will return undefined 
            //find  callback function 3 parameters(currItem,index,array)
            let taskItem = this.ongoingtask.find((currItem) => currItem.taskname === this.taskname && currItem.taskdate === this.taskdate);
           
            if(taskItem){
                isValid = false;
                element.setCustomValidity("Task is Already Available");
            }
           
        }
        if(isValid){
    
            element.setCustomValidity("");
        }
        element.reportValidity();//To display error msg on UI
        return isValid;
       
    }

    sortTask(inputArr){
        console.log("performing sorting",this.inputArr);
        let sortedArray = inputArr.sort((a,b) => {
            const dateA = new Date(a.taskdate);
            const dateB = new Date(b.taskdate);
            return dateA - dateB;
        });
        console.log("DateA",dateA);
        console.log("dateB",dateB);
        console.log("end of sorting",this.sortedArray);
        return sortedArray;
    }

    
   
}