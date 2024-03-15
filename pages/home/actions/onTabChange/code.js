switch({{ui.tbs_View_Create_Update.selectedIndex}}) {
  case 0:
    {{actions.findIndividualAccountServices.trigger({type: 'table'})}}
    break;
  case 1:
{{ui.tgs_Services.setValue("")}}
    break;
  case 2:
{{ui.tgs_Services.setValue("")}}
    {{ui.slct_Account.reset()}}
    break;
  default:
}