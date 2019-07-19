const Bin2DecModel = require('./Bin2DecModel');
const Bin2DecView = require('./Bin2DecView');
const converter = {};

converter.form = function(req, res){
    let view = new Bin2DecView();
    res.marko(view.template, view.data);
};

converter.toDecimal = function(req, res){
    let converterDTO = req.body;
    let message;
    let bin2DecModel;
    try {
        bin2DecModel = new Bin2DecModel(converterDTO.binarynumber);
        message = 'Converted!';
    } catch (error) {
        message = error;
    }
    
    let view = new Bin2DecView(bin2DecModel, message);
    res.marko(view.template, view.data);
};

module.exports = converter;