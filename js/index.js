var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
var Editor = function Editor(props) {
  return React.createElement(
    'textarea',
    {
      onChange: function onChange(event) {
        return props.onChangeEditor(event.target.value);
      },
      id: 'editor'
    },

    props.defaultText
  );
};

var Previewer = function Previewer(props) {
  return React.createElement('div', {
    id: 'preview',
    dangerouslySetInnerHTML: { __html: marked(props.text, { breaks: true }) }
  });
};
var App = (function(_React$Component) {
  _inherits(App, _React$Component);
  function App(props) {
    _classCallCheck(this, App);
    var _this = _possibleConstructorReturn(
      this,
      (App.__proto__ || Object.getPrototypeOf(App)).call(this, props)
    );
    _this.onChangeEditor = function(text) {
      console.log(text);
      _this.setState({ text: text });
    };
    _this.state = {
      text:
        '# The largest heading \n' +
        '## The second largest heading \n' +
        '**This is a bolded text**\n' +
        '\nThis site was built using [Codepen](https://codepen.io/MariaAga/).\n' +
        'you can:\n' +
        '- edit text in the editor \n' +
        '- preview the markdown in the previewer\n' +
        '\nhere are some code examples:\n' +
        '``` javascript \n\
        function test() {\n\
          console.log("notice the blank line before this function?");\n\
        }\n\
        ```\n' +
        "Use `git status` to list all new or modified files that haven't yet been committed.\n" +
        '\n![Arthur Weasley](https://vignette.wikia.nocookie.net/harrypotter/images/8/84/Arthur_Weasley.jpg/revision/latest?cb=20060607165546 "Arthur Weasley")\n' +
        '> Now, Harry you must know all about Muggles, tell me, what exactly is the function of a rubber duck? \
        -Arthur Weasley\n'
    };
    return _this;
  }
  _createClass(App, [
    {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { class: 'app' },
          React.createElement(
            'div',
            { class: 'editorWrap' },
            React.createElement('label', { class: 'editorH' }, ' Editor '),
            React.createElement(Editor, {
              onChangeEditor: this.onChangeEditor,
              defaultText: this.state.text
            })
          ),

          React.createElement(
            'div',
            { class: 'previewWrap' },
            React.createElement('label', { class: 'previewH' }, ' Preview '),
            React.createElement(Previewer, { text: this.state.text })
          )
        );
      }
    }
  ]);
  return App;
})(React.Component);

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('appWrap')
);
