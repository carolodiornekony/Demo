define({ 

 /**
  * @function
  *
  */
 showSignUp2: function(){
 var ntf = new kony.mvc.Navigation("frmSignUp2");
 ntf.navigate();
 },
  /**
   * @function
   *
   */
  showBackLogin:function(){
     var ntf = new kony.mvc.Navigation("frmLogin");
 	ntf.navigate();
  },
   mapData:function(){
    this.view.Addressmap.locationData = [ 
                           {
                            lat:"29.716131",
                            lon:"-95.388718",
                            name:"TDECU",
                            desc:"TDECU",
                            image:"pin.png"
                            }
                            ];
  },

  showAccountCreated:function(){
      var ntf = new kony.mvc.Navigation("frmAccountCreated");
 	ntf.navigate();
},
    showfrmAddress:function(){

 var ntf = new kony.mvc.Navigation("frmAppointmentAddress");
 ntf.navigate({"lineSkin":"lineGrey","labelskin":"lblGreyNew"});  
}
 });