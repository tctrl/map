const fs = require('fs-extra');
const path = require('path');
const cwd = path.resolve(__dirname);
const is = require('instagram-save');

const LOCATIONS_PATH = `${cwd}/locations`;
const SRC_PATH = `${cwd}/src`
const INSTA_PATH = `${cwd}/public/insta`;
const TEMP_PATH = `${cwd}/public/insta-temp`;

const locations = fs.readdirSync(LOCATIONS_PATH).map(file => {
  const location = fs.readJsonSync(`${LOCATIONS_PATH}/${file}`);
  location.time = fs.statSync(`${LOCATIONS_PATH}/${file}`).mtime;
  location.uri = file.split('.json')[0];
  return location;
}).sort((a,b) => b.time - a.time);

fs.moveSync(INSTA_PATH, TEMP_PATH, { overwrite: true });

fs.ensureDirSync(INSTA_PATH);

locations.forEach(location => {
  location.ids.forEach(async id => {
    if (fs.pathExistsSync(`${TEMP_PATH}/${id}.jpg`)) {
      console.log('copying file ', id);
      fs.moveSync(`${TEMP_PATH}/${id}.jpg`, `${INSTA_PATH}/${id}.jpg`)
;    } else {
      console.log('downloading file ', id);
      await is(id, `${INSTA_PATH}`)
    }
  })
})

fs.removeSync(TEMP_PATH);

fs.writeJsonSync(`${SRC_PATH}/locations.json`, locations);
