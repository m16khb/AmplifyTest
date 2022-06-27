let date = new Date();
let offset = date.getTimezoneOffset() * 60000;
let dateOffset = new Date(date.getTime() - offset);
let now = dateOffset.toISOString();

console.log('hello');
console.log(now);
process.env.TZ = 'Asia/Seoul';
