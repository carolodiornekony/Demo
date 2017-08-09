define("frmConfirmPIN", function() {
    return function(controller) {
        function addWidgetsfrmConfirmPIN() {
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
                "onClick": controller.AS_FlexContainer_e7b9487a21914d44a63a9f1086b0d540,
                "skin": "slFbox",
                "top": "0dp",
                "width": "12.00%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
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
                "text": "Confirm your PIN",
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
                "centerY": "50%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "13%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_dbd2d40dbca540598cc744e44e0476ea,
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
                "centerY": "50.00%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "2.00%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_abf480956f9c4f489321702ab7540f2c,
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
                "centerY": "50.20%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx3",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "2.00%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_ea09c6a45e004ce6862535f7951cbfef,
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
                "centerY": "50%",
                "focusSkin": "tbxPINFcs",
                "height": "95%",
                "id": "tbx4",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_NUMBER_PAD,
                "left": "2.00%",
                "maxTextLength": 1,
                "onTextChange": controller.AS_TextField_d4c970bbc08145259c7ee65fd3cf1baf,
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
                "onTextChange": controller.AS_TextField_cbc04186a86c4249a613b027dd5b5756,
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
                "onDone": controller.AS_TextField_gca54c9977b0470d9fc649a6b7ecd6fc,
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
                "onEndEditing": controller.AS_TextField_bd6f3b73e7844dd89146f020bc4ffc15,
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
            "addWidgets": addWidgetsfrmConfirmPIN,
            "enabledForIdleTimeout": false,
            "id": "frmConfirmPIN",
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
            "formTransparencyDuringPostShow": 100,
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