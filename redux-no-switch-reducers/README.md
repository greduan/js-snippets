# redux-no-switch-reducers

The idea is to remove switch statements from our reducers.  Sure they're
the default solution used, but they don't look nice.

## Usage

Note that code is only example code.  Incorporate this snippet into your code as
you see fit.

```js
// myReducer.js

import { INCREMENT, DECREMENT, MULTIPLY } from './actions'
import createReducer from './createReducer'

export default createReducer({
  [INCREMENT]: (state, action) => state + 1,
  [DECREMENT]: (state, action) => state - 1,
  [MULTIPLY]: (state, action) => state * action.payload,
})
```
