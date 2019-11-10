exports.errorHandler = (res, e, endpoint) => {
  if (!e.status) {
    console.log(`${endpoint} error: `, e);
    return res.status(500).json({ message: e.message });
  }
  console.log(`${endpoint} error: `, e.error);
  res.status(e.status).json({ message: e.error.message });
};

exports.checkExists = (data, dataName) => {
  if (!data) {
    throw {
      message: new Error(`${dataName} not found`),
      status: 404,
    }
  }
  return true;
};
