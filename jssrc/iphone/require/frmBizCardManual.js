define("frmBizCardManual", function() {
    return function(controller) {
        function addWidgetsfrmBizCardManual() {
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
                "text": "CREATE AN ACCOUNT",
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
                "onClick": controller.AS_FlexContainer_e83f962e0e56403a828808096c20c6eb,
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
                "text": "STEP 6 OF 7",
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
                "height": "8dp",
                "id": "flxLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30%",
                "skin": "flxBlackBlurRound",
                "top": "1dp",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxLine.setDefaultUnit(kony.flex.DP);
            var lblLine = new kony.ui.Label({
                "centerY": "50%",
                "height": "110%",
                "id": "lblLine",
                "isVisible": true,
                "left": "-1%",
                "skin": "CopyslLabel0c72c76a26a744a",
                "top": "0dp",
                "width": "84%",
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
            var flxSignUp2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "82%",
                "id": "flxSignUp2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "flxWhiteBG",
                "top": "18%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSignUp2.setDefaultUnit(kony.flex.DP);
            var CopylblPersonalDetails0g7976054706245 = new kony.ui.Label({
                "id": "CopylblPersonalDetails0g7976054706245",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGrey155",
                "text": "Enter business card number",
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
            var CopyflxName0b5829703e27544 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxName0b5829703e27544",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxName0b5829703e27544.setDefaultUnit(kony.flex.DP);
            var CopylblName0a43ab54ae9a94b = new kony.ui.Label({
                "id": "CopylblName0a43ab54ae9a94b",
                "isVisible": true,
                "left": "6%",
                "skin": "sknlblGreen",
                "text": "Business Card Number",
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
            var tbxeKTP = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "40dp",
                "id": "tbxeKTP",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "6%",
                "maxTextLength": 16,
                "onDone": controller.AS_TextField_i048bff89c4c49da917f299f48921064,
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
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "onBeginEditing": controller.AS_TextField_d9b4b32cc4d241beae49f97756072856,
                "onEndEditing": controller.AS_TextField_fe34a27a1bbc4306a2ddfbbc238051b7,
                "placeholderSkin": "tbxNormal",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
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
                "skin": "lineGreen",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0g6c884a7ce0848.setDefaultUnit(kony.flex.DP);
            CopyflxLine0g6c884a7ce0848.add();
            CopyflxName0b5829703e27544.add(CopylblName0a43ab54ae9a94b, tbxeKTP, CopyflxLine0g6c884a7ce0848);
            var CopyflxLinkedIn0a763bb9a77294d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "CopyflxLinkedIn0a763bb9a77294d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "50%",
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
                "onClick": controller.AS_Button_gf73b2be2cb640e1b524be01a9e05146,
                "skin": "btnYellow",
                "text": "Done",
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
            CopyflxLinkedIn0a763bb9a77294d.add(CopybtnCreateAccount0d25f5eee1bdd40);
            flxSignUp2.add(CopylblPersonalDetails0g7976054706245, CopyflxName0b5829703e27544, CopyflxLinkedIn0a763bb9a77294d);
            flxMain.add(flxHeader, flxSignUp2);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmBizCardManual,
            "enabledForIdleTimeout": false,
            "id": "frmBizCardManual",
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