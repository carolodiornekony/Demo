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
        var nvf = new kony.mvc.Navigation("frmConfirmPIN");
        nvf.navigate({
            "textBoxData": ""
        });
    },
    "showLoginFromPIN": function() {
        var nvf = new kony.mvc.Navigation("frmLogin");
        nvf.navigate();
    },
    "AS_FlexContainer_b2963f4e2e414b67b3caeb61649ceb3e": function AS_FlexContainer_b2963f4e2e414b67b3caeb61649ceb3e(eventobject) {
        var self = this;
        this.showLoginFromPIN();
    },
    "AS_TextField_ia4a41d0defc4233aee8c6b9e3698c24": function AS_TextField_ia4a41d0defc4233aee8c6b9e3698c24(eventobject, changedtext) {
        var self = this;
        this.tbx1onEndEdit();
    },
    "AS_TextField_c15b92b7e2144a5b8d3e3b9830c5f12c": function AS_TextField_c15b92b7e2144a5b8d3e3b9830c5f12c(eventobject, changedtext) {
        var self = this;
        this.tbx2onEndEdit();
    },
    "AS_TextField_f14ca9341682429984c9d60b26885b3c": function AS_TextField_f14ca9341682429984c9d60b26885b3c(eventobject, changedtext) {
        var self = this;
        this.tbx3onEndEdit();
    },
    "AS_TextField_ie508d62437540bd8ab6135f7ed97c3b": function AS_TextField_ie508d62437540bd8ab6135f7ed97c3b(eventobject, changedtext) {
        var self = this;
        this.tbx4onEndEdit();
    },
    "AS_TextField_hdec5f19a40c40139b3b667b446229e8": function AS_TextField_hdec5f19a40c40139b3b667b446229e8(eventobject, changedtext) {
        var self = this;
        this.tbx5onEndEdit();
    },
    "AS_TextField_a2e505c88422419e9081855dbfe51794": function AS_TextField_a2e505c88422419e9081855dbfe51794(eventobject, changedtext) {
        var self = this;
        this.tbx6onDone();
    },
    "AS_TextField_fadd0db582f34246b22eb465431c26eb": function AS_TextField_fadd0db582f34246b22eb465431c26eb(eventobject, changedtext) {
        var self = this;
        this.tbx6onDone();
    },
    "AS_TextField_d0e6db2623314688a6d5c1c3be93e0f5": function AS_TextField_d0e6db2623314688a6d5c1c3be93e0f5(eventobject, changedtext) {
        var self = this;
        this.tbx6onDone();
    }
})