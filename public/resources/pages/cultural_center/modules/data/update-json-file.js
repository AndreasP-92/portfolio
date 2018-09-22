const updateJsonFile    = require('update-json-file');
const filePath          = require('./hallData.json');
const options = { defaultValue: {halls} }
 
updateJsonFile(filePath, (data) => {
    // factory function is run each time, so `data` is a new object each time
    data.halls[0].hall7[0].booked = 123
    return data
  }, options)

