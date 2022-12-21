const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ],
});

// No hay log en la dependencia winston
// logger.log('Holi')
function square(num) {
    if (typeof num === 'number') {
        return num ** 2;
    }
    throw new Error('Ey! Tienes que poner números para sacar el cuadrado de éstos!');
}

try {
    square('Ufff');
} catch(e) {
    logger.error(`Uy! Ha habido un error de tipo : ${e.message}`)
}