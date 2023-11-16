function checkLeapYear(year) {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

function getFirstDayOfWeek(year, month) {
  if (month < 10) {
    return new Date(year + "-" + month + "-01").getDay();
  }
}

function changeYearMonth(year, month) {
  let month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month == 2) {
    if (checkLeapYear(year)) {
      month_day[1] = 29;
    }
  }

  let first_day_of_week = getFirstDayOfWeek(year, month);
  let arr_calendar = [];
  for (let i = 0; i < first_day_of_week; i++) {
    arr_calendar.push("");
  }
  for (let i = 1; i <= month_day[month - 1]; i++) {
    arr_calendar.push(String(i));
  }
  let remain_day = 7 - (arr_calendar.length % 7);
  if (remain_day < 7) {
    for (let i = 0; i < remain_day; i++) {
      arr_calendar.push("");
    }
  }
  renderCalendar(arr_calendar);
}

function renderCalendar(data) {
  let h = [];
  for (let i = 0; i < data.length; i++) {
    if (i == 0) {
      h.push("<tr>");
    } else if (i % 7 == 0) {
      h.push("</tr>");
      h.push("<tr>");
    }
    // 값 넣어주기
    h.push("<td>" + data[i] + "</td>");
  }
  h.push("</tr>");
  $("#tb_body").html(h.join(""));
}

function changeMonth(diff) {
  // option 선택 시,
  if (diff == undefined) {
    current_month = parseInt($("#month").val);
  } else {
    current_month = current_month + diff;

    if (current_month == 0) {
      current_year = current_year - 1;
      current_month = 12;
    } else if (current_month == 13) {
      current_year = current_year + 1;
      current_month = 1;
    }
  }
  loadCalendar();
}

function loadCalendar() {
  $("#year").val(current_year);
  $("#month").val(current_month);
  changeYearMonth(current_year, current_month);
}

let current_year = new Date().getFullYear();
let current_month = new Date().getMonth() + 1;

$("#year").val(current_year);
$("#month").val(current_month);

changeYearMonth(current_year, current_month);
