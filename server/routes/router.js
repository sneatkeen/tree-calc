const Router = require('koa-router');

const apiService = require('./apiService');
const handleServerError = require('./handleServerError');
const handleBadRequest = require('./handleBadRequest');
const appendTreeCalc = require('./appendTreeCalc');

const router = new Router();

router.post('/search', async (ctx, next) => {
  const {
    flyFrom,
    dateFrom,
    dateTo,
  } = ctx.request.body;

  try {
    if (!flyFrom || !dateFrom || !dateTo) return handleBadRequest(ctx.request.href, ctx, next);

    const apiResponse = await apiService(ctx.request.body);
    if (apiResponse.status !== 200) return handleServerError(apiResponse.data, ctx, next);
    console.log(apiResponse.data);
    
    ctx.body = appendTreeCalc(apiResponse.data);
    ctx.status = 200;
  } catch (err) {
    handleServerError(err, ctx, next);
  }
});

module.exports = router;
