const errorHandler = (err, req, res, next) => {
  return res.status(500).json({
    msg: err.message ?? "Something went wrong, please try again later",
  });
};

module.exports = errorHandler;
