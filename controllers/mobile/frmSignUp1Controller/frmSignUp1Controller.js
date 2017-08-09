define({ 
  onNavigate:function(obj)
  {
    if(obj == undefined || obj == null){
      
    }else{
      this.view.tbxName.text = obj.textBoxData;
      this.view.tbxDL = obj.textBoxData;
      this.view.tbxAddress.text = obj.textBoxData;
     //this.view.tbxPassword.text = obj.textBoxData;
      //this.view.tbxEmail.text = obj.textBoxData;
    }
  },
 /**
  * @function
  *
  */
 showDLCamera: function(){
 var ntf = new kony.mvc.Navigation("frmDrvLicenseCamera");
 ntf.navigate({"tbxVal":"","lineSkin":"lineGrey","labelskin":"lblGreyNew"});  
 },

  showSignUp2: function(){
 var ntf = new kony.mvc.Navigation("frmSignUp2");
 ntf.navigate({"tbxVal":"","lineSkin":"lineGrey","labelskin":"lblGreyNew"});  
 },
  /**
   * @function
   *
   */
  showBackLogin:function(){
     var ntf = new kony.mvc.Navigation("frmSpalsh");
 	ntf.navigate();
  }
 });