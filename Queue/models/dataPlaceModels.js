export var responsData = null;
    export function dataPlace () {  
        return new Promise((resolve,reject)=>{
            fetch('http://192.168.43.2/apiqueue/v1/place/openPlace',
            {
                method : 'GET',
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
            }
          }).then((response)=> response.json())
          .then((responseJson)=>{
              
            responsData = responseJson;
            resolve(true);
          }).catch((error) => {
                  console.error(error);
                  reject(true);
                });
    
        });  
    }
    