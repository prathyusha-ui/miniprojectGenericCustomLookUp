import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";

export default class NavigationDemo extends NavigationMixin(LightningElement) {
    navigateToHomeClickHandler() {
        let pageRef = {
            "type": "standard__namedPage",
            "attributes": {
                "pageName": "home"
            }
        };
        this[NavigationMixin.Navigate](pageRef);
    }

    createPageHandler() {
        let pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "new"
            }
        };
        this[NavigationMixin.Navigate](pageRef);  
    }

    EditClickHandler() {
        let pageRef = {
            type: "standard__recordPage",
            attributes: {
                recordId: "0015g000015atvFAAQ",
                objectApiName: "Account",
                actionName: "edit"
            }
        };
        this[NavigationMixin.Navigate](pageRef);     
        
    }
    listViewHandler() {
        // Navigates to account list with the filter set to RecentlyViewedAccounts.
        let pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "list"
            },
            state: {
                filterName: 'PlatinumandGoldSLACustomers'
            }
        };
        this[NavigationMixin.Navigate](pageRef);    
    }

    createNewDefaultValueAccHandler() {
        const defaultValues = encodeDefaultFieldValues({
            Rating: "Hot",
            Industry: "Energy"
        });
        let pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "new"
            },
            state: {
                defaultFieldValues: defaultValues
             
            }
        };
        this[NavigationMixin.Navigate](pageRef);    
    }
}
    