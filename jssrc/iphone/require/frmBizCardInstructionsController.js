define({
    "showLoginflx": function() {
        this.view.flxLogin.isVisible = true;
    },
    "onBackNav": function() {
        var nvf = new kony.mvc.Navigation("frmeKTPAddress");
        nvf.navigate();
    },
    "onClickManualOption": function() {
        var nvf = new kony.mvc.Navigation("frmBizCardManual");
        nvf.navigate({
            "tbxVal": "",
            "lineSkin": "lineGrey",
            "labelskin": "lblGreyNew"
        });
    },
    "onCaptureCam": function() {
        var nvf = new kony.mvc.Navigation("frmBizDetails");
        nvf.navigate();
    },
    "AS_FlexContainer_a65b60b1459b408eb23a3e8b00693ed0": function AS_FlexContainer_a65b60b1459b408eb23a3e8b00693ed0(eventobject) {
        var self = this;
        this.onBackNav();
    },
    "AS_Camera_dc535288ed3d48efb12c7e38da0c08af": function AS_Camera_dc535288ed3d48efb12c7e38da0c08af(eventobject) {
        var self = this;
        this.onCaptureCam();
    },
    "AS_Button_ddf4ec76c8e14dae826d9d630b426cdb": function AS_Button_ddf4ec76c8e14dae826d9d630b426cdb(eventobject) {
        var self = this;
        this.onClickManualOption();
    }
})