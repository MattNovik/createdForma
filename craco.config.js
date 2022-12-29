module.exports = {
  eslint: {
    enable: null,
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/scss/_functions.scss";
          @import "src/scss/_fonts.scss";
          @import "src/scss/_variables.scss";
        `,
      },
    },
  },
};
