module.exports = {
	// set your styleguidist configuration here
	title: 'Default Style Guide',
	pagePerSection: true,
	require: ['./src/plugins/element.js'],
	sections: [
	  {
	    name: 'Form',
	    components: [ 'src/components/Form/**/[A-Z]*.vue', 'src/components/Form/Label/Select.js' ],
	  },
	  {
	    name: 'ProgressBar',
	    components:  [
			'src/components/ElementProgressBar.vue',
			'src/components/ProgressBar.vue',
			'src/components/StoreProgressBar.js',
		],
	  },
	],
	// webpackConfig: {
	// custom config goes here
	// }
}
