import ReactGA from 'react-ga';

const isProduction = process.env.NODE_ENV === 'production'

export const config = {
  googleAnalytic: {
    trackingID: '376840246',
  }
}

ReactGA.initialize(config.googleAnalytic.trackingID, {debug: process.env.NODE_ENV === 'development'})

const reactGA = isProduction ? ReactGA : undefined;

export default reactGA;