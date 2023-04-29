
const fs = require('fs');
const  http = require('http');

var server = http.createServer((req, res)=>{

    if(req.url=="/"){
        let data = fs.readFileSync('publicFile/home.html', 'utf8');
        res.end(data);

    }else if(req.url=="/contact"){
        let data = fs.readFileSync('publicFile/contact.html', 'utf8');
        res.end(data);
    }
    else if(req.url=="/about"){
        let data = fs.readFileSync('publicFile/about.html', 'utf8');
        res.end(data);

    }else if(req.url=="/terms"){
        let data = fs.readFileSync('publicFile/terms.html', 'utf8');
        res.end(data);

    }else{
        let data = fs.readFileSync('publicFile/error.html', 'utf8');
        res.end(data);

    }

});
server.listen(3000);
console.log('listening on port 3000.');
