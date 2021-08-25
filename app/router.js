import EmberRouter from '@ember/routing/router';
import config from 'l-l-l-link-to/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
