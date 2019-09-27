module.exports = (str) => str.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
