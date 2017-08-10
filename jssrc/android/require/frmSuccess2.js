define("frmSuccess2", function() {
    return function(controller) {
        function addWidgetsfrmSuccess2() {
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "top": "10%",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "90.67%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0ad6803d95d3340 = new kony.ui.Label({
                "centerX": "50%",
                "id": "CopyLabel0ad6803d95d3340",
                "isVisible": true,
                "left": "3%",
                "skin": "CopyslLabel0c885f093938a4f",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Button0fab60115ba8346 = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "50dp",
                "id": "Button0fab60115ba8346",
                "isVisible": true,
                "left": "60dp",
                "onClick": controller.AS_Button_edc74df532904caa9a179af00496b6dd,
                "skin": "CopybtnRed0d4652c5539f744",
                "text": "CONTINUE",
                "top": "10%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSuccessMessage.add(lblMessage, CopyLabel0ad6803d95d3340, Button0fab60115ba8346);
            successContainer.add(FlexContainer09d07d8fed6c64b, lblProcessing, flxSuccessMessage);
            this.add(successContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmSuccess2,
            "enabledForIdleTimeout": false,
            "id": "frmSuccess2",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d55f1984d9374106bbb65a314b601d95,
            "preShow": controller.AS_Form_a5ebd3a4d9ce4e31a68e848450090562,
            "skin": "CopyslForm0e8ebb8fc79834b"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});