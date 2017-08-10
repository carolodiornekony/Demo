define({
    "showLoginflx": function() {
        alert("This feature not currently setup");
        //var ntf = new kony.mvc.Navigation("frmLogin");
        //ntf.navigate({"textBoxData":""});
    },
    "showSignUp1": function() {
        var ntf = new kony.mvc.Navigation("frmSignUp1");
        ntf.navigate({
            "textBoxData": ""
        });
    },
    "disappearLogin": function() {
        this.view.flxMain.opacity = 0;
    },
    "showLoginPannel": function() {
        this.view["flxMain"].animate(kony.ui.createAnimation({
            "100": {
                "opacity": 0.9,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_OUT
                }
            },
            "50": {
                "opacity": 0.5,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_OUT
                }
            }
        }), {
            "delay": 0.9,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {}
        })
    },
    "AS_Button_g141aca5da1940749fa4eb3caeae8e8d": function AS_Button_g141aca5da1940749fa4eb3caeae8e8d(eventobject) {
        var self = this;
        this.showLoginflx();
    },
    "AS_Button_c705060a01054e47a2b5935db3918178": function AS_Button_c705060a01054e47a2b5935db3918178(eventobject) {
        var self = this;
        this.showSignUp1();
    },
    "AS_Form_f5d1f23a29144f548e9ae80ded8bdb45": function AS_Form_f5d1f23a29144f548e9ae80ded8bdb45(eventobject) {
        var self = this;
        this.disappearLogin();
    },
    "AS_Form_b72a6a8503aa4574838196deadce32ad": function AS_Form_b72a6a8503aa4574838196deadce32ad(eventobject) {
        var self = this;
        this.showLoginPannel();
    }
})