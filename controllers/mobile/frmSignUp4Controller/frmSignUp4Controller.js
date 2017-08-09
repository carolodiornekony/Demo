define({ 

 /**
  * @function
  *
  */
   showBackSignUp3:function(){
     var ntf = new kony.mvc.Navigation("frmSignUp3");
 	ntf.navigate();
  },
  onClickNextOne:function(){
    gCameraShow = false;
    var ntf = new kony.mvc.Navigation("frmSignUp4A");
    ntf.navigate();
  },
  onClickNext:function(){
    // show the credentials
     gCameraShow = false;   
    this.show();
  }

 });