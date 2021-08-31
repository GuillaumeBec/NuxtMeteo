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

export const fahreineitToCelcius = (fahrenheit: number) => (fahrenheit - 32) / 1.8;

export const celciusToFahreineit = (fahrenheit: number) => fahrenheit * 1.8 + 32;
