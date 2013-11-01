# {{paginate}} [![NPM version](https://badge.fury.io/js/helper-paginate.png)](http://badge.fury.io/js/helper-paginate)

> {{paginate}} handlebars helper for Assemble.

#### See [live examples →](http://assemble.github.io/example-pagination/)

![image](https://f.cloud.github.com/assets/383994/1436000/b8fd1968-414c-11e3-9019-90e3106ead76.png)


## Quickstart
In the root of your project, run the following in the command line:

```bash
npm i handlebars-helper-paginate --save-dev
```
Please [create an issue](https://github.com/helpers/handlebars-helper-paginate/issues/new) to report bugs or to make a feature request.


## Assemble config
If you use [Assemble config](http://assemble.io) and Grunt, in your Gruntfile simply add `handlebars-helper-paginate` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-paginate' module must also be listed in devDependencies
      // for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-paginate', 'foo/*.js']
    }
    ...
  }
});
```

You can now use begin using the helper in your templates:

```handlebars
{{paginate pagination}}
```
Results in:

```html
<ul class="pager">
  <li class="previous">
    <a href="index.html">&larr; Previous</a>
  </li>
  <li> <a href="index.html">1</a> </li>
  <li class="active">
    <a href="foo-01.html">2</a>
  </li>
  <li> <a href="foo-02.html">3</a> </li>
  <li> <a href="foo-03.html">4</a> </li>
  <li> <a href="foo-04.html">5</a> </li>
  <li> <a href="foo-05.html">6</a> </li>
  <li class="next">
    <a href="foo-02.html">Next &rarr;</a>
  </li>
</ul>
```

See [live examples](http://assemble.github.io/example-pagination/).

## Options

### modifier
Type: `String`
Default: `undefined`

Allows defining a modifier class for the pager.

```handlebars
{{paginate pagination modifier="pager-justified"}}
```

Please [create an issue](https://github.com/helpers/handlebars-helper-paginate/issues/new) to report bugs or to make a feature request.


## Author

+ [github/Jon Schlinkert](http://github.com/Jon Schlinkert)
+ [twitter/Jon Schlinkert](http://twitter.com/Jon Schlinkert)


## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.