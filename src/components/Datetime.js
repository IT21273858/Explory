const Datetime = (datenew) => {
  let dd = new Date(datenew);
  let d = new Date(dd.getTime() - 1 * 24 * 60 * 60 * 1000);

  const year = d.getFullYear();
  let month = d.getMonth() + 1;
  if (month.toString().length < 2) month = "0" + month;
  let date = d.getDate();
  if (date.toString().length < 2) date = "0" + date;

  let fullDate = year + "-" + month + "-" + date;

  return fullDate;
};

export default Datetime;
