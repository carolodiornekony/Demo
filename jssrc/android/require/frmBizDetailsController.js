define({
    "showLoginflx": function() {
        this.view.flxLogin.isVisible = true;
    },
    "onBackNav": function() {
        var nvf = new kony.mvc.Navigation("frmBizCardInstructions");
        nvf.navigate();
    },
    "onDoneClick": function() {
        var nvf = new kony.mvc.Navigation("frmAccountCreated");
        nvf.navigate();
    },
    "AS_FlexContainer_if719bcd28914797917bae2632dbd55d": function AS_FlexContainer_if719bcd28914797917bae2632dbd55d(eventobject) {
        var self = this;
        this.onBackNav();
    },
    "AS_Button_ade1aaab894542d09885dbcdcf77c312": function AS_Button_ade1aaab894542d09885dbcdcf77c312(eventobject) {
        var self = this;
        this.onDoneClick();
    }
})