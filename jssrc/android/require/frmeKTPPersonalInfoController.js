define({
    "showLoginflx": function() {
        this.view.flxLogin.isVisible = true;
    },
    "onBackNav": function() {
        var nvf = new kony.mvc.Navigation("frmeKTPInstructions");
        nvf.navigate();
    },
    "onClickNext": function() {
        var nvf = new kony.mvc.Navigation("frmeKTPAddress");
        nvf.navigate();
    },
    "AS_FlexContainer_a48dd8418a2642d797c4b642f1e6f3d0": function AS_FlexContainer_a48dd8418a2642d797c4b642f1e6f3d0(eventobject) {
        var self = this;
        this.onBackNav();
    },
    "AS_Button_f2b0019b38694ca887a51961e66cc14a": function AS_Button_f2b0019b38694ca887a51961e66cc14a(eventobject) {
        var self = this;
        this.onClickNext();
    }
})