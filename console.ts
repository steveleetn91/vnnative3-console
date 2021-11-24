import VnNative3ConsoleInterFace from "./interface";
export default class VnNative3ConsoleCore implements VnNative3ConsoleInterFace {
    public info(message : string,key : any) : void {
        if(key) {
            return console.info(key,message);
        }
        console.info(message);
    }
    public log(message : string,key : any) : void {
        if(key) {
            return console.log(key,message);
        }
        console.log(message);
    }
    public debug(message : string,key : any) : void {
        if(key) {
            return console.debug(key,message);
        }
        console.debug(message);
    }
    public error(message : string,key : any) : void {
        if(key) {
            return console.error(key,message);
        }
        console.error(message);
    }
}