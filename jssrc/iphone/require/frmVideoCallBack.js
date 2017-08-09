define("frmVideoCallBack", function() {
    return function(controller) {
        function addWidgetsfrmVideoCallBack() {
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
                "height": "91%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
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
                "height": "100%",
                "id": "flxSignUp1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "flxTrans",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSignUp1.setDefaultUnit(kony.flex.DP);
            var Image0f2415cf0719342 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "38%",
                "id": "Image0f2415cf0719342",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "big_icon_caller.png",
                "top": "5%",
                "width": "84.20%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyRichText0a51bc0dda6d949 = new kony.ui.RichText({
                "bottom": 0,
                "height": "10%",
                "id": "CopyRichText0a51bc0dda6d949",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslRichText0a5370077b8114a",
                "text": "You are <b>5th</b> in line",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblScanOrEnter = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblScanOrEnter",
                "isVisible": true,
                "left": "6%",
                "skin": "lblWhite100",
                "text": "The approximate waiting time is 5 minutes ",
                "top": "2%",
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
            var btnActivate = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "btnNormal125",
                "height": "50dp",
                "id": "btnActivate",
                "isVisible": true,
                "skin": "btnNormal125",
                "text": "Request call back ",
                "top": "12%",
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
            var RichText0fe3fa7f107a247 = new kony.ui.RichText({
                "bottom": 0,
                "height": "10%",
                "id": "RichText0fe3fa7f107a247",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslRichText0bdd9bc89e8d04a",
                "text": "<u>I'll do it later</u>",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSignUp1.add(Image0f2415cf0719342, CopyRichText0a51bc0dda6d949, lblScanOrEnter, btnActivate, RichText0fe3fa7f107a247);
            flxScrollMain.add(flxSignUp1);
            flxMain.add(flxScrollMain);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmVideoCallBack,
            "enabledForIdleTimeout": false,
            "id": "frmVideoCallBack",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0he24d43dc34842"
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