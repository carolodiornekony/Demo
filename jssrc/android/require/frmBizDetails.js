define("frmBizDetails", function() {
    return function(controller) {
        function addWidgetsfrmBizDetails() {
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
                "onClick": controller.AS_FlexContainer_if719bcd28914797917bae2632dbd55d,
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
                "text": "STEP 7 OF 7",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%",
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
                "text": "Verify your work information",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "top": "3%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxName0b5829703e27544.setDefaultUnit(kony.flex.DP);
            var CopylblName0a43ab54ae9a94b = new kony.ui.Label({
                "id": "CopylblName0a43ab54ae9a94b",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGreyNew",
                "text": "Field of work",
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
            var FlexContainer0e8b514087d2e4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "FlexContainer0e8b514087d2e4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "slFbox",
                "top": "0%",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0e8b514087d2e4a.setDefaultUnit(kony.flex.DP);
            var ListBox0e8c666a561ec41 = new kony.ui.ListBox({
                "focusSkin": "CopyslListBox0c9e45b882c3843",
                "height": "100%",
                "id": "ListBox0e8c666a561ec41",
                "isVisible": true,
                "left": "0%",
                "masterData": [
                    ["1", "Accounting"]
                ],
                "selectedKey": "1",
                "selectedKeyValue": ["1", "Accounting"],
                "skin": "CopyslListBox0eeb915f131a945",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "applySkinsToPopup": true,
                "dropDownImage": "icon_dropdown_trans.png",
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            var Image0hf80eaa3a5e243 = new kony.ui.Image2({
                "centerY": "56%",
                "height": "25dp",
                "id": "Image0hf80eaa3a5e243",
                "isVisible": true,
                "right": "1%",
                "skin": "slImage",
                "src": "icon_dropdown.png",
                "top": "0%",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0e8b514087d2e4a.add(ListBox0e8c666a561ec41, Image0hf80eaa3a5e243);
            var CopyflxLine0g6c884a7ce0848 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0g6c884a7ce0848",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0g6c884a7ce0848.setDefaultUnit(kony.flex.DP);
            CopyflxLine0g6c884a7ce0848.add();
            CopyflxName0b5829703e27544.add(CopylblName0a43ab54ae9a94b, FlexContainer0e8b514087d2e4a, CopyflxLine0g6c884a7ce0848);
            var CopyflxName0c98ca391b8174c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxName0c98ca391b8174c",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxName0c98ca391b8174c.setDefaultUnit(kony.flex.DP);
            var CopylblName0c5ffab0e1adb42 = new kony.ui.Label({
                "id": "CopylblName0c5ffab0e1adb42",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGreyNew",
                "text": "Company Name",
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
            var CopytbxName0f0152c3ec0c44b = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "40dp",
                "id": "CopytbxName0f0152c3ec0c44b",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "tbxNormal",
                "text": "XYZ Company",
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
            var CopyflxLine0e7f11ca20af842 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0e7f11ca20af842",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0e7f11ca20af842.setDefaultUnit(kony.flex.DP);
            CopyflxLine0e7f11ca20af842.add();
            CopyflxName0c98ca391b8174c.add(CopylblName0c5ffab0e1adb42, CopytbxName0f0152c3ec0c44b, CopyflxLine0e7f11ca20af842);
            var CopyflxName0c7244598acb747 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxName0c7244598acb747",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxName0c7244598acb747.setDefaultUnit(kony.flex.DP);
            var CopylblName0ddd77fcba6e04a = new kony.ui.Label({
                "id": "CopylblName0ddd77fcba6e04a",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGreyNew",
                "text": "Company Address",
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
            var CopytbxName0f0db37a35ce248 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "40dp",
                "id": "CopytbxName0f0db37a35ce248",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "tbxNormal",
                "text": "11000 Main Street",
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
            var CopyflxLine0g03b2501012b44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0g03b2501012b44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0g03b2501012b44.setDefaultUnit(kony.flex.DP);
            CopyflxLine0g03b2501012b44.add();
            CopyflxName0c7244598acb747.add(CopylblName0ddd77fcba6e04a, CopytbxName0f0db37a35ce248, CopyflxLine0g03b2501012b44);
            var CopyflxName0g613c3244bb940 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxName0g613c3244bb940",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxName0g613c3244bb940.setDefaultUnit(kony.flex.DP);
            var CopylblName0g62df85c187849 = new kony.ui.Label({
                "id": "CopylblName0g62df85c187849",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGreyNew",
                "text": "Suite",
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
            var CopytbxName0a62c53d454d649 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "40dp",
                "id": "CopytbxName0a62c53d454d649",
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
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "tbxNormal",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var CopyflxLine0bcc3ed78631145 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0bcc3ed78631145",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0bcc3ed78631145.setDefaultUnit(kony.flex.DP);
            CopyflxLine0bcc3ed78631145.add();
            CopyflxName0g613c3244bb940.add(CopylblName0g62df85c187849, CopytbxName0a62c53d454d649, CopyflxLine0bcc3ed78631145);
            var CopyflxName0af24d2d5835e45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxName0af24d2d5835e45",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxName0af24d2d5835e45.setDefaultUnit(kony.flex.DP);
            var CopylblName0b177fd14ad3643 = new kony.ui.Label({
                "id": "CopylblName0b177fd14ad3643",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGreyNew",
                "text": "City/Town",
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
            var CopytbxName0b63ef96121fa44 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "40dp",
                "id": "CopytbxName0b63ef96121fa44",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "tbxNormal",
                "text": "Houston",
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
            var CopyflxLine0cfd5aac01bb343 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0cfd5aac01bb343",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0cfd5aac01bb343.setDefaultUnit(kony.flex.DP);
            CopyflxLine0cfd5aac01bb343.add();
            CopyflxName0af24d2d5835e45.add(CopylblName0b177fd14ad3643, CopytbxName0b63ef96121fa44, CopyflxLine0cfd5aac01bb343);
            var CopyflxName0a2ccafd0340f45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxName0a2ccafd0340f45",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxName0a2ccafd0340f45.setDefaultUnit(kony.flex.DP);
            var CopylblName0jf7a8824811a40 = new kony.ui.Label({
                "id": "CopylblName0jf7a8824811a40",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGreyNew",
                "text": "Zipcode",
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
            var CopytbxName0da9b1272bec745 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxNormal",
                "height": "40dp",
                "id": "CopytbxName0da9b1272bec745",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "6%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "tbxNormal",
                "text": "12940",
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
            var CopyflxLine0h5792fc3921349 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxLine0h5792fc3921349",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "lineGrey",
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            CopyflxLine0h5792fc3921349.setDefaultUnit(kony.flex.DP);
            CopyflxLine0h5792fc3921349.add();
            CopyflxName0a2ccafd0340f45.add(CopylblName0jf7a8824811a40, CopytbxName0da9b1272bec745, CopyflxLine0h5792fc3921349);
            var CopyflxLinkedIn0a763bb9a77294d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "CopyflxLinkedIn0a763bb9a77294d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxLinkedIn0a763bb9a77294d.setDefaultUnit(kony.flex.DP);
            var btnNext = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnYellow",
                "height": "50dp",
                "id": "btnNext",
                "isVisible": true,
                "onClick": controller.AS_Button_ade1aaab894542d09885dbcdcf77c312,
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
            }, {});
            CopyflxLinkedIn0a763bb9a77294d.add(btnNext);
            flxSignUp2.add(CopylblPersonalDetails0g7976054706245, CopyflxName0b5829703e27544, CopyflxName0c98ca391b8174c, CopyflxName0c7244598acb747, CopyflxName0g613c3244bb940, CopyflxName0af24d2d5835e45, CopyflxName0a2ccafd0340f45, CopyflxLinkedIn0a763bb9a77294d);
            flxMain.add(flxHeader, flxSignUp2);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmBizDetails,
            "enabledForIdleTimeout": false,
            "id": "frmBizDetails",
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