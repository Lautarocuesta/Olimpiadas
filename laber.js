// if(x,y,outside maze )return false
// if(x,y,is goal )return true
// if(x,y,not open )return false
// mark x,y as part of solution path
// if(FIND.PATH(NortonNorton of x,y)== true)return true
// if(FIND.PATH(EastEast of x,y)== true)return true
// if(FIND.PATH(SouthSouth of x,y)== true)return true
// if(FIND.PATH(WestWest of x,y)== true)return true
// unmark x,y as part of solution
// return false
// Go North: (x,y)->(x,y-1)
// Go East: (x,y)->(x +1,y)
// Go South: (x,y)->(x,y+1)
// Go West: (x,y)->(x,-1,y)


 //if(x,y,outside maze )return false
//if(x,y,is goal )return true
//if(x,y,not open )return false


//if(FIND.PATH(NortonNorton of x,y)== true)
//if(FIND.PATH(EastEast of x,y)== true)
//if(FIND.PATH(SouthSouth of x,y)== true)
//if(FIND.PATH(WestWest of x,y)== true)


const maze = [
    ['s', '.', '#'], 
    ['.', '#', '#'],
    ['.', '.', 'G']
  ];
  
  const solutionPath = [];
  
  function findPath(x, y) {
    if (x < 0 || y < 0 || x >= maze[0].length || y >= maze.length) {
      return false; // Outside maze
    }
  
    if (maze[y][x] === '#') {
      return false; // Wall
    }
  
    if (maze[y][x] === 'G') {
      return true; // Goal
    }
  
    if (solutionPath.some(p => p[0] === x && p[1] === y)) {
      return false; // Already visited this cell
    }
  
    solutionPath.push([x, y]); // Mark cell as part of solution path
  
    if (findPath(x, y - 1)) return true; // Go up
    if (findPath(x + 1, y)) return true; // Go right
    if (findPath(x, y + 1)) return true; // Go down
    if (findPath(x - 1, y)) return true; // Go left
  
    solutionPath.pop(); // Unmark cell as part of solution path
    return false;
  }
  
  findPath(0, 0);
  console.log(solutionPath);
  