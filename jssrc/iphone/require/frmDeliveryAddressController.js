define({
    "showVerificationSuccessPage": function() {
        var ntf = new kony.mvc.Navigation("frmVerificationSuccessful");
        ntf.navigate();
    },
    "OnDoneVerification": function() {
        var ntf = new kony.mvc.Navigation("frmSuccess2");
        ntf.navigate({
            "message": "Your ATM card will be delivered to mentioned address."
        });
    },
    "changeDeliveryAddress": function() {
        if (this.view.btnHome.skin == "btnCheck") {
            this.view.btnOffice.skin = "btnCheck";
            this.view.btnOffice.focusSkin = "btnCheck";
            this.view.btnHome.skin = "btnUncheck";
            this.view.btnHome.focusSkin = "btnUncheck";
        } else {
            this.view.btnOffice.skin = "btnUncheck";
            this.view.btnOffice.focusSkin = "btnUncheck";
            this.view.btnHome.skin = "btnCheck";
            this.view.btnHome.focusSkin = "btnCheck";
        }
    },
    "AS_FlexContainer_d95f8f5bcf034b1c9fa275a520b852fe": function AS_FlexContainer_d95f8f5bcf034b1c9fa275a520b852fe(eventobject) {
        var self = this;
        this.showVerificationSuccessPage();
    },
    "AS_Button_i23930dde7c043099b75c5f3824fa0fd": function AS_Button_i23930dde7c043099b75c5f3824fa0fd(eventobject) {
        var self = this;
        this.changeDeliveryAddress();
    },
    "AS_Button_b413beeb54204747a0034f783d80780a": function AS_Button_b413beeb54204747a0034f783d80780a(eventobject) {
        var self = this;
        this.changeDeliveryAddress();
    },
    "AS_Button_abf19fa06a744d7ea347f12d07202a43": function AS_Button_abf19fa06a744d7ea347f12d07202a43(eventobject) {
        var self = this;
        this.OnDoneVerification();
    }
})