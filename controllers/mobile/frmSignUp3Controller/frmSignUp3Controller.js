define({ 
showBackSignUp2:function(){
     var ntf = new kony.mvc.Navigation("frmSignUp2");
 	ntf.navigate();
  },
showSignUP4:function(showCamera){
     gCameraOn = showCamera;
  var ntf;
  if(gCameraOn)
     ntf = new kony.mvc.Navigation("frmSignUp4");  
  else
    ntf = new kony.mvc.Navigation("frmSignUp4A");
  ntf.navigate();
}
 });