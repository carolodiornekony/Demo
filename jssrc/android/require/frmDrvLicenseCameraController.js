define({
    "showBackSignUp1": function() {
        var ntf = new kony.mvc.Navigation("frmSignUp1");
        ntf.navigate();
    },
    "showSignUp2": function() {
        var ntf = new kony.mvc.Navigation("frmSignUp2");
        ntf.navigate({
            "tbxVal": "",
            "lineSkin": "lineGrey",
            "labelskin": "lblGreyNew"
        });
    },
    "showLoginflx": function() {
        this.view.flxLogin.isVisible = true;
    },
    "AS_FlexContainer_d68237bdcb5e472998669543a22487f4": function AS_FlexContainer_d68237bdcb5e472998669543a22487f4(eventobject) {
        var self = this;
        this.showBackSignUp1();
    },
    "AS_Button_e85000de27594084a5c4646ae57faf1c": function AS_Button_e85000de27594084a5c4646ae57faf1c(eventobject) {
        var self = this;
        this.showSignUp2();
    }
})