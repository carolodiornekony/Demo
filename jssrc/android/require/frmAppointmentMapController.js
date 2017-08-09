define({
    "showSignUp2": function() {
        var ntf = new kony.mvc.Navigation("frmSignUp2");
        ntf.navigate();
    },
    "showBackLogin": function() {
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    "mapData": function() {
        this.view.Addressmap.locationData = [{
            lat: "29.716131",
            lon: "-95.388718",
            name: "Bank Da-95.388718namon",
            desc: " Rasuna Said",
            image: "pin.png"
        }];
    },
    "showAccountCreated": function() {
        var ntf = new kony.mvc.Navigation("frmAccountCreated");
        ntf.navigate();
    },
    "showfrmAddress": function() {
        var ntf = new kony.mvc.Navigation("frmAppointmentAddress");
        ntf.navigate({
            "lineSkin": "lineGrey",
            "labelskin": "lblGreyNew"
        });
    },
    "AS_FlexContainer_b95156b4cfff4f06b6c053db51148eee": function AS_FlexContainer_b95156b4cfff4f06b6c053db51148eee(eventobject) {
        var self = this;
        this.showAccountCreated();
    },
    "AS_Button_gfba9b8ffe514a36a01d9f915be4ff1f": function AS_Button_gfba9b8ffe514a36a01d9f915be4ff1f(eventobject) {
        var self = this;
        this.showfrmAddress();
    },
    "AS_Form_g84c38df361049a2b0ffbdbb86541ae5": function AS_Form_g84c38df361049a2b0ffbdbb86541ae5(eventobject) {
        var self = this;
        this.mapData();
    }
})