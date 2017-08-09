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
    "AS_FlexContainer_g1a5e4e2186e46d29c739930c7870bb4": function AS_FlexContainer_g1a5e4e2186e46d29c739930c7870bb4(eventobject) {
        var self = this;
        this.showBackSignUp3();
    },
    "AS_Button_aec39d8d029d4cfb87d1615fd608e49b": function AS_Button_aec39d8d029d4cfb87d1615fd608e49b(eventobject) {
        var self = this;
        this.onClickNextOne();
    },
    "AS_FlexContainer_a56803c76dd247fd9521724eb36663b4": function AS_FlexContainer_a56803c76dd247fd9521724eb36663b4(eventobject) {
        var self = this;
        this.onClickNext();
    },
    "AS_Form_if94190dfe3d42368db56e2fc9af28c9": function AS_Form_if94190dfe3d42368db56e2fc9af28c9(eventobject) {
        var self = this;
        if (gCameraOn) {
            frmSignUp4.flxMain.flxSignUp4.isVisible = true;
        } else frmSignUp4.flxMain.flxSignUp4.isVisible = false;
    }
})