    const path = require('path');
    
    module.exports = {
        presets: [require.resolve('@theforeman/builder/babel', { paths: [path.join(process.cwd(), './node_modules')] })],
      };
      