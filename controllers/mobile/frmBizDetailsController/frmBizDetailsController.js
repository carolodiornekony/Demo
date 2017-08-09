define({ 

 /**
  * @function
  *
  */
 showLoginflx: function(){
   this.view.flxLogin.isVisible=true;
 },
 onBackNav:function()
  {
     var nvf = new kony.mvc.Navigation("frmBizCardInstructions");
     nvf.navigate();
  },
  onDoneClick:function(){
    var nvf = new kony.mvc.Navigation("frmAccountCreated");
     nvf.navigate();
  }

 });