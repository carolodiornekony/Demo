define({
    "onNavigate": function(obj) {
        if (obj == undefined || obj == null) {} else {
            this.view.tbxName.text = obj.textBoxData;
            this.view.tbxDL = obj.textBoxData;
            this.view.tbxAddress.text = obj.textBoxData;
            //this.view.tbxPassword.text = obj.textBoxData;
            //this.view.tbxEmail.text = obj.textBoxData;
        }
    },
    "showDLCamera": function() {
        var ntf = new kony.mvc.Navigation("frmDrvLicenseCamera");
        ntf.navigate({
            "tbxVal": "",
            "lineSkin": "lineGrey",
            "labelskin": "lblGreyNew"
        });
    },
    "showSignUp2": function() {
        var ntf = new kony.mvc.Navigation("frmSignUp2");
        ntf.navigate({
            "tbxVal": "",
            "lineSkin": "lineGrey",
            "labelskin": "lblGreyNew"
        });
    },
    "showBackLogin": function() {
        var ntf = new kony.mvc.Navigation("frmSpalsh");
        ntf.navigate();
    },
    "AS_FlexContainer_jea85e2673f942c783209a6cf9635e47": function AS_FlexContainer_jea85e2673f942c783209a6cf9635e47(eventobject) {
        var self = this;
        this.showBackLogin();
    },
    "AS_Button_da4e4149ba3448fc85d9bac0d4766af5": function AS_Button_da4e4149ba3448fc85d9bac0d4766af5(eventobject) {
        var self = this;
        this.showSignUp2();
    },
    "AS_Button_b61bfba671cc4d6da3159c02ac4a8e47": function AS_Button_b61bfba671cc4d6da3159c02ac4a8e47(eventobject) {
        var self = this;
        this.showDLCamera();
    }
})