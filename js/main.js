ValidateUPC = () => {
  let UPC = document.getElementById("UPCInput").value;
  const UpcOutput = document.getElementById("UPCvalid");
  const Valid = UPC.length;
  const regDigit = new RegExp ('/\d/')
  const regAlpha = new RegExp ('/[a-z]/')
  console.log(UPC.match(regAlpha));
  //console.log("Contains number: " + UPC.test(regDigit));
  // if (regAlpha === false && Valid === 12) {
  //   UpcOutput.innerHTML = `UPC is Valid at ${Valid} charecters long`;
  // } 
  // else if (regAlpha === false && Valid === 13) {
  //   UpcOutput.innerHTML = `Input is an EAN with ${Valid}`;
  // } 
  // else if (regAlpha === true) {
  //   UpcOutput.innerHTML = `UPC invalid, contains text`;
  // } 
  // else {
  //   UpcOutput.innerHTML = `UPC input contains invalid charecters`;
  // }
}

ResetUPC = () => {
  document.getElementById("UPCInput").value = "";
  document.getElementById("UPCvalid").innerHTML = "";
}

ResetISRC = () => {
  document.getElementById("ISRCInput").value = "";
  document.getElementById("ISRCvalid").innerHTML = "";
}
