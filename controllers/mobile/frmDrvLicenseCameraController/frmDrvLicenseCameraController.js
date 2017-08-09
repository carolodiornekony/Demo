define({ 

 /**
  * @function
  *
  */
  showBackSignUp1:function(){
     var ntf = new kony.mvc.Navigation("frmSignUp1");
 	ntf.navigate();
  },
  showSignUp2: function(){
 var ntf = new kony.mvc.Navigation("frmSignUp2");
 ntf.navigate({"tbxVal":"","lineSkin":"lineGrey","labelskin":"lblGreyNew"});  
 },
showLoginflx: function(){
   this.view.flxLogin.isVisible=true;
 }
  
 });