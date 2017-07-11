const base = require('./base');

module.exports = function(context) {
    return base({
        title: context.title,
        content: `
          <h1>${context.title}</h1>
          <p>Welcome to ${context.title}</p>
          `
    });
}