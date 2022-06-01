export const timeConvert = (n: number): string => {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + " hour(s) and " + rminutes + " minute(s)";
};

// export const getData = async (url: string) => {
//   const data = await fetch(url).then((response) => response.json());
//   return data?.results;
// };
