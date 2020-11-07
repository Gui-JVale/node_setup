var express = require("express");
var app = express();

export const start = () => {
  app.listen(3000, () => console.log("LIVE"));
};
