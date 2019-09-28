const Router = require('koa-router');
const path = require('path');
const { PythonShell } = require('python-shell');

const apiService = require('../service/apiService');
const handleServerError = require('./handleServerError');
const handleBadRequest = require('./handleBadRequest');
const appendTreeCtl = require('./appendTreeCtl');

const router = new Router();

router.post('/search', async (ctx, next) => {
  const {
    flyFrom,
    dateFrom,
    dateTo,
  } = ctx.request.body;

  let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: path.resolve(__dirname, '../py'),
    args: ['London'],
  };

  PythonShell.run('airport_code_distance.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });
  PythonShell.run('airport_code_distance.py', { ...options, args: ['Munich'] }, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });

  try {
    if (!flyFrom || !dateFrom || !dateTo) return handleBadRequest(ctx.request.href, ctx, next);

    const apiResponse = await apiService(ctx.request.body);
    if (apiResponse.status !== 200) return handleServerError(apiResponse.data, ctx, next);
  
    ctx.body = apiResponse.data;
    ctx.status = 200;
  } catch (err) {
    handleServerError(err, ctx, next);
  }
});

module.exports = router;
