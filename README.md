# sensitive-words
A simple JS library to filter out sensitive words.

# Example
```shell
$ npm install sensitive-words --save
```

```javascript
const {sensitiveWords} = require('sensitive-words');
// ES2015 modules
import {sensitiveWords} from 'sensitive-words'

const filtered = sensitiveWords(
  'The new Macbook Pro will have a touchbar.',
  ['pro','touchbar']
);

console.log(filtered);
// The new Macbook *** will have a ***.
```