const requestData = require('./requestData');

module.exports = (endpoint, formData) => {
  const data = requestData[endpoint];
  for (let r in data) {
    if (typeof(formData[r]) !== data[r]) {
      throw {
        error: new Error(`${r} must exist and be type ${data[r]}`),
        status: 400,
      }
    }
  }
  return true;
}
