export const getFullDate = () => {
  const date = new Date().getDate(); //To get the Current Date
  const month = new Date().getMonth() + 1; //To get the Current Month
  const year = new Date().getFullYear(); //To get the Current Year
  const hours = new Date().getHours(); //To get the Current Hours
  const min = new Date().getMinutes(); //To get the Current Minutes
  const sec = new Date().getSeconds(); //To get the Current Seconds
  return {date: `${date}/${month}/${year}`, hour: `${hours}:${min}`};
};
