define({
    "showMapAddress": function() {
        var ntf = new kony.mvc.Navigation("frmAppointmentMap");
        ntf.navigate();
    },
    "showVideoPage": function() {
        var ntf = new kony.mvc.Navigation("frmVideoChat");
        ntf.navigate();
    },
    "AS_Button_d58b89f6f30d473489d1b2b8e0699550": function AS_Button_d58b89f6f30d473489d1b2b8e0699550(eventobject) {
        var self = this;
        this.showMapAddress();
    },
    "AS_Button_i25ce908f4554dc589ba8a77750b03ef": function AS_Button_i25ce908f4554dc589ba8a77750b03ef(eventobject) {
        var self = this;
        this.showVideoPage();
    }
})