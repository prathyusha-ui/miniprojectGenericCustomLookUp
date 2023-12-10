@isTest
public with sharing class ContactChangeEventTriggerHandlerTest {
    @isTest
    static void validataChangeEventNotification(){
        Test.enableChangeDataCapture();

        Contact con =new Contact(FirstName='change', LastName='Event Capture', Email='test@12123.com' );
        insert con;

        test.getEventBus().deliver();

        Task[] tskList = [Select id from task WHERE Subject ='New Task Created - Kindly do the Action'];
        System.assertEquals(1, tskList.size(),'During Insertion- Change Event failed');
        
        Contact querriedContact = [SELECT id,FirstName, Lastname FROM Contact WHERE id =: con.Id];
        querriedContact.Email='456@lwc.com';
        update querriedContact;
        test.getEventBus().deliver();

        tskList = [SELECT id FROM Task WHERE Subject = 'Email address of a Contact changed - Kindly do the Action'];
        System.assertEquals(1, tskList.size(),'During Updation-Change Event failed');

        

    }
}