var tbl = ui.tbl_refRoles.value
 var updatedtbl = []
 
 tbl.forEach(item =>{	item.Role = ui.slct_bulkRoles.value
                    updatedtbl.push(item)
                    } ) 
console.log(updatedtbl)
ui.tbl_refRoles.setData(updatedtbl)