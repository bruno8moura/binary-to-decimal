class Bin2DecModel{
    constructor(value='0'){
        let onlyZeroOrOneNumbers_And_Upto8Digits = /^([0-1]{1,8}){1}$/.test(value);

        if(!onlyZeroOrOneNumbers_And_Upto8Digits){
            throw new Error('The value informed must be digits 0 or 1 and must be the length up to 8');
        }

        this._input = value;  
    }

    get input(){
        return this._input;
    }

    set input(value){
        this._input = value;
    }

    get output(){
        let input = this._input;
        let input_length = input.length;
        let output = input.split('').reduce((total, el, index) => {
            let exponent = input_length - (index +1);
            let baseToTheExponentPower = Math.pow(2, exponent);
            let zero_or_one = Math.round(el/2);
            return total + (zero_or_one * baseToTheExponentPower);
        }, 0.0);
        
        return output;
    }
}

module.exports = Bin2DecModel;
