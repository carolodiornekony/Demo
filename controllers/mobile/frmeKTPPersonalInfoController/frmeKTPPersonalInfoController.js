define({ 
 showLoginflx: function(){
   this.view.flxLogin.isVisible=true;
 },
 onBackNav:function()
  {
    var nvf = new kony.mvc.Navigation("frmeKTPInstructions");
    nvf.navigate();
  },
   onClickNext:function(){
     var nvf = new kony.mvc.Navigation("frmeKTPAddress");
    nvf.navigate();
   }
 });