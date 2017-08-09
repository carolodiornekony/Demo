define({ 
OnDoneVerification:function(){
    var ntf = new kony.mvc.Navigation("frmSuccess2");
 	ntf.navigate({"message":"Your appointment has been confirmed."});
},
 setCurrentDate : function(){
      var date1 = new Date();
     this.view.Calendar0aacc098676af4a.dateComponents = [date1.getDate(),date1.getMonth()+1,date1.getFullYear()];
  },
 showSignUp2: function(){
 var ntf = new kony.mvc.Navigation("frmSignUp2");
 ntf.navigate();
 },
 
  showBackLogin:function(){
     var ntf = new kony.mvc.Navigation("frmLogin");
 	ntf.navigate();
  },
     onNavigate:function(obj){
    if(obj == null || obj == undefined){}
     else{
           this.view.flxLine1.skin = obj.lineSkin;
        	this.view.flxLine2.skin = obj.lineSkin;
            this.view.lblTimeH.skin = obj.labelskin;
           this.view.lblDay.skin = obj.labelskin;
       		
     }
 },
  
  onStartCal:function(){
   this.view.flxLine1.skin = "lineGreen";
   this.view.lblDay.skin = "sknlblGreen";
 },
 onEndCal:function(){
   this.view.flxLine1.skin = "lineGrey";
   this.view.lblDay.skin = "lblGreyNew";
 }, 
    onStartTime:function(){
   this.view.flxLine2.skin = "lineGreen";
   this.view.lblTimeH.skin = "sknlblGreen";
 },
 onEndTime:function(){
   this.view.flxLine2.skin = "lineGrey";
   this.view.lblTimeH.skin = "lblGreyNew";
 }, 
  spinnerAnimation:function (){
  this.view.flxTrans.isVisible=true;
  this.view["flxSpinner"].animate(
        kony.ui.createAnimation({"100":{"stepConfig":{"timingFunction":kony.anim.EASE},"bottom":"0%"}}),
        {"delay":0,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
         {"animationEnd" : function(){
  }});
  },

   spinnerReverseAnimation:function (){
     var self = this;
    this.view["flxSpinner"].animate(
        kony.ui.createAnimation({"100":{"stepConfig":{"timingFunction":kony.anim.EASE},"bottom":"-50%"}}),
        {"delay":0,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.3},
         {"animationEnd" : function(){
           self.view.flxTrans.isVisible=false;
           self.onEndTime();
           
  }});
  },
  
  setTimeValue:function(){
      hours = this.view.pckTime.selectedKeyValues[1][1];
      mins=this.view.pckTime.selectedKeyValues[2][1];
     meridian=this.view.pckTime.selectedKeyValues[3][1];
     this.view.lblTime.text=hours+":"+mins +" "+meridian;
 	 this.spinnerReverseAnimation();
},

  	mapData123:function(){
    this.view.Addressmap123.locationData = [ 
                           {
                         lat:"29.716131",
                            lon:"-95.388718",
                            name:"TDECU",
                            desc:"TDECU",
                            image:"pin.png"
                            }
                            ];
  },
  
  /**
   * @function
   *
   */
  showAppoinmentMap:function(){
     var ntf = new kony.mvc.Navigation("frmAppointmentMap");
 	ntf.navigate();
  },
  
    showSplashPage:function(){
     var ntf = new kony.mvc.Navigation("frmSpalsh");
 	ntf.navigate();
  }
  
 });