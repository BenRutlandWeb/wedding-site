const { min, max, round, ceil, floor } = Math;

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_WEEK = ONE_DAY * 7;
const ONE_MONTH = ONE_DAY * 30;
const ONE_YEAR = ONE_DAY * 365;
const ONE_DECADE = ONE_YEAR * 10;
const ONE_CENTURY = ONE_YEAR * 100;
const ONE_MILLENNUIM = ONE_YEAR * 1000;

function env(name) {
    return import.meta.env[`VITE_${name}`];
}

export {
    env,
    min,
    ceil,
    floor,
    max,
    round,
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    ONE_WEEK,
    ONE_MONTH,
    ONE_YEAR,
    ONE_DECADE,
    ONE_CENTURY,
    ONE_MILLENNUIM
};