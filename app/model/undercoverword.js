Model.undercoverword = function(exports){  
    exports.config = {      
        fields : [
            {name: 'fathercount', type: 'int'},
            {name: 'content', type: 'text'},
            {name: 'sonword', type: 'text'},
            {name: 'sessionid', type: 'text'}
        ]
    };
};