if (document.querySelector("#script-loader")) {
  console.log("NO ERROR - ALL OK");
} else {
  var msg = "cannot find the script el that loaded me, #script-loader";
  console.log(msg);
  throw new Error(msg);
}
