if (document.querySelector("#script-loader")) {
  console.log("all ok");
} else {
  throw new Error("cannot find the script el that loaded me, #script-loader");
}
