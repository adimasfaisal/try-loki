import { createLogger, transports, format } from "winston";
import LokiTransport from "winston-loki";

let logger

const initializeLogger = () => {
    if (logger) {
        return
    }
}

logger = createLogger({
    transports: [
        new LokiTransport({
            host: "http://loki:3100",
            // Only for development purposes
            interval: 5,
            labels: {
                job: 'nodejs'
            },
            replaceTimestamp: true,

        }),
        new transports.Console({
            format: format.combine(format.simple(), format.colorize())
        })
    ]
})

export const getLogger = () => {
    initializeLogger()
    return logger
}