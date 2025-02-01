import { global } from "../modules/global.js";


let defaultMap = [
    [-1,-1 , 0, 0, 0, 0, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


function resetMap(){
    return structuredClone(defaultMap)
}



const maps ={
  
    easy: resetMap(),
    middle: resetMap(),
    hard: resetMap()
}

function placeObjects(map, objectType, objectCount){
    let rows = map.length;
    let column = map[0].length;

    let objectPlaced = 0;
    for(let i = 0; objectPlaced < objectCount; i++){
        let randomRow = Math.floor(Math.random() * rows);
        let randomColumn = Math.floor(Math.random() * column);

        if (map[randomRow][randomColumn] === 0) {           // check if spot is empty [0]
            map[randomRow][randomColumn] = objectType;
            objectPlaced++;
          }
    }

    
}




// 6 Gold 
placeObjects(maps.easy, 1, 6);
placeObjects(maps.middle, 1, 8);
placeObjects(maps.hard, 1, 10);

// 3 Bomben platzieren (2 repräsentiert eine Bombe, 3 ist Anzahl der Bomben)
placeObjects(maps.easy, 2, 3);
placeObjects(maps.middle, 2, 5);
placeObjects(maps.hard, 2, 9);

// 4 Silver 
placeObjects(maps.easy, 3, 4);
placeObjects(maps.middle, 3, 6);
placeObjects(maps.hard, 3, 8);

// 2 Dynamid )
placeObjects(maps.easy, 4, 1);
placeObjects(maps.middle, 4, 1);
placeObjects(maps.hard, 4, 1);

// 1 BombDetection 
placeObjects(maps.easy, 5, 1);
placeObjects(maps.middle, 5, 1);
placeObjects(maps.hard, 5, 1);

placeObjects(maps.easy, 6, 1);
placeObjects(maps.middle, 6, 1);
placeObjects(maps.hard, 6, 1);

// 5 fixedBlock
placeObjects(maps.easy, 7, 5);
placeObjects(maps.middle, 7, 7);
placeObjects(maps.hard, 7, 9);

export { maps };
