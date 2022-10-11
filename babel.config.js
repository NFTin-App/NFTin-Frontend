const path = require('path');
const PATH_SRC = path.resolve(`${__dirname}/../src`);


module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          '@features': `${PATH_SRC}/features/`,
          '@entities': `${PATH_SRC}/entities/`,
          '@shared': `${PATH_SRC}/shared/`,
          '@widgets': `${PATH_SRC}/widgets/`,
          '@screens': `${PATH_SRC}/screens/`,
          '@app': `${PATH_SRC}/app/`,
        }
      }
    ]
  ]
};
