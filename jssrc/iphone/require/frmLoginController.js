define({
    "onNavigate": function(obj) {
        if (obj == undefined || obj == null) {} else {
            this.view.tbxName.text = obj.textBoxData;
            this.view.tbxPassword.text = obj.textBoxData;
        }
    },
    "showPIN": function() {
        var ntf = new kony.mvc.Navigation("frmSetPIN");
        ntf.navigate({
            "textBoxData": ""
        });
    },
    "showfrmSplash": function() {
        var ntf = new kony.mvc.Navigation("frmSpalsh");
        ntf.navigate();
    },
    "AS_Button_j9c2c5401ca246488ad9c87a66b6c044": function AS_Button_j9c2c5401ca246488ad9c87a66b6c044(eventobject) {
        var self = this;
        this.showPIN();
    },
    "AS_FlexContainer_fa88d2e0de8949e9addfde3996c9143b": function AS_FlexContainer_fa88d2e0de8949e9addfde3996c9143b(eventobject) {
        var self = this;
        this.showfrmSplash();
    }
})