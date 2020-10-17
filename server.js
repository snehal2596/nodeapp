console.log("Welocme to server app");
// create logic for HTTP server for creation
//application are self executable 
//explicitly started , explicitly terminated

//servers are auto started and they are terminated when shut down machine


var http=require("http");
var url=require("url");
var fs=require("fs");

var onCreateServer=function(request, response)
{

   var pathname = url.parse(request.url).pathname;
      
    fs.readFile(pathname.substr(1), 
			function (err, data) {
       				if (err) 
				{
          			     console.log(err);
          			      response.writeHead(404, {'Content-Type': 'E:\STUDY\cloud class\test\html'});
       			}
				else
				{	
          			       response.writeHead(200, {'Content-Type': 'E:\STUDY\cloud class\test\html'});	
          			       response.write(data.toString());		
       			}
       				response.end();
    });   
};

var server=http.createServer(onCreateServer);
server.listen(7000);
console.log("server is listeninig on port no http://localhost:7000/");