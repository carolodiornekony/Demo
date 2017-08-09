define({ 
  onNavigate:function(obj){
     if(obj == null || obj == undefined){}
     else{
   this.view.tbxeKTP.text = obj.tbxVal;
   this.view.CopyflxLine0g6c884a7ce0848.skin = obj.lineSkin;
    this.view.CopylblName0a43ab54ae9a94b.skin = obj.labelskin;
     }
 },
 showLoginflx: function(){
   this.view.flxLogin.isVisible=true;
 },
  onBackNav:function(){
   var nvf = new kony.mvc.Navigation("frmBizCardInstructions");
   nvf.navigate();
 },
  onStartEditingManual:function(){
   this.view.CopyflxLine0g6c884a7ce0848.skin = "lineGreen";
   this.view.CopylblName0a43ab54ae9a94b.skin = "sknlblGreen";
 },
 onEndEditingManual:function(){
   this.view.CopyflxLine0g6c884a7ce0848.skin = "lineGrey";
   this.view.CopylblName0a43ab54ae9a94b.skin = "lblGreyNew";
 }, 
 onDoneClick:function()
  {
    if(this.view.tbxeKTP.text == null || this.view.tbxeKTP.text == ""){
      kony.ui.Alert({
              message: "Enter your business card number.",
              alertType: constants.ALERT_TYPE_INFO,
              alertTitle: "Invalid entry data",
              yesLabel: "Ok",
              noLabel: "No",
              alertHandler: null
              }, {});
    }
    else if(this.view.tbxeKTP.text.length<16){
     kony.ui.Alert({
        message: "Business card number should be of 16-digits.",
        alertType: constants.ALERT_TYPE_INFO,
        alertTitle: "Invalid entry Data",
        yesLabel: "Ok",
        noLabel: "No",
        alertHandler: null
    	}, {});
            }
      else{
        var nvf = new kony.mvc.Navigation("frmBizDetails");
        nvf.navigate();
      }
  }
 });