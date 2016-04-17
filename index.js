var render = require('stylus').render;

module.exports = stylusHTML;

var styles = /(<\s*style[^>]*>)(([^](?!<\/style>))*.)/gi;

function stylusHTML( code, options ) {
  code = code.replace(styles, function(whole, tag, code, single) {
    return tag + render(code, options);
  });
  return code;
}

stylusHTML.defaults = {
  accept: [ ".html", ".htm" ]
};
