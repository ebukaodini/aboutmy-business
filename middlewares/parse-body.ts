import utils from 'util';
import bodyParser from 'body-parser';

const bodyParseJson = () => {
  return utils.promisify(bodyParser.json());
}

const bodyParseUrlEncoded = () => {
  return utils.promisify(bodyParser.urlencoded({ extended: false }));
}

const bodyParseText = () => {
  return utils.promisify(bodyParser.text());
}

const bodyParseRaw = () => {
  return utils.promisify(bodyParser.raw());
}

export { bodyParseJson, bodyParseUrlEncoded, bodyParseText, bodyParseRaw };