trigger ContactChangeEventTrigger on ContactChangeEvent (after insert) {
    if(Trigger.isAfter && Trigger.isInsert){
        ContactChangeEventTriggerHandler.afterInsert(Trigger.New);
    }

}