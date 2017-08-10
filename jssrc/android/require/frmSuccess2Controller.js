define({
    "onNavigate": function(obj) {
        this.view.lblMessage.text = obj.message;
    },
    "successFormPreShow": function() {
        this.view.flxSuccessMessage.opacity = 0;
        this.view.successImage.opacity = 0;
    },
    "successFormPostShow": function() {
        var self = this;
        var transformSuccess1 = kony.ui.makeAffineTransform();
        transformSuccess1.scale(0.6, 0.6);
        var transformSuccess2 = kony.ui.makeAffineTransform();
        transformSuccess2.scale(0.75, 0.75);
        var transformSuccess3 = kony.ui.makeAffineTransform();
        transformSuccess3.scale(1.1, 1.1);
        var transformSuccess4 = kony.ui.makeAffineTransform();
        transformSuccess4.scale(1.0, 1.0);
        this.view.successIcon.animate(kony.ui.createAnimation({
            "0": {
                "transform": transformSuccess1,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            },
            "15": {
                "transform": transformSuccess2,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            },
            "30": {
                "transform": transformSuccess1,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            },
            "45": {
                "transform": transformSuccess2,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            },
            "60": {
                "transform": transformSuccess1,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            },
            "80": {
                "transform": transformSuccess3,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            },
            "100": {
                "transform": transformSuccess4,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            }
        }), {
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 4.0,
            "delay": 0
        }, {
            "animationStart": function() {},
            "animationEnd": function() {}
        });
        this.view.successImage.animate(kony.ui.createAnimation({
            "0": {
                "transform": transformSuccess1,
                "opacity": 0,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            },
            "60": {
                "transform": transformSuccess3,
                "opacity": 0.8,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            },
            "100": {
                "transform": transformSuccess4,
                "opacity": 1,
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN
                }
            }
        }), {
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1.0,
            "delay": 2.6
        }, {
            "animationEnd": function() {
                self.view.flxSuccessMessage.animate(kony.ui.createAnimation({
                    "100": {
                        "opacity": .9,
                        "stepConfig": {
                            "timingFunction": kony.anim.EASIN_IN
                        }
                    }
                }), {
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0.3,
                    "delay": 0.2
                }, {
                    "animationEnd": function() {}
                });
            }
        });
    },
    "successFormContinue": function() {
        // where to go to depends on where we've been
        // where are we in the process?  just made an appointment?
        // chosen all the featrues we want?
        // if we've just selected appointment...
        kony.print("***** successFormContinue ");
        var nvf = new kony.mvc.Navigation("frmEndQuestions");
        nvf.navigate();
    },
    "AS_Form_a5ebd3a4d9ce4e31a68e848450090562": function AS_Form_a5ebd3a4d9ce4e31a68e848450090562(eventobject) {
        var self = this;
        this.successFormPreShow();
    },
    "AS_Form_d55f1984d9374106bbb65a314b601d95": function AS_Form_d55f1984d9374106bbb65a314b601d95(eventobject) {
        var self = this;
        this.successFormPostShow();
    }
})