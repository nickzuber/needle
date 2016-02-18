
// Simple page routing

module.exports = function(app){

  // Index page
  app.get('/', function(req, res){
    res.sendFile(__dirname  + '/views/index.html');
  });

  // Redirect to error page not found: 404
  app.get('*', function(req, res){
    res.send('error 404: page not found');
  });
}