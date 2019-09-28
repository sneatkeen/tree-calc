const Router = require('koa-router');

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

  try {
    if (!flyFrom || !dateFrom || !dateTo) return handleBadRequest(ctx.request.href, ctx, next);

    const apiResponse = await apiService(ctx.request.body);
    if (apiResponse.status !== 200) return handleServerError(apiResponse.data, ctx, next);
    
    ctx.body = await appendTreeCtl(apiResponse.data);
    ctx.status = 200;
  } catch (err) {
    handleServerError(err, ctx, next);
  }
});

module.exports = router;
