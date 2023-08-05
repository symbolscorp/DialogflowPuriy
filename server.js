const express = require('express')
const app = express()
const {WebhookClient} = require('dialogflow-fulfillment');
const dfff = require('dialogflow-fulfillment');


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
    function welcome(agent) {
        agent.add("Welcome to my agent!");
    }
 
    function fallback(agent) {
        agent.add("I didn't understand");
        agent.add("I'm sorry, can you try again?");
    }
    function Imagen(agent) {
        var payloadData = {
            "richContent": [
              [
                {
                  "type": "accordion",
                  "title": "Accordion title",
                  "subtitle": "Accordion subtitle",
                  "image": {
                    "src": {
                      "rawUrl": "https://example.com/images/logo.png"
                    }
                  },
                  "text": "Accordion text"
                }
              ]
            ]
          };
        const options = { sendAsMessage: true, rawPayload: true };
        agent.add(new dfff.Payload(agent.UNSPECIFIED,payloadData,options));
        //agent.add("Carajo Funciona");
    }
  function Cartilla(agent) {
        var payloadData = {
                "facebook": {
                  "attachment": {
                    "type": "template",
                    "payload": {
                      "elements": [
                        {
                          "title": "More",
                          "buttons": [
                            {
                              "title": "more",
                              "payload": "more",
                              "type": "postback"
                            }
                          ],
                          "subtitle": "",
                          "image_url": "https://www.verdissimo.com/wp-content/uploads/2018/02/Rosa-Roja.jpg"
                        }
                      ],
                      "template_type": "generic"
                    }
                  }
                }
              };
        const options = { sendAsMessage: true, rawPayload: true };
        agent.add(new dfff.Payload(agent.UNSPECIFIED,payloadData,options));
        //agent.add("Carajo Funciona");
    
    }
  function Carrucel(agent) {
        var payloadData = {
 "facebook":{
  "attachment":{
     "type":"template",
     "payload":{
        "template_type":"generic",
        "elements":[
           {
              "title":"Welcome!",
              "image_url":"https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
              "subtitle":"We have the right hat for everyone.",
              "default_action":{
                 "type":"web_url",
                 "url":"https://www.google.com/",
                 "webview_height_ratio":"tall"
              },
              "buttons":[
                 {
                    "type":"web_url",
                    "url":"https://www.google.com/",
                    "title":"View Website"
                 },
                 {
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD"
                 }
              ]
           },
               {
              "title":"Welcome!",
              "image_url":"https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
              "subtitle":"We have the right hat for everyone.",
              "default_action":{
                 "type":"web_url",
                 "url":"https://www.google.com/",
                 "webview_height_ratio":"tall"
              },
              "buttons":[
                 {
                    "type":"web_url",
                    "url":"https://www.google.com/",
                    "title":"View Website"
                 },
                 {
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD"
                 }
              ]
           },
               {
              "title":"Welcome!",
              "image_url":"https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
              "subtitle":"We have the right hat for everyone.",
              "default_action":{
                 "type":"web_url",
                 "url":"https://www.google.com/",
                 "webview_height_ratio":"tall"
              },
              "buttons":[
                 {
                    "type":"web_url",
                    "url":"https://www.google.com/",
                    "title":"View Website"
                 },
                 {
                    "type":"postback",
                    "title":"Start Chatting",
                    "payload":"DEVELOPER_DEFINED_PAYLOAD"
                 }
              ]
           }
        ]
     }
  }
 }
 };
        const options = { sendAsMessage: true, rawPayload: true };
        agent.add(new dfff.Payload(agent.UNSPECIFIED,payloadData,options));
        //agent.add("Carajo Funciona");
    
    }
  function Direccion(agent) {
        agent.add("Nos puede encontrar en Cayma y Sachaca, Virgen de la Candelaria Mz A Lt 4");
  }
  function Saludo(agent) {
        agent.add("Buenos dias, Le damos la bienvenida a PlantiLife\nLe ofrecemos una variedad de plantas para el hogar,oficina o huerto.\nEn que podria ayudarlo?");
  }
  
  function CategoriaPlantas(agent) {
        agent.add("1.-Flores \n2.-Arboles \n3.-Suculentas");
  }
  function ListaFlores(agent) {
        agent.add("1.-Flor A \n2.-Flor B  \n3.-Flor A");
  }
  function ListaArboles(agent) {
        agent.add("1.-Arbol A \n2.-Arbol B \n3.-Arbol C");
  }
  function ListaSuculenta(agent) {
        agent.add("1.-Suculenta A \n2.-Suculenta B \n3.-Suculenta C");
  }
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
    intentMap.set("CategoriaPlantas", CategoriaPlantas);
    intentMap.set("ListaFlores", ListaFlores);
    intentMap.set("ListaArboles", ListaArboles);
    intentMap.set("ListaSuculenta", ListaSuculenta);
    intentMap.set("Direccion", Direccion);
    intentMap.set("Saludo", Saludo);
    intentMap.set("Cartilla", Cartilla);
    intentMap.set("Carrucel", Carrucel);
  
    intentMap.set("Turismo_Fulfillment", Turismo_Fulfillment);
    // intentMap.set('your intent name here', yourFunctionHandler);
    // intentMap.set('your intent name here', googleAssistantHandler);
    agent.handleRequest(intentMap);
});

app.listen(3000, ()=>{
    console.log("Estamos ejecutando el servidor en el puerto "+3000)
})
