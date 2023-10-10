import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api greeting;
    @api disGreeting;
    @api user;
    @api isUserAvailable = false;//boolean variable
}