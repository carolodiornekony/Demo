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
    var ntf = new kony.mvc.Navigation("frmAccountCreated");
    ntf.navigate();
  },
  onClickNext:function(){
    // show the credentials
     gCameraShow = false;   
    this.show();
  }

 });