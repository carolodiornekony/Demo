define({
    "onNavigate": function(obj) {
        if (obj == null || obj == undefined) {} else {
            this.view.tbxeKTP.text = obj.tbxVal;
            this.view.CopyflxLine0g6c884a7ce0848.skin = obj.lineSkin;
            this.view.CopylblName0a43ab54ae9a94b.skin = obj.labelskin;
        }
    },
    "showLoginflx": function() {
        this.view.flxLogin.isVisible = true;
    },
    "onBackNav": function() {
        var nvf = new kony.mvc.Navigation("frmeKTPInstructions");
        nvf.navigate();
    },
    "onStartEditingManual": function() {
        this.view.CopyflxLine0g6c884a7ce0848.skin = "lineGreen";
        this.view.CopylblName0a43ab54ae9a94b.skin = "sknlblGreen";
    },
    "onEndEditingManual": function() {
        this.view.CopyflxLine0g6c884a7ce0848.skin = "lineGrey";
        this.view.CopylblName0a43ab54ae9a94b.skin = "lblGreyNew";
    },
    "onDoneClick": function() {
        if (this.view.tbxeKTP.text === null || this.view.tbxeKTP.text == "") {
            kony.ui.Alert({
                message: "Enter your member number.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Invalid entry type",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
            }, {});
        } else if (this.view.tbxeKTP.text.length < 16) {
            kony.ui.Alert({
                message: "member number should be of 16-digits.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Invalid entry type",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
            }, {});
        } else {
            var nvf = new kony.mvc.Navigation("frmeKTPPersonalInfo");
            nvf.navigate();
        }
    },
    "AS_FlexContainer_bb49204ba3914dea93208f23b4883636": function AS_FlexContainer_bb49204ba3914dea93208f23b4883636(eventobject) {
        var self = this;
        this.onBackNav();
    },
    "AS_TextField_b6da6feb6c5742cc80e35de6ef699588": function AS_TextField_b6da6feb6c5742cc80e35de6ef699588(eventobject, changedtext) {
        var self = this;
        this.onEndEditingManual();
    },
    "AS_TextField_h50c658d864b4e11a5b0da41c2e250af": function AS_TextField_h50c658d864b4e11a5b0da41c2e250af(eventobject, changedtext) {
        var self = this;
        this.onStartEditingManual();
    },
    "AS_TextField_d37e578b6bf8412aacaa931ff052099a": function AS_TextField_d37e578b6bf8412aacaa931ff052099a(eventobject, changedtext) {
        var self = this;
        this.onEndEditingManual();
    },
    "AS_TextField_d345f6a77fab469b974139ef3a36a85b": function AS_TextField_d345f6a77fab469b974139ef3a36a85b(eventobject, changedtext) {
        var self = this;
        this.onStartEditingManual();
    },
    "AS_TextField_f144b40ef13e40f69ae2346e79714b44": function AS_TextField_f144b40ef13e40f69ae2346e79714b44(eventobject, changedtext) {
        var self = this;
        this.onEndEditingManual();
    },
    "AS_Button_b18d434789db43fa9c9ce55911f5862b": function AS_Button_b18d434789db43fa9c9ce55911f5862b(eventobject) {
        var self = this;
        this.onDoneClick();
    }
})