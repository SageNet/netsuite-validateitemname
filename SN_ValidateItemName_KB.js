/* Sagenet - Validate Item Name
*  Pop a warning if a Item number is entered on a new item form
*  that already exists for any subsidiary
* 
*  (written by Kenneth Baucum, 3/21/2014)
*/

function FieldChangedItemName(type,name){
    if(name == 'name'){
        var item = nlapiGetFieldValue('name');	
		
        if(item != null && item != ''){
            item_id = nlapiGetRecordId();
            dupfound = false;
						
            var filters = new Array();
            filters[0] = new nlobjSearchFilter('mainline',null,'is','T');
            filters[1] = new nlobjSearchFilter('name',null,'isnotempty',null);	
            if(item_id != null && item_id != '')
                filters[2] = new nlobjSearchFilter('internalid',null,'noneof',item_id);	
            var columns = new Array();	
            columns[0] = new nlobjSearchColumn('name');					
        
            var item_record = nlapiSearchRecord('item',null,filters,columns);	

            for(var s=0; item_record != null && s < item_record.length; s++){
                var existingItem = item_record[s].getValue('name');
                if(existingItem.toLowerCase() != item.toLowerCase())
                    continue;
								
                dupfound = true;
                break;
            }
						
            if(dupfound == true){                
                alert('Warning: Item Number '+item+' has been used already.\n\nIf you were not able to find it, it may be part of another subsidiary.\nJust follow the instructions on this page to correct.');
            }
        }
    }   					 
}

