define({ 

 /**
  * @function
  *
  */
 setCheckBoxHeight:function()
  {
    if(kony.os.deviceInfo().name == "android"){
       this.view.CheckBoxGroup0fda1949ddf5945.height = "7%";
       this.view.CheckBoxGroup0fda1949ddf5945.top = "2%";
        this.view.CopyflxLinkedIn0a763bb9a77294d.top = "0%";
    }
    else
      {
 
      }
  },
 showLoginflx: function(){
   this.view.flxLogin.isVisible=true;
 },
  onBackNav:function()
  {
    var nvf = new kony.mvc.Navigation("frmeKTPPersonalInfo");
    nvf.navigate();
  },
   onClickNext:function(){
     var nvf = new kony.mvc.Navigation("frmBizCardInstructions");
    nvf.navigate();
   }

 });