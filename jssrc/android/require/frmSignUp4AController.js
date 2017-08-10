define({
    "showBackSignUp3": function() {
        var ntf = new kony.mvc.Navigation("frmSignUp3");
        ntf.navigate();
    },
    "onClickNextOne": function() {
        gCameraShow = false;
        var ntf = new kony.mvc.Navigation("frmAccountCreated");
        ntf.navigate();
    },
    "onClickNext": function() {
        // show the credentials
        gCameraShow = false;
        this.show();
    },
    "AS_FlexContainer_a27b0174d10c4f14bd80e31e52acd154": function AS_FlexContainer_a27b0174d10c4f14bd80e31e52acd154(eventobject) {
        var self = this;
        this.showBackSignUp3();
    },
    "AS_Button_c76afec5d45e400d9410bedcf8cc44ee": function AS_Button_c76afec5d45e400d9410bedcf8cc44ee(eventobject) {
        var self = this;
        this.onClickNextOne();
    },
    "AS_FlexContainer_dacf9b93d2974532b659cd88c2751aab": function AS_FlexContainer_dacf9b93d2974532b659cd88c2751aab(eventobject) {
        var self = this;
        this.onClickNext();
    }
})