const { CONFLICT_STATUS } = require('../utils/constants');

class ConflictRequest extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_STATUS;
  }
}
module.export = ConflictRequest;
