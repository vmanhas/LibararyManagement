const logger = (req, res, next) => {
    console.log('Logger Activated 🔥');
    console.log(`${req.method} ${req.url}`);
    next();
};
module.exports = logger;
