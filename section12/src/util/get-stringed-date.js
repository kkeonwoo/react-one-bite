export const getStringedDate = (targetDate) => {
  // input type="Date"의 value 값을 아래 형식에 맞춰 넣어야 화면에 나옴
  // 날짜 -> YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};