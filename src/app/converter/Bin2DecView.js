class Bin2DecView {

    constructor(model=null, menssage=''){
        this._model = model;
        this._message = menssage;
    }

    get template(){
        return require('../converter/form/converter.marko');
    }

    get data(){
        let output = this._model == null ? '' : this._model.output;
        return  { 'converter': { 'output': output, 'message': this._message } };
    }
}

module.exports = Bin2DecView;