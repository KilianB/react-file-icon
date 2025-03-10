function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var colord = require('colord');
var namesPlugin = _interopDefault(require('colord/plugins/names'));
var uniqueId = _interopDefault(require('lodash.uniqueid'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var glyphs = {
  '3d': /*#__PURE__*/React.createElement("path", {
    d: "M18 14.625V3.375L9 0 0 3.375v11.25L9 18l9-3.375zM9 2.136l5.918 2.22-5.98 2.242-5.919-2.22L9 2.137zM2 13.239V5.065l6.438 2.414v8.174L2 13.24zM9.438 15.7L16 13.239V5.018l-6.563 2.46V15.7z",
    transform: "translate(15 10)",
    fillRule: "evenodd"
  }),
  acrobat: /*#__PURE__*/React.createElement("path", {
    d: "M10.15 1.095C9.938.33 9.42-.051 8.984.005c-.528.068-1.09.382-1.314.876-.63 1.416.685 5.582.887 6.279-1.28 3.863-5.66 11.5-7.806 12.017-.045-.505.225-1.965 3.055-3.785.146-.157.315-.348.393-.472-2.392 1.168-5.492 3.044-3.628 4.448.102.079.259.146.439.213 1.426.528 3.425-1.201 5.435-5.121 2.213-.73 3.999-1.28 6.526-1.662 2.762 1.875 4.616 2.257 5.874 1.774.348-.135.898-.573 1.055-1.145-1.022 1.258-3.414.382-5.323-.82 1.763-.191 3.582-.303 4.369-.056 1 .314.965.808.954.876.079-.27.191-.708-.022-1.056-.842-1.37-4.706-.573-6.11-.427-2.212-1.336-3.74-3.717-4.358-5.436.573-2.212 1.19-3.818.742-5.413zm-.954 4.638C8.826 4.42 8.309 1.5 9.14.556c1.628.932.618 3.144.056 5.177zm3.044 6.514c-2.134.393-3.583.944-5.66 1.764.617-1.202 1.785-4.268 2.346-6.29.787 1.573 1.741 3.111 3.314 4.526z",
    transform: "translate(14 9)",
    fillRule: "evenodd"
  }),
  audio: /*#__PURE__*/React.createElement("path", {
    d: "M.25 4.75v4.5h3L7 13V1L3.25 4.75h-3zM10.375 7A3.375 3.375 0 0 0 8.5 3.977v6.037A3.355 3.355 0 0 0 10.375 7zM8.5.421v1.545A5.254 5.254 0 0 1 12.25 7a5.254 5.254 0 0 1-3.75 5.032v1.545A6.747 6.747 0 0 0 13.75 7 6.747 6.747 0 0 0 8.5.421z",
    transform: "translate(17 12)",
    fillRule: "evenodd"
  }),
  binary: /*#__PURE__*/React.createElement("path", {
    d: "M2.338 6.112c1.192 0 1.928-1.072 1.928-2.68 0-1.56-.576-2.504-1.8-2.504C1.274.928.538 2 .538 3.608c0 1.56.576 2.504 1.8 2.504zM1.61 3.408c0-1.008.24-1.568.776-1.568.376 0 .616.336.728.888l-1.504.776v-.096zM2.418 5.2c-.368 0-.608-.32-.72-.856l1.496-.768v.056c0 1.008-.24 1.568-.776 1.568zm7.03.8l.088-.944H8.36V.896L7.272.984v.592l-1.184.112.024.824h1.16v2.544h-1.32V6zm5.199 0l.088-.944h-1.176V.896L12.47.984v.592l-1.184.112.024.824h1.16v2.544h-1.32V6zM4.25 14l.088-.944H3.162v-4.16l-1.088.088v.592L.89 9.688l.024.824h1.16v2.544H.754V14zm5.198 0l.088-.944H8.36v-4.16l-1.088.088v.592l-1.184.112.024.824h1.16v2.544h-1.32V14zm3.287.112c1.192 0 1.928-1.072 1.928-2.68 0-1.56-.576-2.504-1.8-2.504-1.192 0-1.928 1.072-1.928 2.68 0 1.56.576 2.504 1.8 2.504zm-.728-2.704c0-1.008.24-1.568.776-1.568.376 0 .616.336.728.888l-1.504.776v-.096zm.808 1.792c-.368 0-.608-.32-.72-.856l1.496-.768v.056c0 1.008-.24 1.568-.776 1.568z",
    transform: "translate(16 11)",
    fillRule: "evenodd"
  }),
  code: /*#__PURE__*/React.createElement("path", {
    d: "M4.078 13.67c-1.875-.527-2.812-1.738-2.812-3.634V9.49C1.266 8.437.844 7.911 0 7.911V6.138c.844 0 1.266-.529 1.266-1.586v-.64c.015-.938.257-1.696.726-2.274C2.466 1.06 3.162.64 4.078.38l.492 1.375c-.656.25-.997.95-1.023 2.102v.695c0 1.167-.482 1.99-1.445 2.469.963.479 1.445 1.304 1.445 2.476v.688c.026 1.15.367 1.851 1.023 2.101l-.492 1.383zm7.844 0c1.875-.527 2.812-1.738 2.812-3.634V9.49c0-1.052.422-1.578 1.266-1.578V6.138c-.844 0-1.266-.529-1.266-1.586v-.64c-.015-.938-.257-1.696-.726-2.274-.474-.578-1.17-.998-2.086-1.258l-.492 1.375c.656.25.997.95 1.023 2.102v.695c0 1.167.482 1.99 1.445 2.469-.963.479-1.445 1.304-1.445 2.476v.688c-.026 1.15-.367 1.851-1.023 2.101l.492 1.383z",
    transform: "translate(16 13)",
    fillRule: "evenodd"
  }),
  code2: /*#__PURE__*/React.createElement("path", {
    d: "M7.4 10.6L2.8 6l4.6-4.6L6 0 0 6l6 6 1.4-1.4zm5.2 0L17.2 6l-4.6-4.6L14 0l6 6-6 6-1.4-1.4z",
    transform: "translate(14 14)",
    fillRule: "evenodd"
  }),
  compressed: /*#__PURE__*/React.createElement("path", {
    d: "M.25 0A.25.25 0 0 0 0 .25v1.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 2 1.75V.25A.25.25 0 0 0 1.75 0H.25zM1 17a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H1zm0 4v3h2v-3H1zM2 2.25A.25.25 0 0 1 2.25 2h1.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 3.75v-1.5zM.25 4a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 2 5.75v-1.5A.25.25 0 0 0 1.75 4H.25zM2 6.25A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 7.75v-1.5zM.25 8a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 2 9.75v-1.5A.25.25 0 0 0 1.75 8H.25zM2 10.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5zM.25 12a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25H.25zM2 14.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5z",
    transform: "translate(15 1)",
    fillRule: "evenodd"
  }),
  document: /*#__PURE__*/React.createElement("path", {
    d: "M12 4H0v2h12V4zM0 10h18V8H0v2zM0 0v2h18V0H0z",
    transform: "translate(15 15)",
    fillRule: "evenodd"
  }),
  drive: /*#__PURE__*/React.createElement("path", {
    d: "M2.199.289A.5.5 0 0 1 2.652 0h8.696a.5.5 0 0 1 .453.289l1.867 4a.5.5 0 0 1-.453.711H.785a.5.5 0 0 1-.453-.711l1.867-4zM13 6H1a.752.752 0 0 0-.75.75v4.5c0 .412.338.75.75.75h12c.412 0 .75-.338.75-.75v-4.5A.752.752 0 0 0 13 6zm-9.75 4.5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5z",
    transform: "translate(17 13)",
    fillRule: "evenodd"
  }),
  font: /*#__PURE__*/React.createElement("path", {
    d: "M3.722 8.702l-.686 1.89c-.053.14-.094.28-.123.421-.03.135-.044.252-.044.352 0 .304.097.527.29.668.2.14.501.21.905.21h.414V13H.083v-.756h.343c.176 0 .325-.018.448-.053a.81.81 0 0 0 .334-.22c.1-.105.193-.249.281-.43.094-.182.197-.416.308-.704L5.787.15h1.406l4.07 11.136c.07.187.14.343.21.466.077.123.165.222.264.298.1.07.214.12.343.15.129.03.281.044.457.044h.237V13H7.826v-.756h.413c.72 0 1.081-.287 1.081-.862 0-.1-.014-.202-.044-.307a3.274 3.274 0 0 0-.105-.36l-.72-2.013H3.72zM7.009 4.65c-.188-.533-.36-1.031-.519-1.494a15.92 15.92 0 0 1-.378-1.354 7.12 7.12 0 0 1-.15.633 16.95 16.95 0 0 1-.395 1.283c-.082.229-.175.484-.28.765L4.063 7.796h4.061L7.009 4.65zm8.411 5.74c0 .562.117.984.351 1.265.24.275.61.413 1.108.413.363 0 .691-.059.984-.176.3-.117.551-.284.756-.5.211-.218.372-.481.483-.792.112-.31.168-.656.168-1.037V8.104l-1.152.053c-.51.023-.937.088-1.283.193-.34.1-.615.243-.826.43a1.546 1.546 0 0 0-.457.678c-.088.27-.132.58-.132.931zm2.18-6.32c-.346 0-.627.05-.844.15a1.182 1.182 0 0 0-.501.404 1.594 1.594 0 0 0-.237.624c-.041.24-.062.5-.062.782-.498 0-.879-.085-1.143-.255-.257-.17-.386-.463-.386-.879 0-.31.085-.574.255-.79.17-.218.401-.393.694-.528.299-.14.644-.243 1.037-.308a7.76 7.76 0 0 1 1.257-.097c.55 0 1.031.056 1.441.167.41.106.753.282 1.029.528.275.246.48.568.615.967.14.392.21.876.21 1.45v4.667c0 .252.021.46.062.624a.928.928 0 0 0 .194.395c.088.1.202.17.343.211.146.041.319.062.518.062h.053V13H19.7l-.281-1.547h-.15c-.187.252-.369.483-.544.694-.176.211-.37.393-.58.545-.211.152-.452.27-.721.352a3.053 3.053 0 0 1-.958.131c-.399 0-.77-.058-1.116-.175a2.369 2.369 0 0 1-.888-.519 2.516 2.516 0 0 1-.58-.896c-.14-.364-.211-.791-.211-1.284 0-.955.34-1.664 1.02-2.127.68-.462 1.707-.714 3.084-.755l1.495-.053V6.285a6.93 6.93 0 0 0-.053-.888 1.778 1.778 0 0 0-.229-.703 1.14 1.14 0 0 0-.51-.457c-.216-.111-.51-.167-.878-.167z",
    transform: "translate(13 12)",
    fillRule: "evenodd"
  }),
  image: /*#__PURE__*/React.createElement("path", {
    d: "M13 0L9.25 5l2.85 3.8-1.6 1.2C8.81 7.75 6 4 6 4l-6 8h22L13 0z",
    transform: "translate(13 14)",
    fillRule: "evenodd"
  }),
  presentation: /*#__PURE__*/React.createElement("path", {
    d: "M2 4H0v10c0 1.1.9 2 2 2h14v-2H2V4zm16-4H6C4.9 0 4 .9 4 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 10H6V2h12v8z",
    transform: "matrix(-1 0 0 1 34 12)",
    fillRule: "evenodd"
  }),
  settings: /*#__PURE__*/React.createElement("path", {
    d: "M13.572 8.735c.03-.24.053-.48.053-.735s-.023-.495-.053-.735l1.583-1.237a.378.378 0 0 0 .09-.48l-1.5-2.595a.377.377 0 0 0-.457-.165l-1.868.75a5.48 5.48 0 0 0-1.268-.735L9.868.815A.366.366 0 0 0 9.5.5h-3a.366.366 0 0 0-.367.315l-.285 1.988a5.762 5.762 0 0 0-1.268.735l-1.868-.75a.366.366 0 0 0-.457.165l-1.5 2.595a.37.37 0 0 0 .09.48l1.583 1.237c-.03.24-.053.488-.053.735 0 .248.022.495.053.735L.845 9.973a.378.378 0 0 0-.09.48l1.5 2.595c.09.165.292.225.458.165l1.867-.75c.39.3.81.547 1.268.735l.285 1.987c.022.18.18.315.367.315h3a.366.366 0 0 0 .367-.315l.285-1.988a5.762 5.762 0 0 0 1.268-.734l1.867.75c.173.067.368 0 .458-.165l1.5-2.595a.378.378 0 0 0-.09-.48l-1.582-1.238zM8 10.625A2.628 2.628 0 0 1 5.375 8 2.628 2.628 0 0 1 8 5.375 2.628 2.628 0 0 1 10.625 8 2.628 2.628 0 0 1 8 10.625z",
    transform: "translate(16 11)",
    fillRule: "evenodd"
  }),
  spreadsheet: /*#__PURE__*/React.createElement("path", {
    d: "M0 8h6V5H0v3zm0 5h6v-3H0v3zM0 3h6V0H0v3zm8 5h12V5H8v3zm0 5h12v-3H8v3zM8 0v3h12V0H8z",
    transform: "translate(14 14)",
    fillRule: "evenodd"
  }),
  vector: /*#__PURE__*/React.createElement("path", {
    d: "M14.5 2V1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1H3.937a2 2 0 1 0 0 1h3.936A9 9 0 0 0 3 11v1h2v-1a7.003 7.003 0 0 1 4.594-6.576A1 1 0 0 0 10.5 5h3a1 1 0 0 0 .906-.576A7.003 7.003 0 0 1 19 11v1h2v-1a9 9 0 0 0-4.873-8h3.936a2 2 0 1 0 0-1H14.5zm-1-1h-3v3h3V1zM2 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm19 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",
    transform: "translate(12 14)",
    fillRule: "evenodd"
  }),
  video: /*#__PURE__*/React.createElement("path", {
    d: "M10.75 3.875V1.25A.752.752 0 0 0 10 .5H1a.752.752 0 0 0-.75.75v7.5c0 .412.338.75.75.75h9c.412 0 .75-.338.75-.75V6.125l3 3V.875l-3 3z",
    transform: "translate(17 14)"
  })
};

colord.extend([namesPlugin]);
var propTypes = {
  /** Override style for svg */
  svgProps: PropTypes.object,

  /** Color of icon background */
  color: PropTypes.string,

  /** Text to display in label */
  extension: PropTypes.string,

  /** Displays the corner fold */
  fold: PropTypes.bool,

  /** Color of the corner fold */
  foldColor: PropTypes.string,

  /** Color of file type icon */
  glyphColor: PropTypes.string,

  /** Color of page gradient */
  gradientColor: PropTypes.string,

  /** Opacity of page gradient */
  gradientOpacity: PropTypes.number,

  /** Color of label */
  labelColor: PropTypes.string,

  /** Color of label text */
  labelTextColor: PropTypes.string,

  /** Displays the label in all caps */
  labelUppercase: PropTypes.bool,

  /** Corner radius of the file icon */
  radius: PropTypes.number,

  /** Type of glyph icon to display */
  type: PropTypes.oneOf(['3d', 'acrobat', 'audio', 'binary', 'code', 'code2', 'compressed', 'document', 'drive', 'font', 'image', 'presentation', 'settings', 'spreadsheet', 'vector', 'video'])
};
var VIEWBOX = {
  WIDTH: 40,
  HEIGHT: 48
};
var ICON = {
  WIDTH: VIEWBOX.WIDTH,
  HEIGHT: VIEWBOX.HEIGHT,
  X_OFFSET: 0
};
var FOLD = {
  HEIGHT: 12
};
var LABEL_HEIGHT = 14;
var FileIcon = function FileIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'whitesmoke' : _ref$color,
      extension = _ref.extension,
      _ref$fold = _ref.fold,
      fold = _ref$fold === void 0 ? true : _ref$fold,
      foldColor = _ref.foldColor,
      glyphColor = _ref.glyphColor,
      _ref$gradientColor = _ref.gradientColor,
      gradientColor = _ref$gradientColor === void 0 ? 'white' : _ref$gradientColor,
      _ref$gradientOpacity = _ref.gradientOpacity,
      gradientOpacity = _ref$gradientOpacity === void 0 ? 0.25 : _ref$gradientOpacity,
      labelColor = _ref.labelColor,
      _ref$labelTextColor = _ref.labelTextColor,
      labelTextColor = _ref$labelTextColor === void 0 ? 'white' : _ref$labelTextColor,
      _ref$labelUppercase = _ref.labelUppercase,
      labelUppercase = _ref$labelUppercase === void 0 ? false : _ref$labelUppercase,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? 4 : _ref$radius,
      _ref$svgProps = _ref.svgProps,
      svgProps = _ref$svgProps === void 0 ? null : _ref$svgProps,
      type = _ref.type;
  var UNIQUE_ID = uniqueId();
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + VIEWBOX.WIDTH + " " + VIEWBOX.HEIGHT,
    width: "100%",
    style: {
      maxWidth: '100%'
    }
  }, svgProps), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "pageRadius" + UNIQUE_ID
  }, /*#__PURE__*/React.createElement("rect", {
    x: ICON.X_OFFSET,
    y: "0",
    rx: radius,
    ry: radius,
    width: ICON.WIDTH,
    height: ICON.HEIGHT
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "foldCrop"
  }, /*#__PURE__*/React.createElement("rect", {
    width: ICON.WIDTH,
    height: FOLD.HEIGHT,
    transform: "rotate(-45 0 " + FOLD.HEIGHT + ")"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "100%",
    y1: "0%",
    y2: "100%",
    id: "pageGradient" + UNIQUE_ID
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: gradientColor,
    stopOpacity: gradientOpacity,
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: gradientColor,
    stopOpacity: "0",
    offset: "66.67%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "file",
    clipPath: "url(#pageRadius" + UNIQUE_ID + ")"
  }, fold ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M" + ICON.X_OFFSET + " 0 h " + (ICON.WIDTH - FOLD.HEIGHT) + " L " + (ICON.WIDTH + ICON.X_OFFSET) + " " + FOLD.HEIGHT + " v " + (ICON.HEIGHT - FOLD.HEIGHT) + " H " + ICON.X_OFFSET + " Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M" + ICON.X_OFFSET + " 0 h " + (ICON.WIDTH - FOLD.HEIGHT) + " L " + (ICON.WIDTH + ICON.X_OFFSET) + " " + FOLD.HEIGHT + " v " + (ICON.HEIGHT - FOLD.HEIGHT) + " H " + ICON.X_OFFSET + " Z",
    fill: "url(#pageGradient" + UNIQUE_ID + ")"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: ICON.X_OFFSET,
    y: "0",
    width: ICON.WIDTH,
    height: ICON.HEIGHT,
    fill: color
  }), /*#__PURE__*/React.createElement("rect", {
    x: ICON.X_OFFSET,
    y: "0",
    width: ICON.WIDTH,
    height: ICON.HEIGHT,
    fill: "url(#pageGradient" + UNIQUE_ID + ")"
  }))), fold && /*#__PURE__*/React.createElement("g", {
    transform: "translate(28 " + FOLD.HEIGHT + ") rotate(-90)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: ICON.WIDTH,
    height: ICON.HEIGHT,
    fill: foldColor || colord.colord(color).darken(0.1).toHex(),
    rx: radius,
    ry: radius,
    clipPath: "url(#foldCrop)"
  })), extension && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("g", {
    id: "label"
  }, /*#__PURE__*/React.createElement("rect", {
    fill: labelColor || colord.colord(color).darken(0.3).toHex(),
    x: ICON.X_OFFSET,
    y: ICON.HEIGHT - LABEL_HEIGHT,
    width: ICON.WIDTH,
    height: LABEL_HEIGHT,
    clipPath: "url(#pageRadius" + UNIQUE_ID + ")"
  })), /*#__PURE__*/React.createElement("g", {
    id: "labelText",
    transform: "translate(" + ICON.X_OFFSET + " 34)"
  }, /*#__PURE__*/React.createElement("text", {
    x: ICON.WIDTH / 2,
    y: "10",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontSize: "9",
    fill: labelTextColor,
    textAnchor: "middle",
    style: {
      fontWeight: 'bold',
      textAlign: 'center',
      pointerEvents: 'none',
      textTransform: labelUppercase ? 'uppercase' : 'none',
      userSelect: 'none'
    }
  }, extension))), type && /*#__PURE__*/React.createElement("g", {
    transform: "translate(-4 " + (!extension ? 6 : 0) + ")",
    fill: glyphColor || colord.colord(color).darken(0.15).toHex()
  }, glyphs[type]));
};
FileIcon.propTypes = propTypes;

var defaultStyles = {
  '3dm': {
    labelColor: '#8D1A11',
    type: '3d'
  },
  '3ds': {
    labelColor: '#5FB9AD',
    type: '3d'
  },
  '3g2': {
    type: 'video'
  },
  '3gp': {
    type: 'video'
  },
  '7zip': {
    type: 'compressed'
  },
  aac: {
    type: 'audio'
  },
  aep: {
    type: 'video'
  },
  ai: {
    color: '#423325',
    gradientOpacity: 0,
    labelColor: '#423325',
    labelTextColor: '#FF7F18',
    labelUppercase: true,
    foldColor: '#FF7F18',
    radius: 2
  },
  aif: {
    type: 'audio'
  },
  aiff: {
    type: 'audio'
  },
  asf: {
    type: 'video'
  },
  asp: {
    type: 'code'
  },
  aspx: {
    type: 'code'
  },
  avi: {
    type: 'video'
  },
  bin: {
    type: 'binary'
  },
  bmp: {
    type: 'image'
  },
  c: {
    type: 'code'
  },
  cpp: {
    type: 'code'
  },
  cs: {
    type: 'code'
  },
  css: {
    type: 'code'
  },
  csv: {
    type: 'spreadsheet'
  },
  cue: {
    type: 'document'
  },
  dll: {
    type: 'settings'
  },
  dmg: {
    type: 'drive'
  },
  doc: {
    color: '#2C5898',
    foldColor: '#254A80',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#2C5898',
    labelUppercase: true,
    type: 'document'
  },
  docx: {
    color: '#2C5898',
    foldColor: '#254A80',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#2C5898',
    labelUppercase: true,
    type: 'document'
  },
  dwg: {
    type: 'vector'
  },
  dxf: {
    type: 'vector'
  },
  eot: {
    type: 'font'
  },
  eps: {
    type: 'vector'
  },
  exe: {
    type: 'settings'
  },
  flac: {
    type: 'audio'
  },
  flv: {
    type: 'video'
  },
  fnt: {
    type: 'font'
  },
  fodp: {
    type: 'presentation'
  },
  fods: {
    type: 'spreadsheet'
  },
  fodt: {
    type: 'document'
  },
  fon: {
    type: 'font'
  },
  gif: {
    type: 'image'
  },
  gz: {
    type: 'compressed'
  },
  htm: {
    type: 'code'
  },
  html: {
    type: 'code'
  },
  indd: {
    color: '#4B2B36',
    gradientOpacity: 0,
    labelColor: '#4B2B36',
    labelTextColor: '#FF408C',
    labelUppercase: true,
    foldColor: '#FF408C',
    radius: 2
  },
  ini: {
    type: 'settings'
  },
  java: {
    type: 'code'
  },
  jpeg: {
    type: 'image'
  },
  jpg: {
    type: 'image'
  },
  js: {
    labelColor: '#F7DF1E',
    type: 'code'
  },
  json: {
    type: 'code'
  },
  jsx: {
    labelColor: '#00D8FF',
    type: 'code'
  },
  m4a: {
    type: 'audio'
  },
  m4v: {
    type: 'video'
  },
  max: {
    labelColor: '#5FB9AD',
    type: '3d'
  },
  md: {
    type: 'document'
  },
  mid: {
    type: 'audio'
  },
  mkv: {
    type: 'video'
  },
  mov: {
    type: 'video'
  },
  mp3: {
    type: 'audio'
  },
  mp4: {
    type: 'video'
  },
  mpeg: {
    type: 'video'
  },
  mpg: {
    type: 'video'
  },
  obj: {
    type: '3d'
  },
  odp: {
    type: 'presentation'
  },
  ods: {
    type: 'spreadsheet'
  },
  odt: {
    type: 'document'
  },
  ogg: {
    type: 'audio'
  },
  ogv: {
    type: 'video'
  },
  otf: {
    type: 'font'
  },
  pdf: {
    labelColor: '#D93831',
    type: 'acrobat'
  },
  php: {
    labelColor: '#8892BE',
    type: 'code'
  },
  pkg: {
    type: '3d'
  },
  plist: {
    type: 'settings'
  },
  png: {
    type: 'image'
  },
  ppt: {
    color: '#D14423',
    foldColor: '#AB381D',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#D14423',
    labelUppercase: true,
    type: 'presentation'
  },
  pptx: {
    color: '#D14423',
    foldColor: '#AB381D',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#D14423',
    labelUppercase: true,
    type: 'presentation'
  },
  pr: {
    type: 'video'
  },
  ps: {
    type: 'vector'
  },
  psd: {
    color: '#34364E',
    gradientOpacity: 0,
    labelColor: '#34364E',
    labelTextColor: '#31C5F0',
    labelUppercase: true,
    foldColor: '#31C5F0',
    radius: 2
  },
  py: {
    labelColor: '#FFDE57',
    type: 'code'
  },
  rar: {
    type: 'compressed'
  },
  rb: {
    labelColor: '#BB271A',
    type: 'code'
  },
  rm: {
    type: 'video'
  },
  rtf: {
    type: 'document'
  },
  scss: {
    labelColor: '#C16A98',
    type: 'code'
  },
  sitx: {
    type: 'compressed'
  },
  svg: {
    type: 'vector'
  },
  swf: {
    type: 'video'
  },
  sys: {
    type: 'settings'
  },
  tar: {
    type: 'compressed'
  },
  tex: {
    type: 'document'
  },
  tif: {
    type: 'image'
  },
  tiff: {
    type: 'image'
  },
  ts: {
    labelColor: '#3478C7',
    type: 'code'
  },
  ttf: {
    type: 'font'
  },
  txt: {
    type: 'document'
  },
  wav: {
    type: 'audio'
  },
  webm: {
    type: 'video'
  },
  wmv: {
    type: 'video'
  },
  woff: {
    type: 'font'
  },
  wpd: {
    type: 'document'
  },
  wps: {
    type: 'document'
  },
  xlr: {
    type: 'spreadsheet'
  },
  xls: {
    color: '#1A754C',
    foldColor: '#16613F',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#1A754C',
    labelUppercase: true,
    type: 'spreadsheet'
  },
  xlsx: {
    color: '#1A754C',
    foldColor: '#16613F',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#1A754C',
    labelUppercase: true,
    type: 'spreadsheet'
  },
  yml: {
    type: 'code'
  },
  zip: {
    type: 'compressed'
  },
  zipx: {
    type: 'compressed'
  }
};

exports.FileIcon = FileIcon;
exports.defaultStyles = defaultStyles;
