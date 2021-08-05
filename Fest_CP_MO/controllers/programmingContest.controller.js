const ProgrammingContest = require("../models/ProgrammingContest.model");

const getCP = (req, res) => {
  res.render("programming-contest/register.ejs", { error: req.flash("error") });
};
const postCP = (req, res) => {
  const {
    teamName,
    institution,
    coach,
    contactCoach,
    emailCoach,
    tshirtCoach,
    leader,
    contactLeader,
    emailLeader,
    tshirtLeader,
    member1,
    contactMember1,
    emailMember1,
    tshirtMember1,
    member2,
    contactMember2,
    emailMember2,
    tshirtMember2,
  } = req.body;

  console.log(teamName);
  console.log(institution);
  console.log(coach);
  console.log(contactCoach);
  console.log(emailCoach);
  console.log(tshirtCoach);

  const total = 1200;
  const paid = 0;
  const selected = false;
  let error = "";

  ProgrammingContest.findOne({
    teamName: teamName,
    institution: institution,
  }).then((team) => {
    if (team) {
      error = "Team with this team name and institution already exists!";
      console.log(error);
      req.flash("error", error);
      res.redirect("/ProgrammingContest/register");
    } else {
      const team = new ProgrammingContest({
        teamName,
        institution,
        coach,
        contactCoach,
        emailCoach,
        tshirtCoach,
        leader,
        contactLeader,
        emailLeader,
        tshirtLeader,
        member1,
        contactMember1,
        emailMember1,
        tshirtMember1,
        member2,
        contactMember2,
        emailMember2,
        tshirtMember2,
        total,
        paid,
        selected,
      });
      team
        .save()
        .then(() => {
          error = "Team has been registered successfully!";
          console.log(error);
          req.flash("error", error);
          res.redirect("/ProgrammingContest/register");
        })
        .catch((err) => {
          error = "An unexpected error occured while registering team";
          console.log(error);
          console.log(err);
          req.flash("error", error);
          res.redirect("/ProgrammingContest/register");
        });
    }
  });
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
