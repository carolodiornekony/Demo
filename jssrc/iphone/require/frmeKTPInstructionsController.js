define({
    "showLoginflx": function() {
        this.view.flxLogin.isVisible = true;
    },
    "onClickManualOption": function() {
        var nvf = new kony.mvc.Navigation("frmeKTPManual");
        nvf.navigate({
            "tbxVal": "",
            "lineSkin": "lineGrey",
            "labelskin": "lblGreyNew"
        });
    },
    "onBackNav": function() {
        var nvf = new kony.mvc.Navigation("frmSignUp3");
        nvf.navigate();
    },
    "onCaptureCam": function() {
        try {
            var nvf = new kony.mvc.Navigation("frmeKTPPersonalInfo");
            nvf.navigate();
        } catch (err) {
            kony.print(err);
        }
    },
    "AS_FlexContainer_h26b26110a5c4eeaa601412d9cbfffa1": function AS_FlexContainer_h26b26110a5c4eeaa601412d9cbfffa1(eventobject) {
        var self = this;
        this.onBackNav();
    },
    "AS_Camera_d52c6d7e55a047f39c5495a854f2484a": function AS_Camera_d52c6d7e55a047f39c5495a854f2484a(eventobject) {
        var self = this;
        this.onCaptureCam();
    },
    "AS_Button_a81d8d31f13a4ed9a1d6b90e3be04905": function AS_Button_a81d8d31f13a4ed9a1d6b90e3be04905(eventobject) {
        var self = this;
        this.onClickManualOption();
    }
})