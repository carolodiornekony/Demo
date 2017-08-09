define("frmSpalsh", function() {
    return function(controller) {
        function addWidgetsfrmSpalsh() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "flxBlackBlur",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxSplash = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSplash",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSplash.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "centerX": "50%",
                "height": "80dp",
                "id": "imgLogo",
                "isVisible": true,
                "skin": "slImage",
                "src": "tdecu_logo_white.png",
                "top": "10%",
                "width": "220dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblWelcome = new kony.ui.Label({
                "centerX": "50%",
                "height": "5%",
                "id": "lblWelcome",
                "isVisible": true,
                "skin": "lblWhite135",
                "text": "WELCOME TO",
                "top": "5%",
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
            var lblDConnect = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDConnect",
                "isVisible": true,
                "skin": "lblWhite235",
                "text": "Account Creation",
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
            var CopylblWelcome0dc024be50c7949 = new kony.ui.Label({
                "centerX": "50%",
                "id": "CopylblWelcome0dc024be50c7949",
                "isVisible": true,
                "skin": "lblWhite100",
                "text": "Together we improve lives.",
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnExistingCustomer = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnFocus125",
                "height": "50dp",
                "id": "btnExistingCustomer",
                "isVisible": true,
                "onClick": controller.AS_Button_g141aca5da1940749fa4eb3caeae8e8d,
                "skin": "btnFocus125",
                "text": "I am a TDECU customer",
                "top": "20%",
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
            var btnNewCustomer = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnNormal125",
                "height": "50dp",
                "id": "btnNewCustomer",
                "isVisible": true,
                "onClick": controller.AS_Button_c705060a01054e47a2b5935db3918178,
                "skin": "btnNormal125",
                "text": "I am a new customer",
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
            var flxConnect = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "flxConnect",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConnect.setDefaultUnit(kony.flex.DP);
            var RichText0fe3fa7f107a247 = new kony.ui.RichText({
                "bottom": 0,
                "id": "RichText0fe3fa7f107a247",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslRichText0db4f71c81f3745",
                "text": "<u>What can I do with Account Creation?</u>\n\n",
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
            flxConnect.add(RichText0fe3fa7f107a247);
            flxSplash.add(imgLogo, lblWelcome, lblDConnect, CopylblWelcome0dc024be50c7949, btnExistingCustomer, btnNewCustomer, flxConnect);
            var flxLogin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLogin",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLogin.setDefaultUnit(kony.flex.DP);
            flxLogin.add();
            flxMain.add(flxSplash, flxLogin);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSpalsh,
            "enabledForIdleTimeout": false,
            "id": "frmSpalsh",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_b72a6a8503aa4574838196deadce32ad,
            "preShow": controller.AS_Form_f5d1f23a29144f548e9ae80ded8bdb45,
            "skin": "frmSplashBG",
            "statusBarHidden": true
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