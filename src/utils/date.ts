export const getFullDate = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const min = new Date().getMinutes();
  return {
    date: `${date}/${String(month).padStart(2, '0')}/${year}`,
    hour: `${hours}:${String(min).padStart(2, '0')}`,
  };
};
