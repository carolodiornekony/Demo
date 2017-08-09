define({
    "showBackSignUp2": function() {
        var ntf = new kony.mvc.Navigation("frmSignUp2");
        ntf.navigate();
    },
    "showSignUP4": function(showCamera) {
        gCameraOn = showCamera;
        var ntf = new kony.mvc.Navigation("frmSignUp4");
        ntf.navigate();
    },
    "AS_FlexContainer_ceda5ae1598448f7aa8cc3335c01da49": function AS_FlexContainer_ceda5ae1598448f7aa8cc3335c01da49(eventobject) {
        var self = this;
        this.showBackSignUp2();
    },
    "AS_Camera_de8da40b9bda4f95bf4b8a3bbb8da95c": function AS_Camera_de8da40b9bda4f95bf4b8a3bbb8da95c(eventobject) {
        var self = this;
        this.showSignUP4(true);
    },
    "AS_RichText_e056b6eece68483ca73e462f753081fc": function AS_RichText_e056b6eece68483ca73e462f753081fc(eventobject, linktext, attributes) {
        var self = this;
        this.showSignUP4();
    },
    "AS_RichText_g7ce6ea189f4491690f33b37e918433a": function AS_RichText_g7ce6ea189f4491690f33b37e918433a(eventobject, x, y) {
        var self = this;
        this.showSignUP4(false);
    }
})