module.exports = async (path, ctx, next) => {
  await next();
  ctx.body = {
    ...ctx.body,
    message: `Error while requesting ${path}, check documentation to structure your request in proper way`,
  };
  ctx.status = 401;
};
