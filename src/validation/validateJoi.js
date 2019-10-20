const validateJoi = async (schema, values) => {
  try {
    const result = await schema.validateAsync(values);
    console.log(result);
    return { error: false, result };
  } catch (err) {
    const messages = err.details.map(error => error.message);
    return { error: true, messages };
  }
};

module.exports = validateJoi;
