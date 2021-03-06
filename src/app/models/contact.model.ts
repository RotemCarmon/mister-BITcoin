export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public phone: string = '',
        public email: string = '',
        ) {}

    setId() {
        // Implement your own set Id
        this._id = _makeId() 
    }
}

function _makeId() : string {
    var possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSWZ0123456789'
    var str = '';
    for(var i = 0 ; i < 25 ; i++ ) {
        var int = _randomInt(0, possibleChars.length)
        str += possibleChars.charAt(int)
    }
    return str 
}

function _randomInt (min, max) :number{
    return Math.floor(Math.random() * ( max - min ) + min)
}