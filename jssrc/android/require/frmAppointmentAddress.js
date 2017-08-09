define("frmAppointmentAddress", function() {
    return function(controller) {
        function addWidgetsfrmAppointmentAddress() {
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
                "onClick": controller.AS_FlexContainer_fd783cc082e44a6cbbae32291b2e48b4,
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
            var Addressmap123 = new kony.ui.Map({
                "calloutWidth": 40,
                "defaultPinImage": "pin.png",
                "height": "35%",
                "id": "Addressmap123",
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
            var FlexContainer0f1185528679840 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "65%",
                "id": "FlexContainer0f1185528679840",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "35%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0f1185528679840.setDefaultUnit(kony.flex.DP);
            var lblName = new kony.ui.Label({
                "id": "lblName",
                "isVisible": true,
                "left": "6%",
                "skin": "lblGrey155",
                "text": "Date and Time",
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
            var flxMobileNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxMobileNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "8%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMobileNumber.setDefaultUnit(kony.flex.DP);
            var lblDay = new kony.ui.Label({
                "id": "lblDay",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0i36ffb765a4344",
                "text": "Day",
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
            var flxLine1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLine1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "CopyflxWhiteBG0e859319107734e",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            flxLine1.setDefaultUnit(kony.flex.DP);
            flxLine1.add();
            var Calendar0aacc098676af4a = new kony.ui.Calendar({
                "calendarIcon": "transparent_dropdown.png",
                "centerX": "50%",
                "centerY": "57%",
                "dateComponents": [6, 7, 2017, 0, 0, 0],
                "dateFormat": "dd/MM/yyyy",
                "day": 6,
                "formattedDate": "06/07/2017",
                "height": "40dp",
                "hour": 0,
                "id": "Calendar0aacc098676af4a",
                "isVisible": true,
                "minutes": 0,
                "month": 7,
                "onSelection": controller.AS_Calendar_cf074c5dda074db0930ee68330292bac,
                "onTouchStart": controller.AS_Calendar_c652f61081474481bd678ddcdd123895,
                "seconds": 0,
                "skin": "CopyslCalendar0ac3d232ebc5d48",
                "top": "25%",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "88%",
                "year": 2017,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Image0da480f885cb94b = new kony.ui.Image2({
                "centerY": "57%",
                "height": "25dp",
                "id": "Image0da480f885cb94b",
                "isVisible": true,
                "right": "9%",
                "skin": "slImage",
                "src": "calendar.png",
                "top": "25%",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMobileNumber.add(lblDay, flxLine1, Calendar0aacc098676af4a, Image0da480f885cb94b);
            var CopyflxMobileNumber0c66a1499e7ad46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "CopyflxMobileNumber0c66a1499e7ad46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxMobileNumber0c66a1499e7ad46.setDefaultUnit(kony.flex.DP);
            var lblTimeH = new kony.ui.Label({
                "id": "lblTimeH",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0i36ffb765a4344",
                "text": "Time",
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
            var flxLine2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLine2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6%",
                "skin": "CopyflxWhiteBG0e859319107734e",
                "width": "86%",
                "zIndex": 1
            }, {}, {});
            flxLine2.setDefaultUnit(kony.flex.DP);
            flxLine2.add();
            var lblTime = new kony.ui.Label({
                "centerY": "57%",
                "height": "40dp",
                "id": "lblTime",
                "isVisible": true,
                "left": "6%",
                "onTouchEnd": controller.AS_Label_e3428eaec82c4090b9475936b8344313,
                "onTouchStart": controller.AS_Label_ibd061007b4f4c6fae204d529436a36c,
                "skin": "lblGreen120",
                "text": "00:00 AM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25%",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyImage0id620d8b7a0042 = new kony.ui.Image2({
                "centerY": "60%",
                "height": "25dp",
                "id": "CopyImage0id620d8b7a0042",
                "isVisible": true,
                "right": "9%",
                "skin": "slImage",
                "src": "icon_dropdown.png",
                "top": "25%",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxMobileNumber0c66a1499e7ad46.add(lblTimeH, flxLine2, lblTime, CopyImage0id620d8b7a0042);
            var CopybtnCreateAccount0d25f5eee1bdd40 = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnYellow",
                "height": "50dp",
                "id": "CopybtnCreateAccount0d25f5eee1bdd40",
                "isVisible": true,
                "onClick": controller.AS_Button_dfdae811fcce4478a50efe4e547e3a15,
                "skin": "btnYellow",
                "text": "Done",
                "top": "10%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0f1185528679840.add(lblName, flxMobileNumber, CopyflxMobileNumber0c66a1499e7ad46, CopybtnCreateAccount0d25f5eee1bdd40);
            flxScrollMain.add(Addressmap123, FlexContainer0f1185528679840);
            var flxTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTrans",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyflxBlackBlur0f4b98f3561544a",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxTrans.setDefaultUnit(kony.flex.DP);
            var flxSpinner = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-50%",
                "clipBounds": true,
                "height": "40%",
                "id": "flxSpinner",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0baeef47a83d644",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSpinner.setDefaultUnit(kony.flex.DP);
            var pckTime = new kony.ui.PickerView({
                "centerX": "50%",
                "height": "80%",
                "id": "pckTime",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    [
                        ["qq", ""], 20
                    ],
                    [
                        ["00", "00"],
                        ["01", "01"],
                        ["02", "02"],
                        ["03", "03"],
                        ["04", "04"],
                        ["05", "05"],
                        ["06", "06"],
                        ["07", "07"],
                        ["08", "08"],
                        ["09", "09"],
                        ["10", "10"],
                        ["11", "11"],
                        ["12", "12"], 20
                    ],
                    [
                        ["00", "00"],
                        ["15", "15"],
                        ["30", "30"],
                        ["45", "45"], 20
                    ],
                    [
                        ["AM", "AM"],
                        ["PM", "PM"], 20
                    ],
                    [
                        ["qq", ""], 20
                    ]
                ],
                "masterDataMap": null,
                "selectedKeyValues": ["", "00", "00", "AM", ""],
                "skin": "CopyslPickerView0d824d4b214164d",
                "top": "20%",
                "width": "100%"
            }, {}, {
                "viewType": constants.PICKER_VIEW_TYPE_WHEEL
            });
            var flxLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-1%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "right": "-1%",
                "skin": "CopyslFbox0f1ccfccce2654d",
                "top": "20%",
                "width": "102%",
                "zIndex": 1
            }, {}, {});
            flxLine.setDefaultUnit(kony.flex.DP);
            flxLine.add();
            var btnCancel = new kony.ui.Button({
                "focusSkin": "btnCancel",
                "height": "50dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_i97c68e57a9c489d854d8bbb81e650ca,
                "skin": "btnCancel",
                "text": "Cancel",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopybtnCancel0d35faeccbc5a4c = new kony.ui.Button({
                "focusSkin": "btnDone",
                "height": "50dp",
                "id": "CopybtnCancel0d35faeccbc5a4c",
                "isVisible": true,
                "onClick": controller.AS_Button_a1c1bc3dc35949f79414a163a78a4165,
                "right": 0,
                "skin": "btnDone",
                "text": "Done",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexContainer0f027b28036b84e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "FlexContainer0f027b28036b84e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_cc70a8afdc604ecb9baf8d95ef15de0b,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0f027b28036b84e.setDefaultUnit(kony.flex.DP);
            FlexContainer0f027b28036b84e.add();
            var CopyFlexContainer0ha8fa6578a8645 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "CopyFlexContainer0ha8fa6578a8645",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_ea458bef97884550941953ace79992fd,
                "right": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0ha8fa6578a8645.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ha8fa6578a8645.add();
            flxSpinner.add(pckTime, flxLine, btnCancel, CopybtnCancel0d35faeccbc5a4c, FlexContainer0f027b28036b84e, CopyFlexContainer0ha8fa6578a8645);
            flxTrans.add(flxSpinner);
            flxMain.add(flxHeader, flxScrollMain, flxTrans);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAppointmentAddress,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmAppointmentAddress",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_hce4215fbcb44ea596db621308dfd28f,
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