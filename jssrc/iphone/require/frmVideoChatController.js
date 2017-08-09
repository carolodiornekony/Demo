define({
    "showAccountCreated": function() {
        var ntf = new kony.mvc.Navigation("frmAccountCreated");
        ntf.navigate();
    },
    "showVerificationSuccessful": function() {
        var ntf = new kony.mvc.Navigation("frmVerificationSucess");
        ntf.navigate();
    },
    "AS_FlexContainer_g13cb3fceb9f4d27baf6a4c126f05e4d": function AS_FlexContainer_g13cb3fceb9f4d27baf6a4c126f05e4d(eventobject) {
        var self = this;
        this.showAccountCreated();
    },
    "AS_Camera_d56dfdcbf40d4217921de58a10cedb48": function AS_Camera_d56dfdcbf40d4217921de58a10cedb48(eventobject) {
        var self = this;
        this.showVerificationSuccessful();
    }
})