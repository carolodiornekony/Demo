define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("frmAccountCreated", "frmAccountCreated", "frmAccountCreatedController");
        kony.mvc.registry.add("frmAppointmentAddress", "frmAppointmentAddress", "frmAppointmentAddressController");
        kony.mvc.registry.add("frmAppointmentMap", "frmAppointmentMap", "frmAppointmentMapController");
        kony.mvc.registry.add("frmBizCardCamera", "frmBizCardCamera", "frmBizCardCameraController");
        kony.mvc.registry.add("frmBizCardInstructions", "frmBizCardInstructions", "frmBizCardInstructionsController");
        kony.mvc.registry.add("frmBizCardManual", "frmBizCardManual", "frmBizCardManualController");
        kony.mvc.registry.add("frmBizDetails", "frmBizDetails", "frmBizDetailsController");
        kony.mvc.registry.add("frmConfirmPIN", "frmConfirmPIN", "frmConfirmPINController");
        kony.mvc.registry.add("frmDeliveryAddress", "frmDeliveryAddress", "frmDeliveryAddressController");
        kony.mvc.registry.add("frmDrvLicenseCamera", "frmDrvLicenseCamera", "frmDrvLicenseCameraController");
        kony.mvc.registry.add("frmEndQuestions", "frmEndQuestions", "frmEndQuestionsController");
        kony.mvc.registry.add("frmEnterPIN", "frmEnterPIN", "frmEnterPINController");
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmSetPIN", "frmSetPIN", "frmSetPINController");
        kony.mvc.registry.add("frmSignUp1", "frmSignUp1", "frmSignUp1Controller");
        kony.mvc.registry.add("frmSignUp2", "frmSignUp2", "frmSignUp2Controller");
        kony.mvc.registry.add("frmSignUp3", "frmSignUp3", "frmSignUp3Controller");
        kony.mvc.registry.add("frmSignUp4", "frmSignUp4", "frmSignUp4Controller");
        kony.mvc.registry.add("frmSignUp4A", "frmSignUp4A", "frmSignUp4AController");
        kony.mvc.registry.add("frmSpalsh", "frmSpalsh", "frmSpalshController");
        kony.mvc.registry.add("frmSuccess2", "frmSuccess2", "frmSuccess2Controller");
        kony.mvc.registry.add("frmVerificationSuccessful", "frmVerificationSuccessful", "frmVerificationSuccessfulController");
        kony.mvc.registry.add("frmVerificationSucess", "frmVerificationSucess", "frmVerificationSucessController");
        kony.mvc.registry.add("frmVerifyFingerPrint", "frmVerifyFingerPrint", "frmVerifyFingerPrintController");
        kony.mvc.registry.add("frmVideoCallBack", "frmVideoCallBack", "frmVideoCallBackController");
        kony.mvc.registry.add("frmVideoChat", "frmVideoChat", "frmVideoChatController");
        kony.mvc.registry.add("frmeKTPAddress", "frmeKTPAddress", "frmeKTPAddressController");
        kony.mvc.registry.add("frmeKTPCamera", "frmeKTPCamera", "frmeKTPCameraController");
        kony.mvc.registry.add("frmeKTPInstructions", "frmeKTPInstructions", "frmeKTPInstructionsController");
        kony.mvc.registry.add("frmeKTPManual", "frmeKTPManual", "frmeKTPManualController");
        kony.mvc.registry.add("frmeKTPPersonalInfo", "frmeKTPPersonalInfo", "frmeKTPPersonalInfoController");
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmSpalsh").navigate();
    }
});