module.exports = async (err, ctx, next) => {
  await next();
  // eslint-disable-next-line no-console
  console.log(err);
  ctx.body = {
    ...ctx.body,
    message: 'Oops, we\'ve messed up! Something isn\'t working.',
  };
  ctx.status = 500;
};
