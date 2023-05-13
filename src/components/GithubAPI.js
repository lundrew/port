import React, { useEffect, useState } from "react";

function GithubAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/lundrew/port/commits")
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData && apiData.map((e) => e.commit.author.date));
      });
  }, []);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //currrent day in the year
  var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
  console.log(new Date().setFullYear(new Date().getFullYear(), 0, 1));
  console.log(timestmp);
  var yearFirstDay = Math.floor(timestmp / 86400000);
  var today = Math.ceil(new Date().getTime() / 86400000);
  var dayOfYear = today - yearFirstDay;
  console.log(dayOfYear);

  //
  //
  //
  //
  //
  //
  //
  //
  // days since last commit for the month
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  const lastCommit = (e) => {
    let lastCommitDate = String(e[0]).split("-", 3)[1];
    return dd - lastCommitDate;
  };

  console.log(lastCommit(data) + " day's since your last commit.");

  return (
    <>
      <div></div>
    </>
  );
}

export default GithubAPI;
