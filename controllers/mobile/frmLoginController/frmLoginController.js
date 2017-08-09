define({ 

 /**
  * @function
  *
  */
 onNavigate:function(obj){
   if(obj == undefined || obj == null){
     
   }else{
   this.view.tbxName.text = obj.textBoxData;
   this.view.tbxPassword.text = obj.textBoxData;
   }
 },
 showPIN: function(){
    var ntf = new kony.mvc.Navigation("frmSetPIN");
    ntf.navigate({"textBoxData":""});
 },
  /**
   * @function
   *
   */
  showfrmSplash:function(){
    var ntf = new kony.mvc.Navigation("frmSpalsh");
    ntf.navigate();
}

 });