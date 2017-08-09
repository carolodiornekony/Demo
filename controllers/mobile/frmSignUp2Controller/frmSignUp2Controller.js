define({ 
 /**
  * @function
  *
  */
 showSignUp3: function(){
   if(this.view.tbxMobileNumber.text === null || this.view.tbxMobileNumber.text == ""){
     kony.ui.Alert({
              message: "Enter your mobile number.",
              alertType: constants.ALERT_TYPE_INFO,
              alertTitle: "Invalid Data",
              yesLabel: "Ok",
              noLabel: "No",
              alertHandler: null
              }, {});
   }
    else if(this.view.tbxMobileNumber.text.length <10){
             kony.ui.Alert({
              message: "Mobile number should be of 10-digits,11-digits or 12-digits.",
              alertType: constants.ALERT_TYPE_INFO,
              alertTitle: "Invalid Data",
              yesLabel: "Ok",
              noLabel: "No",
              alertHandler: null
              }, {});
     }
   else{
  			var ntf = new kony.mvc.Navigation("frmSignUp3");
 			ntf.navigate();
   }
 },
   showBackSignUp1:function(){
     var ntf = new kony.mvc.Navigation("frmSignUp1");
 	ntf.navigate();
  },
   onNavigate:function(obj){
    if(obj == null || obj == undefined){}
     else{
           this.view.tbxMobileNumber.text = obj.tbxVal;
           this.view.tbxPassword.text = obj.textBoxData;
           this.view.tbxEmail.text = obj.textBoxData;
          this.view.CopyflxLine0g6c884a7ce0848.skin = obj.lineSkin;
            this.view.CopylblName0a43ab54ae9a94b.skin = obj.labelskin;
     }
 },
 onStartEditingManual:function(){
   this.view.CopyflxLine0g6c884a7ce0848.skin = "lineGreen";
   this.view.CopylblName0a43ab54ae9a94b.skin = "sknlblGreen";
 },
 onEndEditingManual:function(){
   this.view.CopyflxLine0g6c884a7ce0848.skin = "lineGrey";
   this.view.CopylblName0a43ab54ae9a94b.skin = "lblGreyNew";
 }, 
 });