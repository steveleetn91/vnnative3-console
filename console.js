"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VnNative3ConsoleCore {
    info(message) {
        return console.info(`%c ${message} `, 'background: green; color: #bada55');
    }
    log(message) {
        return console.log(`%c ${message} `, 'background: #222; color: #bada55');
    }
    debug(message) {
        return console.debug(`%c ${message} `, 'background: yellow; color: #bada55');
    }
    error(message) {
        return console.error(`%c ${message} `, 'background: red; color: #bada55');
    }
}
exports.default = VnNative3ConsoleCore;
