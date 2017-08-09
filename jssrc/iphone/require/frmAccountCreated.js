define("frmAccountCreated", function() {
    return function(controller) {
        function addWidgetsfrmAccountCreated() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeading1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxHeading1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeading1.setDefaultUnit(kony.flex.DP);
            var lblWelcome = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblWelcome",
                "isVisible": true,
                "skin": "lblWhite135",
                "text": "ACCOUNT CREATED",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgBack",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "icon_menu.png",
                "top": 0,
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            flxHeading1.add(lblWelcome, flxBack);
            flxHeader.add(flxHeading1);
            var flxSignUp1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "91%",
                "id": "flxSignUp1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "flxWhiteBG",
                "top": "9%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSignUp1.setDefaultUnit(kony.flex.DP);
            var Image0f2415cf0719342 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "27.16%",
                "id": "Image0f2415cf0719342",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "big_icon_ok.png",
                "top": "3%",
                "width": "100.00%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblPersonalDetails = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPersonalDetails",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGrey155",
                "text": "Account created successfully!",
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblScanOrEnter = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblScanOrEnter",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0a9a93836920541",
                "text": "Before you can use the account, we will need to verify your identity. You can choose to visit your nearest branch or chat with our friendly customer service agent for immediate verification.",
                "top": "1%",
                "width": "70.67%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnCreateAccount = new kony.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "btnYellow",
                "height": "50dp",
                "id": "btnCreateAccount",
                "isVisible": true,
                "onClick": controller.AS_Button_d58b89f6f30d473489d1b2b8e0699550,
                "skin": "btnYellow",
                "text": "Verify in branch",
                "top": "5%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var CopybtnCreateAccount0a4b63aa62f8a40 = new kony.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "btnYellow",
                "height": "50dp",
                "id": "CopybtnCreateAccount0a4b63aa62f8a40",
                "isVisible": true,
                "onClick": controller.AS_Button_i25ce908f4554dc589ba8a77750b03ef,
                "skin": "btnYellow",
                "text": "Verify via video chat",
                "top": "2%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var RichText0fe3fa7f107a247 = new kony.ui.RichText({
                "bottom": 0,
                "height": "10%",
                "id": "RichText0fe3fa7f107a247",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslRichText0cffff764831044",
                "text": "<u>Skip</u>",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSignUp1.add(Image0f2415cf0719342, lblPersonalDetails, lblScanOrEnter, btnCreateAccount, CopybtnCreateAccount0a4b63aa62f8a40, RichText0fe3fa7f107a247);
            flxMain.add(flxHeader, flxSignUp1);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAccountCreated,
            "enabledForIdleTimeout": false,
            "id": "frmAccountCreated",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "frmNormalBG"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": true,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "statusBarStyle": constants.STATUS_BAR_STYLE_LIGHT_CONTENT,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});