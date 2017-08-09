define({ 

 /**
  * @function
  *
  */
 showLoginflx: function(){
   this.view.flxLogin.isVisible=true;
 },
  onBackNav:function(){
    var nvf = new kony.mvc.Navigation("frmeKTPAddress");
    nvf.navigate();
  },
  onClickManualOption:function()
  {
    var nvf = new kony.mvc.Navigation("frmBizCardManual");
    nvf.navigate({"tbxVal":"","lineSkin":"lineGrey","labelskin":"lblGreyNew"});
  },
  onCaptureCam:function()
  {
    var nvf = new kony.mvc.Navigation("frmBizDetails");
    nvf.navigate();
  }

 });