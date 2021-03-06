define({ 
  navToPrevForm:function(){
    var nvf = new kony.mvc.Navigation("frmEnterPIN");
    nvf.navigate();
  },
touchIdAuthentication:function()
{
  var pfName = kony.os.deviceInfo().name;
  if(pfName == "android" || pfName == "Android")
    {
      this.isAuthUsingTouchSupported();
     }
  else
    {
     this.TouchIDAuthiPhone();
    }
},
statusCB:function(status,message)
{
   	 if(status ==5000)
           this.onTouchIDSuccess();
    else if(status == 5001)
          {
        kony.ui.Alert({
                message: "Authentication is not successful because a user fails to provide valid credentials.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Unsuccessful",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
                }, {});
          }
  else
    {
       kony.ui.Alert({
                message: message,
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Unsuccessful",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
                }, {});
    }
},
TouchIDAuthiPhone:function()
{
               //var config = null;
	          	var config = {"promptMessage" : "Login using TouchID"};
				kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,this.statusCB,config);
},
 onTouchIDSuccess:function()
{
   var ntf = new kony.mvc.Navigation("frmSuccess");
 	ntf.navigate({"message":"Activation successful."});
},
isAuthUsingTouchSupported:function()
{
	var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
	if(status == 5000)
	{
      this.view.flxTouchID.setVisibility(true);
	  this.authUsingTouchID();	
	}

  else
	{
		var msg = "Touch ID is not configured on this device.Authentication returned a status ::"+status;
		kony.ui.Alert({message: msg+" "+status,
		alertType: constants.ALERT_TYPE_INFO,
		yesLabel:"Close"},
		{});
	}
},



/*************************************************************************************
 * Function:statusCB()
 * Description: Call back function for Authentication through Finger Print.
 * Author: Kony
 *************************************************************************************/
statusCBAndroid:function(status,message)
{
  
	if(status == 5000)
	{
      this.view.flxTouchID.setVisibility(false);
    var ntf = new kony.mvc.Navigation("frmSuccess");
 	ntf.navigate({"message":"Activation successful."});
	}
   else if(status == 5001)
          {
         kony.ui.Alert({
                message: "Authentication is not successful because a user fails to provide valid credentials.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Unsuccessful",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
                }, {});
          }
  	else
	{
		var messg = status+": "+message;
		kony.ui.Alert({message: messg,
		alertType: constants.ALERT_TYPE_INFO,
		yesLabel:"Close"},
		{});
	}
},



/*************************************************************************************
 * Function:authUsingTouchID()
 * Description: Function for validating the user.
 * Author: Kony
 *************************************************************************************/
authUsingTouchID:function()
{
    
    var config = {"promptMessage" : "PLEASE AUTHENTICATE USING YOUR TOUCH ID"};
	kony.localAuthentication.authenticate(
	constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,this.statusCBAndroid,config);
},
onClickClose:function()
  {
    this.view.flxTouchID.setVisibility(false);
  }
 });