export function getTimeDifference(currentTime, publishedTime) {
  let timeDiff =currentTime - publishedTime;
  let time = new Date(timeDiff); // miliseconds from epoch
  const currentMinut = time.getMinutes();
  const currentHour = time.getHours();
  const currentDay = time.getDate();
  const currentMonth = time.getMonth();
  const currentYear = Math.abs(time.getUTCFullYear() - 1970);
  if(currentYear > 0) {
    return currentYear + " years ago";
  }
  if(currentMonth > 0) {
    return currentMonth + " months ago";
  }
  if(currentDay > 0) {
    return currentDay + " days ago";
  }
  if(currentHour > 0) {
    return currentHour + " hours ago";
  }
  return currentMinut + " minuts ago";
}

export function softByPost(items = []) {
  return items.sort(function (a, b) {
    return b.post_count - a.post_count;
  });
}