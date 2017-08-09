define({
    "showAddressfrm": function() {
        var ntf = new kony.mvc.Navigation("frmDeliveryAddress");
        ntf.navigate();
    },
    "AS_Button_b4a881adced24a688983c3213a4c9e78": function AS_Button_b4a881adced24a688983c3213a4c9e78(eventobject) {
        var self = this;
        this.showAddressfrm();
    }
})