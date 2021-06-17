export const Priority = [
  { name: "low", value: 1 },
  { name: "normal", value: 2 },
  { name: "high", value: 3 },
];

export const getDate = (data) => {
  let date;
  if (!data) {
    date = new Date();
  } else {
    date = new Date(data);
  }
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  return `${year}-${month}-${day}`;
};

export const getValueOf = (data) => {
  let date = new Date(data);
  return date.valueOf();
};

export const uid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
