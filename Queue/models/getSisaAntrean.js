
export var responseSisa = null;
export function getSisaAntrean (id_place) {  
    return new Promise((resolve,reject)=>{
        fetch('http://192.168.43.2/apiqueue/v1/place/sisaAntrean',
        {
            method : 'post',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
        },
            body: JSON.stringify({
                id_place : id_place
            })
      }).then((response)=> response.json())
      .then((responseJson)=>{
          
        responseSisa = responseJson;
        // this.setData(responseJson);
        resolve(true);
      }).catch((error) => {
              console.error(error);
              reject(true);
            });

    })  
                    //  return true;
}
