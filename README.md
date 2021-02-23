# Speech to Text

This package helps you to convert speech to text. Uses only the browser api for the transformation.

# How to use ?

`npm i speech--two--text --save`

After that,

```

import {recognizeSpeech} from 'speechTotext'


recognizeSpeech({status:'ON/OFF (Use one)'})

define a html element for the result printing with a class name 'speechResult'
eg: 
  <p id="speechResult"></p>

```
This returns the text after success end. If nothing is spoke the return no-speech.




