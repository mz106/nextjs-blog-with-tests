
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                firebase_url: process.env.NEXT_PUBLIC_FIREBASE_URI,
            }
        };
    }

    return {
        env: {
            firebase_url: process.env.NEXT_PUBLIC_FIREBASE_URI,
        }
    };
};