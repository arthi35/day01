//step1: create an XHR object
// variable name request should be used in whole program
var request=new XMLHttpRequest();
// step 2:create a connection
//true:optional
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
//step3:send a request to kickstart request from client server (push)initiating path
request.send();
//step4:once data successfully received from server
// http://200 server will assume through numbers servers data 
// to client will be string so only we arer converting to another datatype onload is an event
request.onload=function(){
    // conversion from string to array of json object
    var data=JSON.parse(request.response);
    console.log(data);
    // console.log(data[249].region);
    for(i=0;i<data.length;i++){
        console.log(data[i].capital,data[i].name);
        console.log(data[i].population);
    }
}