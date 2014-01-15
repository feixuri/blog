
/*
 * GET home page.
 */

//exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
//};

module.exports = function(app1){
	app.get('/',function(req,res){
		res.render('index',{title:'Express模块'})
	});
};


module.exports = function(app2){
	app.get('/',function(req,res){
		res.render('index',{title:'Express模块'})
	});
};
