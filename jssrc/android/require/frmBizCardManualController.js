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
        var nvf = new kony.mvc.Navigation("frmBizCardInstructions");
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
        if (this.view.tbxeKTP.text == null || this.view.tbxeKTP.text == "") {
            kony.ui.Alert({
                message: "Enter your business card number.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Invalid entry data",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
            }, {});
        } else if (this.view.tbxeKTP.text.length < 16) {
            kony.ui.Alert({
                message: "Business card number should be of 16-digits.",
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Invalid entry Data",
                yesLabel: "Ok",
                noLabel: "No",
                alertHandler: null
            }, {});
        } else {
            var nvf = new kony.mvc.Navigation("frmBizDetails");
            nvf.navigate();
        }
    },
    "AS_FlexContainer_e83f962e0e56403a828808096c20c6eb": function AS_FlexContainer_e83f962e0e56403a828808096c20c6eb(eventobject) {
        var self = this;
        this.onBackNav();
    },
    "AS_TextField_i048bff89c4c49da917f299f48921064": function AS_TextField_i048bff89c4c49da917f299f48921064(eventobject, changedtext) {
        var self = this;
        this.onEndEditingManual();
    },
    "AS_TextField_d9b4b32cc4d241beae49f97756072856": function AS_TextField_d9b4b32cc4d241beae49f97756072856(eventobject, changedtext) {
        var self = this;
        this.onStartEditingManual();
    },
    "AS_TextField_fe34a27a1bbc4306a2ddfbbc238051b7": function AS_TextField_fe34a27a1bbc4306a2ddfbbc238051b7(eventobject, changedtext) {
        var self = this;
        this.onEndEditingManual();
    },
    "AS_TextField_bab676a09f7748d188189a9e5c073862": function AS_TextField_bab676a09f7748d188189a9e5c073862(eventobject, changedtext) {
        var self = this;
        this.onStartEditingManual();
    },
    "AS_TextField_f3dd9b3b8f2d423ca3dae484af0af0bc": function AS_TextField_f3dd9b3b8f2d423ca3dae484af0af0bc(eventobject, changedtext) {
        var self = this;
        this.onEndEditingManual();
    },
    "AS_Button_gf73b2be2cb640e1b524be01a9e05146": function AS_Button_gf73b2be2cb640e1b524be01a9e05146(eventobject) {
        var self = this;
        this.onDoneClick();
    }
})