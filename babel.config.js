BUILD_TYPE= process.env.BUILD_TYPE || 'web-test';
console.log("BABEL read babel.config.js, BUILD_TYPE="+BUILD_TYPE);
const presets = [
  [
    "@babel/env",
    {
      targets: {
        chrome: "36", //A:kitkat 4.4 ; Lenovo de mau,mod2017 v68
      },
      useBuiltIns: "usage",
      corejs: 3
    },
  ],
];

var plugins= [
		'@babel/plugin-proposal-export-default-from'
]

if (BUILD_TYPE=='node') { 
	//A: solo para ver nros de linea en stack trace ejecutando en consola
	plugins.push('source-map-support')
}

module.exports = { 
	sourceMaps: "inline",
	presets,
	plugins
};
