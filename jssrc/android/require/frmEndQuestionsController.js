define({
    "endQuestionsFormComplete": function() {
        // where to go to depends on where we've been
        // where are we in the process?  just made an appointment?
        // chosen all the featrues we want?
        // if we've just selected appointment...
        kony.print("***** successFormContinue ");
        var nvf = new kony.mvc.Navigation("frmSpalsh");
        nvf.navigate();
    },
    "AS_FlexContainer_d53ba6f4da9d49c1b58ee8f9ea6fa54e": function AS_FlexContainer_d53ba6f4da9d49c1b58ee8f9ea6fa54e(eventobject) {
        var self = this;
        this.showBackSignUp3();
    },
    "AS_Button_ada5f389f5334dbe9696d656165791cc": function AS_Button_ada5f389f5334dbe9696d656165791cc(eventobject) {
        var self = this;
        this.endQuestionsFormComplete();
    }
})