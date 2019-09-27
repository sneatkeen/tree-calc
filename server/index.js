const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./routes/router');
const compress = require('koa-compress');

const PORT = process.env.PORT || 3000;

const app = new Koa();
app.use(cors())
  .use(compress())
  .use(bodyParser())
  .use(router.routes());
  
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
