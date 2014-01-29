module.exports = function(fw){
    fw.publish('undercoverword', 'pub-undercover', function(callback){
        var collection = this;
        console.log('publish run.......'); 
        collection.find({'sessionid':'wanbin'}, {}, function(err, items){
            callback(items);
        });
    });   
}