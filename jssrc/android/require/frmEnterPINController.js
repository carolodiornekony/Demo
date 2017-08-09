define({
    "onNavigate": function(obj) {
        if (obj == undefined || obj == null) {} else {
            this.view.tbx1.text = obj.textBoxData;
            this.view.tbx2.text = obj.textBoxData;
            this.view.tbx3.text = obj.textBoxData;
            this.view.tbx4.text = obj.textBoxData;
            this.view.tbx5.text = obj.textBoxData;
            this.view.tbx6.text = obj.textBoxData;
        }
    },
    "navToPrevForm": function() {
        var nvf = new kony.mvc.Navigation("frmConfirmPIN");
        nvf.navigate();
    },
    "tbx1onEndEdit": function() {
        if (this.view.tbx1.text.length == 1) {
            this.view.tbx2.setFocus(true);
        } else {
            kony.print("Do nothing");
        }
    },
    "tbx2onEndEdit": function() {
        if (this.view.tbx2.text.length == 1) {
            this.view.tbx3.setFocus(true);
        } else {
            kony.print("Do nothing");
        }
    },
    "tbx3onEndEdit": function() {
        if (this.view.tbx3.text.length == 1) {
            this.view.tbx4.setFocus(true);
        } else {
            kony.print("Do nothing");
        }
    },
    "tbx4onEndEdit": function() {
        if (this.view.tbx4.text.length == 1) {
            this.view.tbx5.setFocus(true);
        } else {
            kony.print("Do nothing");
        }
    },
    "tbx5onEndEdit": function() {
        if (this.view.tbx5.text.length == 1) {
            this.view.tbx6.setFocus(true);
        } else {
            kony.print("Do nothing");
        }
    },
    "tbx6onDone": function() {
        var nvf = new kony.mvc.Navigation("frmVerifyFingerPrint");
        nvf.navigate();
    },
    "AS_FlexContainer_c419358644fc44beb3a42973db4c5b76": function AS_FlexContainer_c419358644fc44beb3a42973db4c5b76(eventobject) {
        var self = this;
        this.navToPrevForm();
    },
    "AS_TextField_d0d11e3da2ec4315bf46ad77ebd0f429": function AS_TextField_d0d11e3da2ec4315bf46ad77ebd0f429(eventobject, changedtext) {
        var self = this;
        this.tbx1onEndEdit();
    },
    "AS_TextField_a97b79909c6448f4b8a8c7a4d5321d47": function AS_TextField_a97b79909c6448f4b8a8c7a4d5321d47(eventobject, changedtext) {
        var self = this;
        this.tbx2onEndEdit();
    },
    "AS_TextField_f80b30ed3d1a4efc8aaaaa34fedec603": function AS_TextField_f80b30ed3d1a4efc8aaaaa34fedec603(eventobject, changedtext) {
        var self = this;
        this.tbx3onEndEdit();
    },
    "AS_TextField_f4a2c3db910e457e87428a7041536df3": function AS_TextField_f4a2c3db910e457e87428a7041536df3(eventobject, changedtext) {
        var self = this;
        this.tbx4onEndEdit();
    },
    "AS_TextField_ce30a7787462456c906de2961195b807": function AS_TextField_ce30a7787462456c906de2961195b807(eventobject, changedtext) {
        var self = this;
        this.tbx5onEndEdit();
    },
    "AS_TextField_db28abb7db4d49d3a39bd621b87643a9": function AS_TextField_db28abb7db4d49d3a39bd621b87643a9(eventobject, changedtext) {
        var self = this;
        this.tbx6onDone();
    },
    "AS_TextField_h5cbd197db104b3697a44efa8d074564": function AS_TextField_h5cbd197db104b3697a44efa8d074564(eventobject, changedtext) {
        var self = this;
        this.tbx6onDone();
    },
    "AS_TextField_f6edd101cb534a46aacf8e2d4ba5831c": function AS_TextField_f6edd101cb534a46aacf8e2d4ba5831c(eventobject, changedtext) {
        var self = this;
        this.tbx6onDone();
    }
})