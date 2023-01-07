const express = require("express");
var indexRouter = require("../index");
var professionalRouter = require("../professional");
var customerRouter = require("../customer");
var paymentRouter = require("../payment");

module.exports = function (app) {
  app.use(express.json());

  app.use("/", indexRouter);
  app.use("/professional", professionalRouter);
  app.use("/customer", customerRouter);
  app.use("/payment", paymentRouter);
};
