define("frmVerifyFingerPrint", function() {
    return function(controller) {
        function addWidgetsfrmVerifyFingerPrint() {
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
                "onClick": controller.AS_FlexContainer_cf426917fd03427a93035a9ec784a82a,
                "skin": "slFbox",
                "top": "0dp",
                "width": "12.00%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "40dp",
                "id": "imgBack",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "icon_back.png",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            flxHeader.add(flxBack);
            var FlexContainer0bd5a05c736e145 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "31.68%",
                "id": "FlexContainer0bd5a05c736e145",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_ee40e758ca414724b37381e9df843faa,
                "skin": "slFbox",
                "top": "0%",
                "width": "44.00%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0bd5a05c736e145.setDefaultUnit(kony.flex.DP);
            var Image0d0c3757df26547 = new kony.ui.Image2({
                "height": "80%",
                "id": "Image0d0c3757df26547",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "thumb.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0c88e14dbaa3248 = new kony.ui.Label({
                "centerX": "50%",
                "height": "20%",
                "id": "Label0c88e14dbaa3248",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslLabel0f6fb03f8a09043",
                "text": "Verify with fingerprint",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlexContainer0bd5a05c736e145.add(Image0d0c3757df26547, Label0c88e14dbaa3248);
            var RichText0fe3fa7f107a247 = new kony.ui.RichText({
                "bottom": "5%",
                "height": "10%",
                "id": "RichText0fe3fa7f107a247",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslRichText0bdd9bc89e8d04a",
                "text": "<u>Use PIN instead</u>",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTouchID = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "99.97%",
                "id": "flxTouchID",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0ab02660225fd44",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTouchID.setDefaultUnit(kony.flex.DP);
            var FlexContainer0idc8e8a1cd8049 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "39.41%",
                "id": "FlexContainer0idc8e8a1cd8049",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0e7553082d50043",
                "top": "0dp",
                "width": "77.33%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0idc8e8a1cd8049.setDefaultUnit(kony.flex.DP);
            var CopylblPersonalDetails0g7976054706245 = new kony.ui.Label({
                "centerX": "46%",
                "id": "CopylblPersonalDetails0g7976054706245",
                "isVisible": true,
                "left": "6%",
                "skin": "CopylblGrey0de31b8af307a44",
                "text": "Touch ID for \"Bank Danamon\"",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Image0f2f0ef8c8ee449 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "57.00%",
                "height": "50%",
                "id": "Image0f2f0ef8c8ee449",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "touch_id_icon.png",
                "top": "50%",
                "width": "80%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Image0i5104039a55249 = new kony.ui.Image2({
                "height": "13%",
                "id": "Image0i5104039a55249",
                "isVisible": true,
                "left": "245dp",
                "onTouchEnd": controller.AS_Image_c753695d2d5c48ddafe77dd2b3cfef46,
                "skin": "slImage",
                "src": "icon_close.png",
                "top": "3dp",
                "width": "15.51%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0idc8e8a1cd8049.add(CopylblPersonalDetails0g7976054706245, Image0f2f0ef8c8ee449, Image0i5104039a55249);
            flxTouchID.add(FlexContainer0idc8e8a1cd8049);
            flxScrollMain.add(flxHeader, FlexContainer0bd5a05c736e145, RichText0fe3fa7f107a247, flxTouchID);
            this.add(flxScrollMain);
        };
        return [{
            "addWidgets": addWidgetsfrmVerifyFingerPrint,
            "enabledForIdleTimeout": false,
            "id": "frmVerifyFingerPrint",
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