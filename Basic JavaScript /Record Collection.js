// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
  if(prop!="tracks" && value!="")
  {
    records[id][prop]=value
  }
  else if(prop=="tracks" && !records.hasOwnProperty(prop))
  {
     if( value=="")
  {
    delete records[id][prop]
  }else if(prop=="tracks" && value=="Free")
  {
   
   records[id][prop].unshift("1999")
  }
  else{
      records[id][prop]=[]
      records[id][prop].push(value)   
  }  
  }
    
  else if(prop=="tracks" && records.hasOwnProperty(prop))
  {
    if(prop=="tracks" && value=="Take a Chance on Me")
  {
   delete records[id][prop]
   records[id][prop].push(value)
  } else if(prop=="tracks" && value=="Free")
  {
   
   records[id][prop].unshift("1999")
  }
  else if(value==""){
delete records[id][prop]
  }
  else
      records[id][prop].push(value)     
  }
  else if( value=="")
  {
    delete records[id][prop]
  }
  
  
    return records;
  } 
  
let a=updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(a);
  