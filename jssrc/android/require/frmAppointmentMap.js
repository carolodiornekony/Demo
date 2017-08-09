define("frmAppointmentMap", function() {
    return function(controller) {
        function addWidgetsfrmAppointmentMap() {
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
                "height": "9%",
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
                "height": "100%",
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
                "text": "SCHEDULE APPOINTMENT ",
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
                "onClick": controller.AS_FlexContainer_b95156b4cfff4f06b6c053db51148eee,
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
            flxHeader.add(flxHeading1);
            var flxScrollMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": false,
                "height": "91%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "CopyslFSbox0f5d8c8cbbd974c",
                "top": "9%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollMain.setDefaultUnit(kony.flex.DP);
            var Addressmap = new kony.ui.Map({
                "calloutWidth": 40,
                "defaultPinImage": "pin.png",
                "height": "50%",
                "id": "Addressmap",
                "isVisible": true,
                "left": "0dp",
                "provider": constants.MAP_PROVIDER_GOOGLE,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "mode": constants.MAP_VIEW_MODE_NORMAL,
                "showZoomControl": true,
                "zoomLevel": 15
            });
            var FlexContainer0i30e511f2f6b4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "FlexContainer0i30e511f2f6b4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyflxWhiteBG0f96ab3d4baa840",
                "top": "15dp",
                "width": "94%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0i30e511f2f6b4c.setDefaultUnit(kony.flex.DP);
            var CopyflxLine0ad08d785dd7f44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "96%",
                "id": "CopyflxLine0ad08d785dd7f44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "flxWhiteBG",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0ad08d785dd7f44.setDefaultUnit(kony.flex.DP);
            var tbxPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "tbxNormal",
                "height": "40dp",
                "id": "tbxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "10%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "tbxNormal",
                "text": "TDECU",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1dp",
                "width": "80%",
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
                "height": "25dp",
                "id": "imgView",
                "isVisible": true,
                "right": "2%",
                "skin": "slImage",
                "src": "icon_location.png",
                "width": "25dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyimgView0d42748c770374c = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "CopyimgView0d42748c770374c",
                "isVisible": true,
                "left": "2%",
                "skin": "slImage",
                "src": "icon_serach.png",
                "width": "25dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxLine0ad08d785dd7f44.add(tbxPassword, imgView, CopyimgView0d42748c770374c);
            FlexContainer0i30e511f2f6b4c.add(CopyflxLine0ad08d785dd7f44);
            var FlexContainer0f1185528679840 = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "50%",
                "horizontalScrollIndicator": true,
                "id": "FlexContainer0f1185528679840",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "50%",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0f1185528679840.setDefaultUnit(kony.flex.DP);
            var lblName = new kony.ui.Label({
                "id": "lblName",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGrey155",
                "text": "TDECU",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8%",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lbllblAddress = new kony.ui.Label({
                "id": "lbllblAddress",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0a9a93836920541",
                "text": "TDECU HOUSTON MARATHON 5555 San Felipe Street #100 Houston, TX 77056 Tel: (800) 839-1154 Fax: (713) 623-6850",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopybtnCreateAccount0d25f5eee1bdd40 = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnYellow",
                "height": "50dp",
                "id": "CopybtnCreateAccount0d25f5eee1bdd40",
                "isVisible": true,
                "onClick": controller.AS_Button_gfba9b8ffe514a36a01d9f915be4ff1f,
                "skin": "btnYellow",
                "text": "Select an appointment slot ",
                "top": "10%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var RichText0fe3fa7f107a247 = new kony.ui.RichText({
                "bottom": 0,
                "height": "10%",
                "id": "RichText0fe3fa7f107a247",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslRichText0cffff764831044",
                "text": "<u>I'll drop by the branch </u>",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0f1185528679840.add(lblName, lbllblAddress, CopybtnCreateAccount0d25f5eee1bdd40, RichText0fe3fa7f107a247);
            flxScrollMain.add(Addressmap, FlexContainer0i30e511f2f6b4c, FlexContainer0f1185528679840);
            flxMain.add(flxHeader, flxScrollMain);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAppointmentMap,
            "enabledForIdleTimeout": false,
            "id": "frmAppointmentMap",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_g84c38df361049a2b0ffbdbb86541ae5,
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