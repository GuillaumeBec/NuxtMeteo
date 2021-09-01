export const createLink = (url: string, external?: boolean, download?: boolean) => {
  const link = document.createElement('a');
  link.href = url;
  if (download) {
    link.setAttribute('download', '');
  } else if (external) {
    link.target = '_blank';
  }
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
};

export const fahreineitToCelcius = (fahrenheit: number) => {
  return (fahrenheit - 32) / 1.8;
};

export const celciusToFahreineit = (fahrenheit: number) => {
  return (fahrenheit + 32) * 1.8;
};

export const meterBySecondsToKmByHour = (meterBySecond: number) => {
  return meterBySecond * 3.6;
};
