  function convertToC() {
        var fTempVal = parseFloat(document.getElementById('fTemp').value);
        var cTempVal = (fTempVal - 32) * (5 / 9);
        document.getElementById('cTemp').value = Math.round(cTempVal);
        return false;
    }