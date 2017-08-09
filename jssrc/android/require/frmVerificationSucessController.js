define({
    "showVerifyfrm": function() {
        var ntf = new kony.mvc.Navigation("frmVerificationSuccessful");
        ntf.navigate();
    },
    "AS_Button_gb82fd7008fd43ee832bad1f255559b0": function AS_Button_gb82fd7008fd43ee832bad1f255559b0(eventobject) {
        var self = this;
        this.showVerifyfrm();
    }
})