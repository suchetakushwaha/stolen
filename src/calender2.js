import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function CalendarS(props) {
  let days = ["S", "M", "T", "W", "T", "F", "S"];
  let years = [1994];
  for (let i = 1; i <= 26; i++) {
    years.push(years[i - 1] + 1);
  }
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const [year, setyear] = useState(2019);
  const [month, setmonth] = useState("Feb");
  const [clas, setclass] = useState("cal hide");
  const [new_string, setnew] = useState("");
  let date = new Date(month + " 01," + year.toString());
  let first_day = date.getDay();
  let first = [];
  let second = [];
  let third = [];
  let fourth = [];
  let fifth = [];
  for (let i = 1; i <= 35; i++) {
    if (i <= 7) first.push("");
    else if (i <= 14) second.push("");
    else if (i <= 21) third.push("");
    else if (i <= 28) fourth.push("");
    else fifth.push("");
  }
  let cnt = 1;
  for (let i = first_day; i < 7; i++) {
    first[i] = cnt;
    cnt++;
  }
  for (let i = 0; i < 7; i++) {
    second[i] = cnt;
    cnt++;
  }
  for (let i = 0; i < 7; i++) {
    third[i] = cnt;
    cnt++;
  }
  for (let i = 0; i < 7; i++) {
    fourth[i] = cnt;
    cnt++;
  }
  for (let i = 0; i < 7; i++) {
    if (
      cnt <= 31 &&
      (month === "Jan" ||
        month === "March" ||
        month === "May" ||
        month === "July" ||
        month === "Aug" ||
        month === "Oct" ||
        month === "Dec")
    ) {
      fifth[i] = cnt;
      cnt++;
    } else if (month === "Feb") {
      if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        if (cnt <= 29) {
          fifth[i] = cnt;
          cnt++;
        }
      } else {
        if (cnt < 29) {
          fifth[i] = cnt;
          cnt++;
        }
      }
    } else if (cnt < 31) {
      fifth[i] = cnt;
      cnt++;
    }
  }
  if (cnt < 32) {
    for (let i = 0; i < 7; i++) {
      if (
        cnt <= 31 &&
        (month === "Jan" ||
          month === "March" ||
          month === "May" ||
          month === "July" ||
          month === "Aug" ||
          month === "Oct" ||
          month === "Dec")
      ) {
        first[i] = cnt;
        cnt++;
      } else if (month === "Feb") {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
          if (cnt <= 29) {
            first[i] = cnt;
            cnt++;
          }
        } else {
          if (cnt < 29) {
            first[i] = cnt;
            cnt++;
          }
        }
      } else if (cnt < 31) {
        first[i] = cnt;
        cnt++;
      }
    }
  }
  function changeYear(event) {
    setyear(event.target.value);
  }
  function changeMonth(event) {
    setmonth(event.target.value);
  }
  function changeDate(val) {
    if (clas === "cal show") {
      let format = month + " " + val + "," + year;
      setnew(format);
    }
    setclass("cal hide");
  }
  function calendar() {
    setclass("cal show");
  }
  return (
    <div>
      <input placeholder={props.data
      } value={new_string}  ></input>
      <CalendarMonthIcon onClick={calendar}/>
      <div className={clas}>
        <div className="row">
          <div className="col">
            <DropdownButton id="dropdown-item-button" title={year}>
              {years.map((z) => (
                <Dropdown.Item as="button" onClick={changeYear} value={z}>
                  {z}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="col">
            <DropdownButton id="dropdown-item-button" title={month}>
              {months.map((y) => (
                <Dropdown.Item as="button" onClick={changeMonth} value={y}>
                  {y}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
        </div>
        <div className="row">
          {days.map((x) => (
            <div className="col">{x}</div>
          ))}
        </div>
        <hr></hr>
        <div className="row">
          {first.map((x) => (
            <div className="col" onClick={() => changeDate(x)}>
              {x}
            </div>
          ))}
        </div>
        <div className="row">
          {second.map((x) => (
            <div className="col" onClick={() => changeDate(x)}>
              {x}
            </div>
          ))}
        </div>
        <div className="row">
          {third.map((x) => (
            <div className="col" onClick={() => changeDate(x)}>
              {x}
            </div>
          ))}
        </div>
        <div className="row">
          {fourth.map((x) => (
            <div className="col" onClick={() => changeDate(x)}>
              {x}
            </div>
          ))}
        </div>
        <div className="row">
          {fifth.map((x) => (
            <div className="col" onClick={() => changeDate(x)}>
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
