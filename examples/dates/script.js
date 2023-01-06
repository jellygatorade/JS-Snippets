// Formatting Dates

const newDate = new Date();

const month = newDate.toLocaleString("en-US", { month: "long" });
const day = newDate.toLocaleString("en-US", { day: "2-digit" });
const year = newDate.getFullYear();

console.log("date formatting:", month, day, year);

// Comparing Dates

var dates = {
  post_date_gmt: "2022-01-25 20:48:22",
  post_modified_gmt: "2022-01-26 19:59:00",
};

const unixTimeZero = Date.parse("01 Jan 1970 00:00:00 GMT");
const javaScriptReleaseDate = Date.parse("04 Dec 1995 00:12:00 GMT");

//console.log(unixTimeZero);
//console.log(javaScriptReleaseDate);

//console.log(Date.parse(dates.post_date_gmt));
//console.log(Date.parse(dates.post_modified_gmt));

function compareDates(dateString1, dateString2) {
  let parsedDate1 = Date.parse(dateString1);
  let parsedDate2 = Date.parse(dateString2);
  //console.log(parsedDate1);
  //console.log(parsedDate2);
  let dateDiff = parsedDate1 - parsedDate2;
  console.log(dateDiff);
  if (dateDiff > 0) {
    console.log(dateString1 + " is later than " + dateString2);
  } else if (dateDiff < 0) {
    console.log(dateString2 + " is later than " + dateString1);
  } else if (dateDiff === 0) {
    console.log("The two dates are the same.");
  } else {
    console.log("Error.");
  }
}

// Calling new Date() constructor works as the opposite of Date.parse()

compareDates(new Date(unixTimeZero), new Date(javaScriptReleaseDate));
