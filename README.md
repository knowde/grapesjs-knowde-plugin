# GrapesJS Knowde Plugin


## Summary

* Plugin name: `grapesjs-knowde-plugin`
* Knowde blocks:
    * `latest-brands`
* Available layout blocks:
    * `container`
    * `row`
    * `column`
    * `column_break`
* Typography:
    * `text`
    * `header`
    * `paragraph`
* Basic:
    * `image`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-knowde-plugin.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      // ...
      plugins: ['grapesjs-knowde-plugin'],
      pluginsOpts: {
        'grapesjs-knowde-plugin': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import grapesjsKnowdePlugin from 'grapesjs-knowde-plugin';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [grapesjsKnowdePlugin],
  pluginsOpts: {
    [grapesjsKnowdePlugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => grapesjsKnowdePlugin(editor, { /* options */ }),
  ],
});
```



## Options

```js
{
  blocks: {
    // For details see ./consts.js
  },
  blockCategories: {
    // For details see ./consts.js
  },
  labels: {
    // For details see ./consts.js
  },
  gridDevices: true,
  gridDevicesPanel: true
}
```



## Development

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build 
```sh
$ npm run build
```