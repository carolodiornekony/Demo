define({ 
 endQuestionsFormComplete:function(){
   // where to go to depends on where we've been
   
   // where are we in the process?  just made an appointment?
   // chosen all the featrues we want?
   // if we've just selected appointment...
   kony.print("***** successFormContinue ");
   var nvf = new kony.mvc.Navigation("frmSpalsh");
   nvf.navigate();
  }

 });