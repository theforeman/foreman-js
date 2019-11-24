const webpackBaseFilename = (mode = 'production') =>
  mode === 'production' ? '[name]-[chunkhash]' : '[name]';

const webpackFilename = ({ mode = 'production', ext = 'js', plugin }) => {
  const baseFilename = webpackBaseFilename(mode);

  return plugin ? `${plugin}/${baseFilename}.${ext}` : `${baseFilename}.${ext}`;
};

module.exports = {
  webpackBaseFilename,
  webpackFilename,
};
