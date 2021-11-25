import VnNative3ConsoleInterFace from "./interface";
export default class VnNative3ConsoleCore implements VnNative3ConsoleInterFace {
    public info(message : string) : void {
        return console.info(`%c ${message} `,'background: green; color: #bada55');
    }
    public log(message : string) : void {
        return console.log(`%c ${message} `,'background: #222; color: #bada55');
    }
    public debug(message : string) : void {
        return console.debug(`%c ${message} `,'background: yellow; color: #bada55');
    }
    public error(message : string) : void {
        return console.error(`%c ${message} `,'background: red; color: #bada55');
    }
}