const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const PORT = process.env.PORT || 3000;

const app = new Koa();
app.use(cors())
  .use(bodyParser());
  
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
