import { useState, useEffect } from 'react';

export interface DateAndTime {
  currentDate: Date;
  currentTime: Date;
  formattedDate: string;
  formattedTime: string;
  locale: string;
}

export const useDateAndTime = (): DateAndTime => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    // Update time every second for real-time updates
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Update date every minute (in case date changes at midnight)
    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    // Cleanup intervals when component unmounts
    return () => {
      clearInterval(timeInterval);
      clearInterval(dateInterval);
    };
  }, []);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (time: Date): string => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return {
    currentDate,
    currentTime,
    formattedDate: formatDate(currentDate),
    formattedTime: formatTime(currentTime),
    locale: 'en-US' // For future localization
  };
};
