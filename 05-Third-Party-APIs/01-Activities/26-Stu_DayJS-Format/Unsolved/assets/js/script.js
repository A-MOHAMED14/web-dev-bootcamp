// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
const gradDate = dayjs('2023/06/15').format('MMM DD, YYYY')
$("#1a").text(gradDate)

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
const weekDay = dayjs('01/01/2027').format('dddd')
$("#2a").text(weekDay)

// TODO: 3. What is the current time in the format: hours:minutes:seconds
const currentTime = dayjs().format('hh:mm:ss')
$('#3a').text(currentTime)

// TODO: 4. What is the current Unix timestamp?
const unix = dayjs().unix()
$('#4a').text(unix)


// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
const parsedUnix = dayjs.unix(1318781876).format('MMM DD, YYYY, hh:mm:ss a')
$('#5a').text(parsedUnix)

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
const date1 = dayjs('May 4, 2027')
const date2 = dayjs()
const difference = date1.diff(date2, 'days')

$('#6a').text(difference)
