public with sharing class ContactChangeEventTriggerHandler {
    public static void afterInsert(List<ContactChangeEvent> contactChangeEventList){
        List<Task> taskList = new List<Task>();
        for(ContactChangeEvent event : contactChangeEventList){
            system.debug('Event==>'+ event);
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            system.debug('header==>'+ header);

            if(header.changeType == 'CREATE'){
                //Create task
                for(string recordId : header.recordids){
                    Task tsk = new Task();
                    tsk.Subject = 'New Task Created - Kindly do the Action';
                    tsk.OwnerId = header.commituser;
                    tsk.WhoId = recordId;
                    taskList.add(tsk);
                }
            }else if(header.changeType == 'UPDATE'){
                for(string field : header.changedfields){
                    if(field == 'Email'){
                        //Create task
                      for(string recordId : header.recordids){
                        Task tsk = new Task();
                         tsk.Subject = 'Email address of a Contact changed - Kindly do the Action';
                        tsk.OwnerId = header.commituser;
                        tsk.WhoId = recordId;
                        taskList.add(tsk);
                        }
                    }
                }
            }
        }
        if(taskList.size()>0){
            try {
                insert taskList;
            } catch (Exception ex) {
                ex.getMessage();
                
            }
        }
    }
}