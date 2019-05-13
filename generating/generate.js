const Mustache = require('mustache');
const utils = require('./utils');

const BASE_INPUT_DIR = 'generating/';
const BASE_OUTPUT_DIR = 'src/redux/generated/actions/';
const VIEWS_NAMES = ['filter', 'todo'];

const views$ = VIEWS_NAMES.map(
  name => utils.getJsonFromFile(`${BASE_INPUT_DIR}${name}actionTemplate.json`)
);
const template$ = utils.getTextFromFile(`${BASE_INPUT_DIR}actionTemplate.mustache`);

Promise.all([template$, ...views$]).then(
  ([template, ...views]) => {

    views.forEach(view => {
      const fileName = view.name.toLowerCase();
      const generatedAction = Mustache.render(
        template,
        view
      );

      utils.writeFile(
        `${BASE_OUTPUT_DIR + fileName}.actions.ts`,
        generatedAction
      );
    });
});
