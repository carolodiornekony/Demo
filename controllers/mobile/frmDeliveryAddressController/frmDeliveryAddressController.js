define({ 

 /**
  * @function
  *
  */
showVerificationSuccessPage:function(){
     var ntf = new kony.mvc.Navigation("frmVerificationSuccessful");
 	ntf.navigate();
  },

OnDoneVerification:function(){
    var ntf = new kony.mvc.Navigation("frmSuccess2");
 	ntf.navigate({"message":"Your products will be delivered to mentioned address."});
},
  
  changeDeliveryAddress:function(){
    if(this.view.btnHome.skin=="btnCheck"){
      this.view.btnOffice.skin="btnCheck";
      this.view.btnOffice.focusSkin="btnCheck";
      this.view.btnHome.skin="btnUncheck";
      this.view.btnHome.focusSkin="btnUncheck";
    }
    else{
      this.view.btnOffice.skin="btnUncheck";
      this.view.btnOffice.focusSkin="btnUncheck";
      this.view.btnHome.skin="btnCheck";
      this.view.btnHome.focusSkin="btnCheck";
    }
  }
 });
