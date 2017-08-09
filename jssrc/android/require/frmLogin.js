define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
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
            var flxScrollMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": false,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollMain.setDefaultUnit(kony.flex.DP);
            var flxSignUp1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75%",
                "id": "flxSignUp1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "flxTrans",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSignUp1.setDefaultUnit(kony.flex.DP);
            var lblPersonalDetails = new kony.ui.Label({
                "id": "lblPersonalDetails",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0a49bd72542db4e",
                "text": "Log in as an existing customer",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "14%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblScanOrEnter = new kony.ui.Label({
                "id": "lblScanOrEnter",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0de267c05efd74a",
                "text": "If you already have a TDECU account, log in using your TDECU account credentials.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15%",
                "id": "flxName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxName.setDefaultUnit(kony.flex.DP);
            var lblName = new kony.ui.Label({
                "id": "lblName",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0b28f2fb13b7046",
                "text": "Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxTextWhite",
                "height": "40dp",
                "id": "tbxName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "tbxTextWhite",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "tbxTextWhite",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var CopyflxLine0a2b47bec85a44e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0a2b47bec85a44e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "flxWhiteBG",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0a2b47bec85a44e.setDefaultUnit(kony.flex.DP);
            CopyflxLine0a2b47bec85a44e.add();
            flxName.add(lblName, tbxName, CopyflxLine0a2b47bec85a44e);
            var flxPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15%",
                "id": "flxPassword",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPassword.setDefaultUnit(kony.flex.DP);
            var lblPassword = new kony.ui.Label({
                "id": "lblPassword",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0b28f2fb13b7046",
                "text": "Password",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxLine0ad08d785dd7f44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "CopyflxLine0ad08d785dd7f44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "flxTrans",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0ad08d785dd7f44.setDefaultUnit(kony.flex.DP);
            var tbxPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxTextWhite",
                "height": "40dp",
                "id": "tbxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "maxTextLength": null,
                "secureTextEntry": true,
                "skin": "tbxTextWhite",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "tbxTextWhite",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgView = new kony.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgView",
                "isVisible": true,
                "right": "2%",
                "skin": "slImage",
                "src": "icon_eye.png",
                "width": "45dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxLine0ad08d785dd7f44.add(tbxPassword, imgView);
            var CopyflxLine0db316916689546 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0db316916689546",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "flxWhiteBG",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0db316916689546.setDefaultUnit(kony.flex.DP);
            CopyflxLine0db316916689546.add();
            flxPassword.add(lblPassword, CopyflxLine0ad08d785dd7f44, CopyflxLine0db316916689546);
            var btnCreateAccount = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnFocus125",
                "height": "50dp",
                "id": "btnCreateAccount",
                "isVisible": true,
                "skin": "btnFocus125",
                "text": "Log in",
                "top": "10%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnActivate = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnNormal125",
                "height": "50dp",
                "id": "btnActivate",
                "isVisible": true,
                "onClick": controller.AS_Button_j9c2c5401ca246488ad9c87a66b6c044,
                "skin": "btnNormal125",
                "text": "Activate",
                "top": "2%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSignUp1.add(lblPersonalDetails, lblScanOrEnter, flxName, flxPassword, btnCreateAccount, btnActivate);
            var FlexContainer0ebe11cbcbda840 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25%",
                "id": "FlexContainer0ebe11cbcbda840",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "flxWhiteBG",
                "top": "75.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0ebe11cbcbda840.setDefaultUnit(kony.flex.DP);
            var flxFB = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxFB",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "15%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFB.setDefaultUnit(kony.flex.DP);
            var btnFacebook = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnFacebook",
                "height": "50dp",
                "id": "btnFacebook",
                "isVisible": true,
                "skin": "btnFacebook",
                "text": "Log in with Facebook",
                "top": "5%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgFB = new kony.ui.Image2({
                "centerY": "50%",
                "height": "45dp",
                "id": "imgFB",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "icon_facebook_f.png",
                "width": "45dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFB.add(btnFacebook, imgFB);
            FlexContainer0ebe11cbcbda840.add(flxFB);
            flxScrollMain.add(flxSignUp1, FlexContainer0ebe11cbcbda840);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_fa88d2e0de8949e9addfde3996c9143b,
                "skin": "slFbox",
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "35dp",
                "id": "imgBack",
                "isVisible": true,
                "left": 0,
                "skin": "slImage",
                "src": "icon_back.png",
                "top": 0,
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            flxMain.add(flxScrollMain, flxBack);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0he24d43dc34842"
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