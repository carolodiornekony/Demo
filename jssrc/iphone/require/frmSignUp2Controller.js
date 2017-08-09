define({
    "showSignUp3": function() {
        if (this.view.tbxMobileNumber.text === null || this.view.tbxMobileNumber.text == "") {
            kony.ui.Alert({
                message: "Enter your mobile number.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Invalid Data",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
            }, {});
        } else if (this.view.tbxMobileNumber.text.length < 10) {
            kony.ui.Alert({
                message: "Mobile number should be of 10-digits,11-digits or 12-digits.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Invalid Data",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
            }, {});
        } else {
            var ntf = new kony.mvc.Navigation("frmSignUp3");
            ntf.navigate();
        }
    },
    "showBackSignUp1": function() {
        var ntf = new kony.mvc.Navigation("frmSignUp1");
        ntf.navigate();
    },
    "onNavigate": function(obj) {
        if (obj == null || obj == undefined) {} else {
            this.view.tbxMobileNumber.text = obj.tbxVal;
            this.view.tbxPassword.text = obj.textBoxData;
            this.view.tbxEmail.text = obj.textBoxData;
            this.view.CopyflxLine0g6c884a7ce0848.skin = obj.lineSkin;
            this.view.CopylblName0a43ab54ae9a94b.skin = obj.labelskin;
        }
    },
    "onStartEditingManual": function() {
        this.view.CopyflxLine0g6c884a7ce0848.skin = "lineGreen";
        this.view.CopylblName0a43ab54ae9a94b.skin = "sknlblGreen";
    },
    "onEndEditingManual": function() {
        this.view.CopyflxLine0g6c884a7ce0848.skin = "lineGrey";
        this.view.CopylblName0a43ab54ae9a94b.skin = "lblGreyNew";
    },
    "AS_FlexContainer_bff7dab17bdb4f32991976f1c97e3db9": function AS_FlexContainer_bff7dab17bdb4f32991976f1c97e3db9(eventobject) {
        var self = this;
        this.showBackSignUp1();
    },
    "AS_TextField_d7c084cd115540fb99ec1d71f0cf004d": function AS_TextField_d7c084cd115540fb99ec1d71f0cf004d(eventobject, changedtext) {
        var self = this;
        this.onStartEditingManual();
    },
    "AS_TextField_ae32c0b66556450dbefe5321a9ed179f": function AS_TextField_ae32c0b66556450dbefe5321a9ed179f(eventobject, changedtext) {
        var self = this;
        this.onEndEditingManual();
    },
    "AS_TextField_jd9ac9392595414cb116b5061a1aab2c": function AS_TextField_jd9ac9392595414cb116b5061a1aab2c(eventobject, changedtext) {
        var self = this;
        this.onStartEditingManual();
    },
    "AS_TextField_e5c108893ae34eb0a7ea6673fa73e11c": function AS_TextField_e5c108893ae34eb0a7ea6673fa73e11c(eventobject, changedtext) {
        var self = this;
        this.onEndEditingManual();
    },
    "AS_Button_gb68c35188e64386bf243880e4a1caff": function AS_Button_gb68c35188e64386bf243880e4a1caff(eventobject) {
        var self = this;
        this.showSignUp3();
    }
})