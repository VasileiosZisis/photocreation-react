import fs from 'fs';
import util from 'util';
import cloudinary from 'cloudinary';

async function createFile(filename) {
  cloudinary.v2.search
    .expression('folder:studiophotocreation/proposals/*')
    .sort_by('public_id', 'desc')
    .max_results(500)
    .next_cursor()
    .execute()
    .then((result) => {
      const res = JSON.parse(JSON.stringify(result.resources));

      fs.writeFile(
        './public/cloud_local/' + filename,
        JSON.stringify(res, null, 2),
        'utf8',
        function (err) {
          if (err) {
            console.log('--- ERROR ---');
            return console.log(err);
          }
          console.log(
            util.inspect(result, {
              showHidden: true,
              depth: null,
              colors: true,
            })
          );
        }
      );
    });
}

createFile('temp.json');
