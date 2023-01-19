import {useEffect, useState} from 'react';
import {getFullDate} from '../utils/date';

export const useDateTime = () => {
  const [dateShow, setDate] = useState<string>('');
  const [hourShow, setHour] = useState<string>('');

  const fillDate = () => {
    const {date, hour} = getFullDate();
    setDate(date);
    setHour(hour);
  };

  useEffect(() => {
    fillDate();
    const interval = setInterval(() => {
      fillDate();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return {dateShow, hourShow};
};
