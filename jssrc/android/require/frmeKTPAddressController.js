define({
    "setCheckBoxHeight": function() {
        if (kony.os.deviceInfo().name == "android") {
            this.view.CheckBoxGroup0fda1949ddf5945.height = "7%";
            this.view.CheckBoxGroup0fda1949ddf5945.top = "2%";
            this.view.CopyflxLinkedIn0a763bb9a77294d.top = "0%";
        } else {}
    },
    "showLoginflx": function() {
        this.view.flxLogin.isVisible = true;
    },
    "onBackNav": function() {
        var nvf = new kony.mvc.Navigation("frmeKTPPersonalInfo");
        nvf.navigate();
    },
    "onClickNext": function() {
        var nvf = new kony.mvc.Navigation("frmBizCardInstructions");
        nvf.navigate();
    },
    "AS_FlexContainer_b2f5cebe5e5a49afaf19ace3299ee29e": function AS_FlexContainer_b2f5cebe5e5a49afaf19ace3299ee29e(eventobject) {
        var self = this;
        this.onBackNav();
    },
    "AS_Button_hbd3ee7e3743475d9980a8bdc2ddfd16": function AS_Button_hbd3ee7e3743475d9980a8bdc2ddfd16(eventobject) {
        var self = this;
        this.onClickNext();
    },
    "AS_Form_a2b863afd0c84bbc830b9f83e5e68c9c": function AS_Form_a2b863afd0c84bbc830b9f83e5e68c9c(eventobject) {
        var self = this;
        this.setCheckBoxHeight();
    }
})