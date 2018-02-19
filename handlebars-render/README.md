# handlebars-render

In Express one uses the built-in `res.render()` function, but in Koa I had
nothing like that, so I just came up with this bit of code.

Basic usage would be something like:

```js
const path = require('path')
const Koa = require('koa')
const render = require('./render')

const app = new Koa()

app.context.render = render(path.resolve(__dirname, '..', 'views'))

app.use(ctx => {
  ctx.body = ctx.render('hello_world', { name: 'Eduardo' })
})
```

Of course, you're not limited to using it in Koa.  You could also use it in
Restify or something like that.
