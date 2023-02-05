const moment = require('moment');

module.exports = value => {
  const dateObject = moment(value);
  return `${dateObject.format('MMM DD')}, ${dateObject.format('Y')}`;
};
