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
        var nvf = new kony.mvc.Navigation("frmSetPIN");
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
        var nvf = new kony.mvc.Navigation("frmEnterPIN");
        nvf.navigate({
            "textBoxData": ""
        });
    },
    "AS_FlexContainer_e7b9487a21914d44a63a9f1086b0d540": function AS_FlexContainer_e7b9487a21914d44a63a9f1086b0d540(eventobject) {
        var self = this;
        this.navToPrevForm();
    },
    "AS_TextField_dbd2d40dbca540598cc744e44e0476ea": function AS_TextField_dbd2d40dbca540598cc744e44e0476ea(eventobject, changedtext) {
        var self = this;
        this.tbx1onEndEdit();
    },
    "AS_TextField_abf480956f9c4f489321702ab7540f2c": function AS_TextField_abf480956f9c4f489321702ab7540f2c(eventobject, changedtext) {
        var self = this;
        this.tbx2onEndEdit();
    },
    "AS_TextField_ea09c6a45e004ce6862535f7951cbfef": function AS_TextField_ea09c6a45e004ce6862535f7951cbfef(eventobject, changedtext) {
        var self = this;
        this.tbx3onEndEdit();
    },
    "AS_TextField_d4c970bbc08145259c7ee65fd3cf1baf": function AS_TextField_d4c970bbc08145259c7ee65fd3cf1baf(eventobject, changedtext) {
        var self = this;
        this.tbx4onEndEdit();
    },
    "AS_TextField_cbc04186a86c4249a613b027dd5b5756": function AS_TextField_cbc04186a86c4249a613b027dd5b5756(eventobject, changedtext) {
        var self = this;
        this.tbx5onEndEdit();
    },
    "AS_TextField_gca54c9977b0470d9fc649a6b7ecd6fc": function AS_TextField_gca54c9977b0470d9fc649a6b7ecd6fc(eventobject, changedtext) {
        var self = this;
        this.tbx6onDone();
    },
    "AS_TextField_bd6f3b73e7844dd89146f020bc4ffc15": function AS_TextField_bd6f3b73e7844dd89146f020bc4ffc15(eventobject, changedtext) {
        var self = this;
        this.tbx6onDone();
    },
    "AS_TextField_f7bc9369f07f41eca6fc477c56e392b3": function AS_TextField_f7bc9369f07f41eca6fc477c56e392b3(eventobject, changedtext) {
        var self = this;
        this.tbx6onDone();
    }
})