define("frmSetPIN", function() {
    return function(controller) {
        function addWidgetsfrmSetPIN() {
            this.setDefaultUnit(kony.flex.DP);
            var flxScrollMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": false,
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
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollMain.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_b2963f4e2e414b67b3caeb61649ceb3e,
                "skin": "slFbox",
                "top": "0dp",
                "width": "12.00%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "35dp",
                "id": "imgBack",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "icon_back.png",
                "top": "0dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            flxHeader.add(flxBack);
            var Label0c88e14dbaa3248 = new kony.ui.Label({
                "centerX": "50%",
                "id": "Label0c88e14dbaa3248",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslLabel0h363b5266fe44e",
                "text": "Set your PIN",
                "top": "23%",
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
            var flxPIN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "9%",
                "id": "flxPIN",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "30%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPIN.setDefaultUnit(kony.flex.DP);
            var tbx1 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.00%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "13%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_ia4a41d0defc4233aee8c6b9e3698c24,
                "secureTextEntry": false,
                "skin": "tbxPINNorm",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0%",
                "width": "11%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbx2 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "2%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_c15b92b7e2144a5b8d3e3b9830c5f12c,
                "secureTextEntry": false,
                "skin": "tbxPINNorm",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0%",
                "width": "11%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbx3 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx3",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "2%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_f14ca9341682429984c9d60b26885b3c,
                "secureTextEntry": false,
                "skin": "tbxPINNorm",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0%",
                "width": "11%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbx4 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.00%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx4",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "2.00%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_ie508d62437540bd8ab6135f7ed97c3b,
                "secureTextEntry": false,
                "skin": "tbxPINNorm",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0%",
                "width": "11%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbx5 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx5",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "2%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_hdec5f19a40c40139b3b667b446229e8,
                "secureTextEntry": false,
                "skin": "tbxPINNorm",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0%",
                "width": "11%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbx6 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx6",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "2%",
                "maxTextLength": 1,
                "onDone": controller.AS_TextField_a2e505c88422419e9081855dbfe51794,
                "secureTextEntry": false,
                "skin": "tbxPINNorm",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0%",
                "width": "11%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "onEndEditing": controller.AS_TextField_fadd0db582f34246b22eb465431c26eb,
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxPIN.add(tbx1, tbx2, tbx3, tbx4, tbx5, tbx6);
            flxScrollMain.add(flxHeader, Label0c88e14dbaa3248, flxPIN);
            this.add(flxScrollMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSetPIN,
            "enabledForIdleTimeout": false,
            "id": "frmSetPIN",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0he24d43dc34842",
            "statusBarHidden": false
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
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_NEXTPREV,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "statusBarStyle": constants.STATUS_BAR_STYLE_LIGHT_CONTENT,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});