define({ 

 /**
  * @function
  *
  */
showAccountCreated:function(){
    var ntf = new kony.mvc.Navigation("frmAccountCreated");
 	ntf.navigate();
  },
  
  showVerificationSuccessful:function(){
    var ntf = new kony.mvc.Navigation("frmVerificationSucess");
 	ntf.navigate();
  },
 });