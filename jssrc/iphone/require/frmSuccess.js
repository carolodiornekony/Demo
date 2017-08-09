define("frmSuccess", function() {
    return function(controller) {
        function addWidgetsfrmSuccess() {
            this.setDefaultUnit(kony.flex.DP);
            var successContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "successContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "skntitleBarGradient0i8edaa8653324e",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            successContainer.setDefaultUnit(kony.flex.DP);
            var FlexContainer09d07d8fed6c64b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "40%",
                "clipBounds": false,
                "height": "60dp",
                "id": "FlexContainer09d07d8fed6c64b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "sknslFbox0h13f77f4d76243",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer09d07d8fed6c64b.setDefaultUnit(kony.flex.DP);
            var successIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "60dp",
                "id": "successIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknsuccessIcon0feedb1ac2a4e46",
                "top": "4dp",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            successIcon.setDefaultUnit(kony.flex.DP);
            var successImage = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "successImage",
                "isVisible": true,
                "skin": "sknslImage0babaf9c3747747",
                "src": "success_large_check.png",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            successIcon.add(successImage);
            FlexContainer09d07d8fed6c64b.add(successIcon);
            var lblProcessing = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblProcessing",
                "isVisible": false,
                "left": "3%",
                "skin": "CopyslLabel0c885f093938a4f",
                "text": "Processing...",
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSuccessMessage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "200dp",
                "id": "flxSuccessMessage",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "sknslFbox0h13f77f4d76243",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSuccessMessage.setDefaultUnit(kony.flex.DP);
            var lblMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblMessage",
                "isVisible": true,
                "left": "3%",
                "skin": "lblGrey155",
                "text": "Your ATM card will be delivered to mentioned address.",
                "top": "4%",
                "width": "90.67%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopyLabel0ad6803d95d3340 = new kony.ui.Label({
                "centerX": "50%",
                "id": "CopyLabel0ad6803d95d3340",
                "isVisible": true,
                "left": "3%",
                "skin": "CopyslLabel0c885f093938a4f",
                "top": "4%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnNew = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "40%",
                "focusSkin": "btnRed0ffaaa3bdb21b48",
                "height": "45dp",
                "id": "btnNew",
                "isVisible": true,
                "onClick": controller.AS_Button_g424146c6e4f4d8fb9e3d64b56db5fcb,
                "right": "6%",
                "skin": "btnRed0ffaaa3bdb21b48",
                "text": "CONTINUE",
                "top": "10%",
                "width": "62%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxSuccessMessage.add(lblMessage, CopyLabel0ad6803d95d3340, btnNew);
            successContainer.add(FlexContainer09d07d8fed6c64b, lblProcessing, flxSuccessMessage);
            this.add(successContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmSuccess,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmSuccess",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_f9d0740dcc1e4587b1084fa5b98d96a3,
            "preShow": controller.AS_Form_f943acb65adc4bb9b1193530c483f2fa,
            "skin": "CopyfrmNormalBG0gb207e72dcde4d",
            "statusBarHidden": false
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NEXTPREV,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});