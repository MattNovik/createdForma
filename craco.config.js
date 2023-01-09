module.exports = {
  eslint: {
    enable: null,
  },
  plugins: ['no-hashes'],
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
