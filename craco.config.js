const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              "@primary-color": "#0A0B1A",
              "@secondary-color": "#111229",
              "@white": "#FFFFFF",
              "@pink": "#DD4CAC",
              "@blue": "#0259EB",
              "@yellow": "#E5C558",
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};