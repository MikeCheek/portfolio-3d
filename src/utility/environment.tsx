import config from '../../gatsby-config';

const prefix = process.env.NODE_ENV === 'development' ? '' : config.pathPrefix;
export { prefix };
