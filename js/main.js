ValidateUPC = () => {
  const UPC = document.getElementById("UPCInput").value;
  const UpcOutput = document.getElementById("UPCvalid");
  const Valid = UPC.length;
  const regDigitUPC = /\d{12}/
  const regDigitEAN = /\d{13}/
  const regAlpha = /\D/
  const redMadeup = /000|123|0123|45678|\b(\d\d)\1+\b/

  if (redMadeup.test(UPC) === true) {
    UpcOutput.innerHTML = `UPC may be made up`;
    document.getElementById("UPCResponse").classList = "ui inverted segment yellow"
  } 
  else if (regDigitUPC.test(UPC) && Valid === 12 ) {
    UpcOutput.innerHTML = `UPC is Valid at ${Valid} charecters long`;
    document.getElementById("UPCResponse").classList = "ui inverted segment green"
  } 
  else if (regDigitEAN.test(UPC) && Valid === 13 ) {
    UpcOutput.innerHTML = `Input is an EAN with ${Valid}`;
    document.getElementById("UPCResponse").classList = "ui inverted segment blue"
  } 
  else if (regAlpha.test(UPC) === true) {
    UpcOutput.innerHTML = `UPC invalid contains charecters, UPC can only contain digits`;
    document.getElementById("UPCResponse").classList = "ui inverted segment red"
  } 
  else {
    UpcOutput.innerHTML = `UPC is invalid, a valid UPC is 12 digits`;
    document.getElementById("UPCResponse").classList = "ui inverted segment red"
  }
}

ValidateISRC = () => {
  const ISRC = document.getElementById("ISRCInput").value;
  const ISRCOutput = document.getElementById("ISRCvalid");
  const Valid = ISRC.length;
  const regISRC = /[a-zA-Z]{5}\d{7}/;
  const resInvalidISRC = /abc|ABC|123|0123|1234/;

  if (resInvalidISRC.test(ISRC) === true) {
    ISRCOutput.innerHTML = `ISRC may be made up`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment yellow"
  } 
  else if (regISRC.test(ISRC) === true && Valid === 12 ) {
    ISRCOutput.innerHTML = `ISRC is valid`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment green"
  } 
  else if (Valid < 12 ) {
    ISRCOutput.innerHTML = `ISRC is invalid: Valid ISRC only 12 charecters, ${Valid} above`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment red"
  } 
  else if (Valid > 12 ) {
    ISRCOutput.innerHTML = `ISRC is invalid: Valid ISRC only 12 charecters, ${Valid} above`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment red"
  } 
  else {
    ISRCOutput.innerHTML = `ISRC is invalid`;
    document.getElementById("ISRCResponse").classList = "ui inverted segment red"
  }
}

ResetUPC = () => {
  document.getElementById("UPCInput").value = "";
  document.getElementById("UPCvalid").innerHTML = "";
  document.getElementById("UPCResponse").classList = "";
}

ResetISRC = () => {
  document.getElementById("ISRCInput").value = "";
  document.getElementById("ISRCvalid").innerHTML = "";
  document.getElementById("ISRCResponse").classList = "";
}
