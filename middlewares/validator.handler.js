const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  //console.log('validatorHandler');
  // closure
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
