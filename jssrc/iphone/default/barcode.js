	function scanbarcode() {
	    iphoneScanBarcode();
	}

	function androidScanBarcode() {
	    barcode_android.scanbarcodeAndroid(androidBarcodeResults);
	}

	function iphoneScanBarcode() {
	    barcode.scanbarcode(otherBarcodeResults);
	}

	function bbScanBarcode() {
	    barcode_bb.scanbarcodeBB(otherBarcodeResults);
	}

	function androidBarcodeResults(result, resultFormat) {
	    scannedText = result;
	    if (scannedText === "" || scannedText === null) {
	        alert("Scanning failed, please scan again.");
	        return false;
	    } else frmBarcode.lblBarcode.text = "The text of the scanned barcode is: \n" + scannedText;
	}

	function otherBarcodeResults(result) {
	    scannedText = result;
	    if (scannedText === "" || scannedText === null) {
	        alert("Scanning failed, please scan again.");
	        return false;
	    } else frmBarcode.lblBarcode.text = "The text of the scanned barcode is: \n" + scannedText;
	}