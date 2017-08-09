define({ 
// ease:kony.anim.EASE, // [.25,.1,.25,1]
// linear : kony.anim.LINEAR, // [0,0,1,1]
// easeIn : kony.anim.EASIN_IN, // [.42,0,1,1]
// easeOut	: kony.anim.EASIN_OUT, // [0,0,.58,1]
// easeInOut: kony.anim.EASIN_IN_OUT, // [.42,0,.58,1]
// forwards:kony.anim.FILL_MODE_FORWARDS,
 //duration :0.3,
/**
 * @function
 *
 */
onNavigate:function(obj){
  this.view.lblMessage.text = obj.message;
},
successFormPreShow:function(){
  	this.view.flxSuccessMessage.opacity = 0;
 	this.view.successImage.opacity = 0;
},

/**
 * @function
 *
 */
 successFormPostShow:function(){
   var self = this;
  	var transformSuccess1 = kony.ui.makeAffineTransform();
  	transformSuccess1.scale(0.6,0.6);
  	var transformSuccess2 = kony.ui.makeAffineTransform();
  	transformSuccess2.scale(0.75,0.75);
  	var transformSuccess3 = kony.ui.makeAffineTransform();
  	transformSuccess3.scale(1.1,1.1);
  	var transformSuccess4 = kony.ui.makeAffineTransform();
  	transformSuccess4.scale(1.0,1.0);
    	this.view.successIcon.animate(
        kony.ui.createAnimation({
          	"0":  {"transform": transformSuccess1 ,"stepConfig":{"timingFunction": kony.anim.EASIN_IN}},
          	"15":{"transform": transformSuccess2 ,"stepConfig":{"timingFunction": kony.anim.EASIN_IN}},
          	"30":{"transform": transformSuccess1 ,"stepConfig":{"timingFunction": kony.anim.EASIN_IN}},
          	"45":{"transform": transformSuccess2 ,"stepConfig":{"timingFunction": kony.anim.EASIN_IN}},
          	"60":{"transform": transformSuccess1 ,"stepConfig":{"timingFunction": kony.anim.EASIN_IN}},
          	"80":{"transform": transformSuccess3 ,"stepConfig":{"timingFunction": kony.anim.EASIN_IN}},
          	"100":{"transform": transformSuccess4 ,"stepConfig":{"timingFunction": kony.anim.EASIN_IN}}}),
        {"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 4.0, "delay": 0},
        {"animationStart": function () {},
          "animationEnd": function () {}}
    );
  
  	this.view.successImage.animate(
        kony.ui.createAnimation({
           	"0":{"transform": transformSuccess1 , "opacity": 0, "stepConfig":{"timingFunction": kony.anim.EASIN_IN}},
          	"60":{"transform": transformSuccess3 , "opacity": 0.8, "stepConfig":{"timingFunction": kony.anim.EASIN_IN}},
          	"100":{"transform": transformSuccess4 ,  "opacity": 1, "stepConfig":{"timingFunction": kony.anim.EASIN_IN}}}),
        {"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 1.0, "delay": 2.6},
        {"animationEnd": function () {
          	
         self.view.flxSuccessMessage.animate(
        kony.ui.createAnimation({"100":{"opacity": .9 ,"stepConfig":{"timingFunction": kony.anim.EASIN_IN}}}),
        {"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.3, "delay": 0.2},
        {"animationEnd": function () {}}
    );
        }}
    );
  	

},

/**
 * @function
 *
 */
 successFormContinue:function(){
   // where to go to depends on where we've been
   
   // where are we in the process?  just made an appointment?
   // chosen all the featrues we want?
   // if we've just selected appointment...
   kony.print("***** successFormContinue ");
   var nvf = new kony.mvc.Navigation("frmEndQuestions");
   nvf.navigate();
  }

 });