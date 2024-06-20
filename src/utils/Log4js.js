import pkg from 'log4js';
const { configure, getLogger } = pkg;

configure({
    appenders: {
        // defino dos soportes de salida de datos
        consola: { type: 'console' },
        archivo: { type: 'file', filename: 'errores.log' },
        // defino sus niveles de logueo
        loggerConsola: { type: 'logLevelFilter', appender: 'consola', level: 'info' },
        loggerArchivo: { type: 'logLevelFilter', appender: 'archivo', level: 'error' }
    },
    categories: {
        default: { appenders: ['loggerConsola'], level: 'all' },
        custom: { appenders: ['loggerConsola', 'loggerArchivo'], level: 'all' }
    }
})

const loggerCustom = getLogger('custom');

// Export error as well
const error = getLogger('error');

// const info = getLogger('info');

export default { loggerCustom, error };