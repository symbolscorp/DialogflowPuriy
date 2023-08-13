const express = require('express')
const app = express()
const {WebhookClient} = require('dialogflow-fulfillment');
const dfff = require('dialogflow-fulfillment');

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'agenciapuriy',
});

app.get('/', function (req, res) {
  console.log("Dialogflow Request headers: ");
  res.send('Hello World')
  
})
// for Facebook verification
app.post("/webhook",express.json(),function(req,res){
    const agent = new WebhookClient({ request:req, response:res });
    console.log("Dialogflow Request headers: " + JSON.stringify(req.headers));
    console.log("Dialogflow Request body: " + JSON.stringify(req.body));
    const req_json = req.body;
    const query    = req_json.queryResult;
    const opcion   = query['queryText'];

  function Turismo_Fulfillment(agent) {
        
    console.log(" Esta es la Opcion: " + opcion);
        
        if (opcion==="w"){
          agent.add("....Mantenimiento....");       
       }
        else if(opcion==="X"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="Y"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="Z"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="T"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="U"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="V"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="N"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="O"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="P"){
          agent.add("....Mantenimiento....");          
        }
        else if(opcion==="Q"){
          agent.add("....Mantenimiento....");          
        }
        else if(opcion==="R"){
          agent.add("....Mantenimiento....");          
        }
        else if(opcion==="S"){
          agent.add("....Mantenimiento....");          
        }
        else if(opcion==="H"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="I"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="J"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="K"){
          agent.add("....Mantenimiento....");         
        }
        else if(opcion==="L"){
          console.log(" Esta es la Opcion: " + opcion);
            var payloadData = {
                "facebook": {
                  "attachment": {
                    "type": "image",
                    "payload": {
                      "url":"https://www.verdissimo.com/wp-content/uploads/2018/02/Rosa-Roja.jpg"
                    }
                  }
                }
              };
          const options = { sendAsMessage: true, rawPayload: true };
          agent.add(new dfff.Payload(agent.UNSPECIFIED,payloadData,options));        
        }
    
        else if(opcion==="M"){
          agent.add('https://www.verdissimo.com/wp-content/uploads/2018/02/Rosa-Roja.jpg')         
        }
        else {
          agent.add("Por favor Elija una Opcion valida.");
        }
        
  }
    let intentMap = new Map();
    intentMap.set("Turismo_Fulfillment", Turismo_Fulfillment);
    // intentMap.set('your intent name here', yourFunctionHandler);
    // intentMap.set('your intent name here', googleAssistantHandler);
    agent.handleRequest(intentMap);
});

app.listen(3000, ()=>{
    console.log("Estamos ejecutando el servidor en el puerto "+3000)
})
