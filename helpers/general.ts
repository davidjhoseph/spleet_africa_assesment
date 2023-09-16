import moment from 'moment';

export const categories = ['Conference', 'Summit', 'Musical', 'Fundraising', 'Fitness', 'Meetup', 'Others']

export const tConvert = (timeString: number) => {
    // Check correct time format and split into components
    let time = timeString?.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [timeString];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1) as RegExpMatchArray | [number];  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    
    return time.join (''); // return adjusted time or original string
  }
export const dConvert = (dateString: string, format: string | undefined = 'dddd, MMMM Do, YYYY') => {
    const date = moment(dateString);
    const formattedDate = date.format(format);
    return formattedDate;
  }