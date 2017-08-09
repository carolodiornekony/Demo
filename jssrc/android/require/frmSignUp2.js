define("frmSignUp2", function() {
    return function(controller) {
        function addWidgetsfrmSignUp2() {
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_bff7dab17bdb4f32991976f1c97e3db9,
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
                "text": "STEP 2 OF 4",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "8dp",
                "id": "flxLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "33.33%",
                "skin": "flxBlackBlurRound",
                "top": "1dp",
                "width": "56.00%",
                "zIndex": 1
            }, {}, {});
            flxLine.setDefaultUnit(kony.flex.DP);
            var lblLine = new kony.ui.Label({
                "centerY": "50%",
                "height": "60%",
                "id": "lblLine",
                "isVisible": true,
                "left": "-1%",
                "skin": "CopyslLabel0c72c76a26a744a",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
            var flxSignUp2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSignUp2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "flxWhiteBG",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSignUp2.setDefaultUnit(kony.flex.DP);
            var CopylblPersonalDetails0g7976054706245 = new kony.ui.Label({
                "id": "CopylblPersonalDetails0g7976054706245",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGrey155",
                "text": "Enter your mobile number",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
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
                "skin": "CopylblGrey0a9a93836920541",
                "text": "We will use your mobile number to verify your device and future account transactions ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxMobileNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "flxMobileNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "20%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMobileNumber.setDefaultUnit(kony.flex.DP);
            var CopylblName0a43ab54ae9a94b = new kony.ui.Label({
                "id": "CopylblName0a43ab54ae9a94b",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0i36ffb765a4344",
                "text": "Mobile number",
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
            var tbxMobileNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "40dp",
                "id": "tbxMobileNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_PHONE_PAD,
                "left": "6%",
                "maxTextLength": 12,
                "secureTextEntry": false,
                "skin": "tbxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
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
                "onBeginEditing": controller.AS_TextField_jd9ac9392595414cb116b5061a1aab2c,
                "onEndEditing": controller.AS_TextField_e5c108893ae34eb0a7ea6673fa73e11c,
                "placeholderSkin": "tbxNormal",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var CopyflxLine0g6c884a7ce0848 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0g6c884a7ce0848",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "CopyflxWhiteBG0e859319107734e",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0g6c884a7ce0848.setDefaultUnit(kony.flex.DP);
            CopyflxLine0g6c884a7ce0848.add();
            flxMobileNumber.add(CopylblName0a43ab54ae9a94b, tbxMobileNumber, CopyflxLine0g6c884a7ce0848);
            var CopyflxLinkedIn0a763bb9a77294d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "CopyflxLinkedIn0a763bb9a77294d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "87%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxLinkedIn0a763bb9a77294d.setDefaultUnit(kony.flex.DP);
            var CopybtnCreateAccount0d25f5eee1bdd40 = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnYellow",
                "height": "50dp",
                "id": "CopybtnCreateAccount0d25f5eee1bdd40",
                "isVisible": true,
                "onClick": controller.AS_Button_gb68c35188e64386bf243880e4a1caff,
                "skin": "btnYellow",
                "text": "Continue",
                "top": "5%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxLinkedIn0a763bb9a77294d.add(CopybtnCreateAccount0d25f5eee1bdd40);
            var flxEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxEmail",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "34.87%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmail.setDefaultUnit(kony.flex.DP);
            var lblEmail = new kony.ui.Label({
                "id": "lblEmail",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGreyNew",
                "text": "Email",
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
            var tbxEmail = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "29dp",
                "id": "tbxEmail",
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
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "tbxNormal",
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
            flxEmail.add(lblEmail, tbxEmail, CopyflxLine0ec8cf0aff39946);
            var flxPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxPassword",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "49.01%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPassword.setDefaultUnit(kony.flex.DP);
            var lblPassword = new kony.ui.Label({
                "id": "lblPassword",
                "isVisible": true,
                "left": "6.00%",
                "skin": "lblGreyNew",
                "text": "Password",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0.00%",
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
                "skin": "flxWhiteBG",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0ad08d785dd7f44.setDefaultUnit(kony.flex.DP);
            var tbxPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "25dp",
                "id": "tbxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "maxTextLength": null,
                "secureTextEntry": true,
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
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "tbxNormal",
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
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0db316916689546.setDefaultUnit(kony.flex.DP);
            CopyflxLine0db316916689546.add();
            flxPassword.add(lblPassword, CopyflxLine0ad08d785dd7f44, CopyflxLine0db316916689546);
            flxSignUp2.add(CopylblPersonalDetails0g7976054706245, lblScanOrEnter, flxMobileNumber, CopyflxLinkedIn0a763bb9a77294d, flxEmail, flxPassword);
            flxScrollMain.add(flxSignUp2);
            flxMain.add(flxHeader, flxScrollMain);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSignUp2,
            "enabledForIdleTimeout": false,
            "id": "frmSignUp2",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "frmNormalBG"
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