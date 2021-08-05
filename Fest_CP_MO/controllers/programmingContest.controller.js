const ProgrammingContest = require("../models/ProgrammingContest.model");

const getCP = (req, res) => {
  res.render("programming-contest/register.ejs");
};
const postCP = (req, res) => {
  res.render("programming-contest/register.ejs");
};
const getCPList = (req, res) => {
  res.render("programming-contest/list.ejs");
};
const deleteCP = (req, res) => {
  res.render("programming-contest/list.ejs");
};
const paymentDoneCP = (req, res) => {
  res.render("programming-contest/list.ejs");
};
const selectCP = (req, res) => {
  res.render("programming-contest/list.ejs");
};

module.exports = {
  getCP,
  postCP,
  getCPList,
  deleteCP,
  paymentDoneCP,
  selectCP,
};
