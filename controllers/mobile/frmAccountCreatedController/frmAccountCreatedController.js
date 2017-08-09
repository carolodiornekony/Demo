define({ 

 /**
  * @function
  *
  */
 showMapAddress: function(){
    var ntf = new kony.mvc.Navigation("frmAppointmentMap");
 	ntf.navigate();
 },
  
   showVideoPage: function(){
    var ntf = new kony.mvc.Navigation("frmVideoChat");
 	ntf.navigate();
 }

 });