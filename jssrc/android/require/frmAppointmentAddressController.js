define({
    "OnDoneVerification": function() {
        var ntf = new kony.mvc.Navigation("frmSuccess2");
        ntf.navigate({
            "message": "Your appointment has been confirmed."
        });
    },
    "setCurrentDate": function() {
        var date1 = new Date();
        this.view.Calendar0aacc098676af4a.dateComponents = [date1.getDate(), date1.getMonth() + 1, date1.getFullYear()];
    },
    "showSignUp2": function() {
        var ntf = new kony.mvc.Navigation("frmSignUp2");
        ntf.navigate();
    },
    "showBackLogin": function() {
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    "onNavigate": function(obj) {
        if (obj == null || obj == undefined) {} else {
            this.view.flxLine1.skin = obj.lineSkin;
            this.view.flxLine2.skin = obj.lineSkin;
            this.view.lblTimeH.skin = obj.labelskin;
            this.view.lblDay.skin = obj.labelskin;
        }
    },
    "onStartCal": function() {
        this.view.flxLine1.skin = "lineGreen";
        this.view.lblDay.skin = "sknlblGreen";
    },
    "onEndCal": function() {
        this.view.flxLine1.skin = "lineGrey";
        this.view.lblDay.skin = "lblGreyNew";
    },
    "onStartTime": function() {
        this.view.flxLine2.skin = "lineGreen";
        this.view.lblTimeH.skin = "sknlblGreen";
    },
    "onEndTime": function() {
        this.view.flxLine2.skin = "lineGrey";
        this.view.lblTimeH.skin = "lblGreyNew";
    },
    "spinnerAnimation": function() {
        this.view.flxTrans.isVisible = true;
        this.view["flxSpinner"].animate(kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "bottom": "0%"
            }
        }), {
            "delay": 0,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {}
        });
    },
    "spinnerReverseAnimation": function() {
        var self = this;
        this.view["flxSpinner"].animate(kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "bottom": "-50%"
            }
        }), {
            "delay": 0,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.3
        }, {
            "animationEnd": function() {
                self.view.flxTrans.isVisible = false;
                self.onEndTime();
            }
        });
    },
    "setTimeValue": function() {
        hours = this.view.pckTime.selectedKeyValues[1][1];
        mins = this.view.pckTime.selectedKeyValues[2][1];
        meridian = this.view.pckTime.selectedKeyValues[3][1];
        this.view.lblTime.text = hours + ":" + mins + " " + meridian;
        this.spinnerReverseAnimation();
    },
    "mapData123": function() {
        this.view.Addressmap123.locationData = [{
            lat: "29.716131",
            lon: "-95.388718",
            name: "TDECU",
            desc: "TDECU",
            image: "pin.png"
        }];
    },
    "showAppoinmentMap": function() {
        var ntf = new kony.mvc.Navigation("frmAppointmentMap");
        ntf.navigate();
    },
    "showSplashPage": function() {
        var ntf = new kony.mvc.Navigation("frmSpalsh");
        ntf.navigate();
    },
    "AS_FlexContainer_fd783cc082e44a6cbbae32291b2e48b4": function AS_FlexContainer_fd783cc082e44a6cbbae32291b2e48b4(eventobject) {
        var self = this;
        this.showAppoinmentMap();
    },
    "AS_Calendar_cf074c5dda074db0930ee68330292bac": function AS_Calendar_cf074c5dda074db0930ee68330292bac(eventobject, isValidDateSelected) {
        var self = this;
        this.onEndCal();
    },
    "AS_Calendar_c652f61081474481bd678ddcdd123895": function AS_Calendar_c652f61081474481bd678ddcdd123895(eventobject, x, y) {
        var self = this;
        this.onStartCal();
    },
    "AS_Label_ibd061007b4f4c6fae204d529436a36c": function AS_Label_ibd061007b4f4c6fae204d529436a36c(eventobject, x, y) {
        var self = this;
        this.onStartTime();
    },
    "AS_Label_e3428eaec82c4090b9475936b8344313": function AS_Label_e3428eaec82c4090b9475936b8344313(eventobject, x, y) {
        var self = this;
        this.spinnerAnimation();
    },
    "AS_Button_dfdae811fcce4478a50efe4e547e3a15": function AS_Button_dfdae811fcce4478a50efe4e547e3a15(eventobject) {
        var self = this;
        this.OnDoneVerification();
    },
    "AS_Form_hce4215fbcb44ea596db621308dfd28f": function AS_Form_hce4215fbcb44ea596db621308dfd28f(eventobject) {
        var self = this;
        this.setCurrentDate();
        this.mapData123();
    }
})