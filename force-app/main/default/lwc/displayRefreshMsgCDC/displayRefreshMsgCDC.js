import { LightningElement, api } from 'lwc';
import {
    subscribe,
    unsubscribe,
    onError,
    setDebugFlag,
    isEmpEnabled,
} from 'lightning/empApi';

import {notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';
export default class DisplayRefreshMsgCDC extends LightningElement {
    @api channelName = "";
    @api recordId;
    isDisplyMsg = false;

    subscription = {};

      // Initializes the component
    connectedCallback() {
        this.handleSubscribe();
        // Register error listener
        this.registerErrorListener();
      }
    
    // Handles subscribe button click
    handleSubscribe() {
        // Callback invoked whenever a new event message is received
        const messageCallback = (response) => {
            console.log('New message received: ', JSON.stringify(response));
            // Response contains the payload of the new message received
            this.handleChangeEventResponse(response);
        };

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, messageCallback).then((response) => {
            // Response contains the subscription information on subscribe call
            console.log(
                'Subscription request sent to: ',
                JSON.stringify(response.channel)
            );
            this.subscription = response;
            
        });
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
     }
    
    handleUnsubscribe() {
        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, (response) => {
            console.log('unsubscribe() response: ', JSON.stringify(response));
            // Response is true for successful unsubscribe
        });
    }

    registerErrorListener() {
        // Invoke onError empApi method
        onError((error) => {
            console.log('Received error from server: ', JSON.stringify(error));
            // Error contains the server-side error
        });
    }

    handleChangeEventResponse(response) {
        console.log("CDC Event Response::", response);
        if (response.hasOwnProperty("data")) {
            let jsonobj = response.data;
            console.log("jsonobj::",jsonobj);
            if (jsonobj.hasOwnProperty("payload")) {
                let payLoad = response.data.payload;
                console.log("payLoad::", payLoad);
                const isRecordFound = response.data.payload.ChangeEventHeader.recordIds
                .find((currItem) => currItem === this.recordId); 
                console.log("isRecordFound::", isRecordFound);
             
                if(isRecordFound){
                    this.isDisplyMsg = true;
                    console.log("isDisplyMsg", this.isDisplyMsg);
                }
            }
        }
        
    }
    async refreshPage() {
         // Notify LDS that you've changed the record outside its mechanisms
    // Await the Promise object returned by notifyRecordUpdateAvailable()
        await notifyRecordUpdateAvailable([{ recordId: this.recordId }]);
        this.isDisplyMsg = false;
    }

}