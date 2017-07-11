const base = require('./base');

module.exports = function(context) {
    return base({
        title: context.error.status,
        content: `
            <h1>${context.error.message}</h1>
            <h2>${context.error.status}</h2>
            <pre>${context.error.stack}</pre>
            `
    });
}

