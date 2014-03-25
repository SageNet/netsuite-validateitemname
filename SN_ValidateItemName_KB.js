/* Sagenet - Validate Item Name
*  Pop a warning if a Item number is entered on a new item form
*  that already exists for any subsidiary
* 
*  (written by Kenneth Baucum, 3/21/2014)
*/
function FieldChangedItemName(type,name){
    if(name == 'itemid'){
        var item = nlapiGetFieldValue('itemid');		
        if(item != null && item != ''){
            dupfound = false;
			var item_record_gs = nlapiSearchGlobal(item);	
            for(var s=0; item_record_gs != null && s < item_record_gs.length; s++){
                var existingItem = item_record_gs[s].getValue('name');
                if(existingItem.toLowerCase() != item.toLowerCase())
                    continue;
                dupfound = true;
                break;
            }
            if(dupfound == true){
				
				// uncomment this block to alert the user and fail the item name change.
                alert('Warning: Item Number '+item+' has been used already.\n\nIf you were not able to find it, it may be part of another subsidiary.\nJust follow the instructions on this page to correct.');
				return false;
				
				
				/*
				// Uncomment this block to expose code to auto-fix the item names and such
				switch (nlapiGetSubsidiary()) {
					case 1:
						// WTI
						nlapiSetFieldText('mpn',item)
						nlapiSetFieldText('displayname',item)
						nlapiSetFieldText('itemid',item+' (WTI)')
						alert('Warning: Item Number '+item+' has been used already.\n\nBut don\'t worry -- we fixed it for you.');
						return true;
						break;
					case 2:
						// SN
						nlapiSetFieldText('mpn',item)
						nlapiSetFieldText('displayname',item)
						nlapiSetFieldText('itemid',item+' (SN)')
						alert('Warning: Item Number '+item+' has been used already.\n\nBut don\'t worry -- we fixed it for you.');
						return true;
						break;
					case 3:
						// TT
						nlapiSetFieldText('mpn',item)
						nlapiSetFieldText('displayname',item)
						nlapiSetFieldText('itemid',item+' (TT)')
						alert('Warning: Item Number '+item+' has been used already.\n\nBut don\'t worry -- we fixed it for you.');
						return true;
						break;
					case 4:
						// STL
						nlapiSetFieldText('mpn',item)
						nlapiSetFieldText('displayname',item)
						nlapiSetFieldText('itemid',item+' (STL)')
						alert('Warning: Item Number '+item+' has been used already.\n\nBut don\'t worry -- we fixed it for you.');
						return true;
						break;
					case 5:
						// AP
						nlapiSetFieldText('mpn',item)
						nlapiSetFieldText('displayname',item)
						nlapiSetFieldText('itemid',item+' (AP)')
						alert('Warning: Item Number '+item+' has been used already.\n\nBut don\'t worry -- we fixed it for you.');
						return true;
						break;
					default:
						alert('Warning: Item Number '+item+' has been used already.\n\nIf you were not able to find it, it may be part of another subsidiary.\nJust follow the instructions on this page to correct.');
						return false;
						break;
				}
				*/
            }
        }
    } 
	return true;
}