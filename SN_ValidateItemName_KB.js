/* Sagenet - Validate Item Name
*  Pop a warning if a Item number is entered on a new item form
*  that already exists for any subsidiary
* 
*  (written by Kenneth Baucum, 3/21/2014)
*/

function FieldChangedItemName(type,name){
	//alert('Running...nice deployment, Ace!');

    if(name == 'itemid'){
        var item = nlapiGetFieldValue('itemid');	
		//alert('Sweet!  name==itemid -- which is:'+item);	

        if(item != null && item != ''){
            dupfound = false;

            //var filters = new Array();	
            //filters[0] = new nlobjSearchFilter('itemid',null,'equalTo',item);
			
            //var columns = new Array();	
            //columns[0] = new nlobjSearchColumn('itemid');					
        
            //var item_record = nlapiSearchRecord('item',null,filters,columns);	

			var item_record_gs = nlapiSearchGlobal(item);	
			
            for(var s=0; item_record_gs != null && s < item_record_gs.length; s++){
                var existingItem = item_record_gs[s].getValue('name');
				//alert('existingItem: '+existingItem);
				
                if(existingItem.toLowerCase() != item.toLowerCase())
                    continue;
								
                dupfound = true;
                break;
            }
			//alert('dupfound: '+dupfound);	
				
            if(dupfound == true){                
                alert('Warning: Item Number '+item+' has been used already.\n\nIf you were not able to find it, it may be part of another subsidiary.\nJust follow the instructions on this page to correct.');
				return false;
            }
        }
    } 
	return true;
}

function CheckItemName(type,name){
	//alert('Running...nice deployment, Ace!');

	var item = nlapiGetFieldValue('itemid');	
	alert('Sweet! Item name is: '+item);	

	if(item != null && item != ''){
		dupfound = false;

		//var filters = new Array();	
		//filters[0] = new nlobjSearchFilter('itemid',null,'equalTo',item);
		
		//var columns = new Array();	
		//columns[0] = new nlobjSearchColumn('itemid');					
	
		//var item_record = nlapiSearchRecord('item',null,filters,columns);	

		var item_record_gs = nlapiSearchGlobal(item);	
		
		for(var s=0; item_record_gs != null && s < item_record_gs.length; s++){
			var existingItem = item_record_gs[s].getValue('name');
			alert('existingItem: '+existingItem);
			
			if(existingItem.toLowerCase() != item.toLowerCase())
				continue;
							
			dupfound = true;
			break;
		}
		alert('dupfound: '+dupfound);	
			
		if(dupfound == true){                
			alert('Warning: Item Number '+item+' has been used already.\n\nIf you were not able to find it, it may be part of another subsidiary.\nJust follow the instructions on this page to correct.');
			return false;
		}
	}
	return true;
}

