define({ 

 showLoginflx: function(){
   alert("This feature not currently setup");
   //var ntf = new kony.mvc.Navigation("frmLogin");
    //ntf.navigate({"textBoxData":""});
 },
  
  showSignUp1:function(){
     var ntf = new kony.mvc.Navigation("frmSignUp1");
     ntf.navigate({"textBoxData":""});
},

disappearLogin:function(){
  this.view.flxMain.opacity=0;
}, 

 showLoginPannel:function(){
   
   this.view["flxMain"].animate(
        kony.ui.createAnimation({
            "100": {
                "opacity":0.9,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_OUT
                }
            },
          "50": {
               "opacity":0.5,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_OUT
                }
            }
        }), {
            "delay": 0.9,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {
	   }})
       
 } 
    
   
 });