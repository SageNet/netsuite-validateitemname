/* Sagenet - Validate Item Name
*  Pop a warning if a Item number is entered on a new item form
*  that already exists for any subsidiary
* 
*  (written by Kenneth Baucum, 3/21/2014)
*/

function FieldChangedItemName(type,name){
	//alert('Running...nice deployment, Ace!');

    if(name == 'name'){
        var item = nlapiGetFieldValue('name');	
		alert('Sweet!  name==name -- which is:'&item);	

        if(item != null && item != ''){
            item_id = nlapiGetRecordId();
            dupfound = false;
			alert('Item_id: '&item_id);

            var filters = new Array();	
            if(item_id != null && item_id != '')
                filters[0] = new nlobjSearchFilter('name',null,'noneof',name);	
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
			alert('dupfound: '&dupfound);	
				
            if(dupfound == true){                
                alert('Warning: Item Number '+item+' has been used already.\n\nIf you were not able to find it, it may be part of another subsidiary.\nJust follow the instructions on this page to correct.');
            }
        }
    }   					 
}

