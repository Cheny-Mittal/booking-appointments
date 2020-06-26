
export class UtilFunctions {

    public static isTimeValid(first, second): boolean {
        return new Date ('1/1/1999 ' + first) < new Date ('1/1/1999 ' + second) 
    }

    public static isNameValid(name: string): boolean{
        var re = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
        return re.test(name);
    }
}
