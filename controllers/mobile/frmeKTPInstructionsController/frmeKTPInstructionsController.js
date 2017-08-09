define({ 
 showLoginflx: function(){
   this.view.flxLogin.isVisible=true;
 },
 onClickManualOption:function()
  {
    var nvf = new kony.mvc.Navigation("frmeKTPManual");
    nvf.navigate({"tbxVal":"","lineSkin":"lineGrey","labelskin":"lblGreyNew"});
  },
 onBackNav:function(){
   var nvf = new kony.mvc.Navigation("frmSignUp3");
    nvf.navigate();
 },
  onCaptureCam:function()
  {
    try{
   var nvf = new kony.mvc.Navigation("frmeKTPPersonalInfo");
    nvf.navigate();
    }
    catch(err)
      {
        kony.print(err);
      }
  }
   });