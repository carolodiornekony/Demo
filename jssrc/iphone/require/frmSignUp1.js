define("frmSignUp1", function() {
    return function(controller) {
        function addWidgetsfrmSignUp1() {
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
                "text": "SIGN UP",
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
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_jea85e2673f942c783209a6cf9635e47,
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
            flxHeading1.add(lblWelcome, flxBack);
            var flxHeading2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxHeading2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "flxBlackBlur",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeading2.setDefaultUnit(kony.flex.DP);
            var lblSteps = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSteps",
                "isVisible": true,
                "left": "6%",
                "skin": "lblWhite100",
                "text": "STEP 1 OF 4",
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
            var flxLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "35%",
                "skin": "flxBlackBlurRound",
                "top": "1dp",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxLine.setDefaultUnit(kony.flex.DP);
            var lblLine = new kony.ui.Label({
                "centerY": "50%",
                "height": "50%",
                "id": "lblLine",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslLabel0c72c76a26a744a",
                "top": "0dp",
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxLine.add(lblLine);
            flxHeading2.add(lblSteps, flxLine);
            flxHeader.add(flxHeading1, flxHeading2);
            var flxScrollMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": false,
                "height": "82%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "slFSbox",
                "top": "18%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollMain.setDefaultUnit(kony.flex.DP);
            var flxSignUp1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSignUp1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "flxWhiteBG",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSignUp1.setDefaultUnit(kony.flex.DP);
            var lblPersonalDetails = new kony.ui.Label({
                "id": "lblPersonalDetails",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGrey155",
                "text": "Enter your personal details ",
                "top": "4%",
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
            var flxName = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "10%",
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
                "height": "40%",
                "id": "lblName",
                "isVisible": true,
                "left": "6.00%",
                "skin": "lblGreyNew",
                "text": "Name",
                "top": "0.00%",
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
            var tbxName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "50%",
                "id": "tbxName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "tbxNormal",
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
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "tbxNormal",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
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
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0a2b47bec85a44e.setDefaultUnit(kony.flex.DP);
            CopyflxLine0a2b47bec85a44e.add();
            flxName.add(lblName, tbxName, CopyflxLine0a2b47bec85a44e);
            var DLNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "DLNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            DLNumber.setDefaultUnit(kony.flex.DP);
            var lblDL = new kony.ui.Label({
                "height": "40%",
                "id": "lblDL",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGreyNew",
                "text": "DL#",
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
            var tbxDL = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "50%",
                "id": "tbxDL",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
                "left": "6%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "tbxNormal",
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
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "tbxNormal",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var CopyflxLine0ec8cf0aff39946 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0ec8cf0aff39946",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0ec8cf0aff39946.setDefaultUnit(kony.flex.DP);
            CopyflxLine0ec8cf0aff39946.add();
            DLNumber.add(lblDL, tbxDL, CopyflxLine0ec8cf0aff39946);
            var flxAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAddress.setDefaultUnit(kony.flex.DP);
            var lblAddress = new kony.ui.Label({
                "height": "40%",
                "id": "lblAddress",
                "isVisible": true,
                "left": "6.00%",
                "skin": "lblGreyNew",
                "text": "Address",
                "top": "0.00%",
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
            var CopyflxLine0ad08d785dd7f44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "CopyflxLine0ad08d785dd7f44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "flxWhiteBG",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0ad08d785dd7f44.setDefaultUnit(kony.flex.DP);
            var tbxAddress = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "100%",
                "id": "tbxAddress",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "tbxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "tbxNormal",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxLine0ad08d785dd7f44.add(tbxAddress);
            var CopyflxLine0db316916689546 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0db316916689546",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0db316916689546.setDefaultUnit(kony.flex.DP);
            CopyflxLine0db316916689546.add();
            flxAddress.add(lblAddress, CopyflxLine0ad08d785dd7f44, CopyflxLine0db316916689546);
            var btnCreateAccount = new kony.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "btnYellow",
                "height": "50dp",
                "id": "btnCreateAccount",
                "isVisible": true,
                "onClick": controller.AS_Button_da4e4149ba3448fc85d9bac0d4766af5,
                "skin": "btnYellow",
                "text": "Create account",
                "top": "5.00%",
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
            var btnDLCreateAccount = new kony.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "btnYellow",
                "height": "50dp",
                "id": "btnDLCreateAccount",
                "isVisible": true,
                "onClick": controller.AS_Button_b61bfba671cc4d6da3159c02ac4a8e47,
                "skin": "btnYellow",
                "text": "Create account with Driver's License",
                "top": "5.00%",
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
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var CopyflxLine0fedb690a9b3c49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0fedb690a9b3c49",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0fedb690a9b3c49.setDefaultUnit(kony.flex.DP);
            CopyflxLine0fedb690a9b3c49.add();
            var CopyflxLine0eecfa0ab399e4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0eecfa0ab399e4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "5%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0eecfa0ab399e4b.setDefaultUnit(kony.flex.DP);
            CopyflxLine0eecfa0ab399e4b.add();
            var CopylblWelcome0d1cf33e59e9945 = new kony.ui.Label({
                "centerX": "50.05%",
                "centerY": "50.00%",
                "id": "CopylblWelcome0d1cf33e59e9945",
                "isVisible": true,
                "skin": "CopylblWhite0c54aa3f4aba243",
                "text": "OR",
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
            flxOr.add(CopyflxLine0fedb690a9b3c49, CopyflxLine0eecfa0ab399e4b, CopylblWelcome0d1cf33e59e9945);
            var flxFB = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxFB",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFB.setDefaultUnit(kony.flex.DP);
            var btnFacebook = new kony.ui.Button({
                "centerX": "50.03%",
                "focusSkin": "btnFacebook",
                "height": "50dp",
                "id": "btnFacebook",
                "isVisible": true,
                "skin": "btnFacebook",
                "text": "Sign up with Facebook",
                "top": "-6.06%",
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
            flxSignUp1.add(lblPersonalDetails, flxName, DLNumber, flxAddress, btnCreateAccount, btnDLCreateAccount, flxOr, flxFB);
            flxScrollMain.add(flxSignUp1);
            flxMain.add(flxHeader, flxScrollMain);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSignUp1,
            "enabledForIdleTimeout": false,
            "id": "frmSignUp1",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "frmNormalBG"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": true,
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