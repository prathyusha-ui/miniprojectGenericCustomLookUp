public with sharing class AccountHandler {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccRecords(){
        return [SELECT Id,Name,Industry,Rating FROM Account WITH USER_MODE];
       
    }

    
}