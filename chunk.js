//this function DOES use .push()
function chunk(arr,size){
  
  var oldItems = arr;
  var oldLength = oldItems.length;
  
  var items = [];
  //rows
  var itemsLength = Math.ceil(oldLength/size);
  //cols
  var subArrSize;
  
  var oLcounter=oldLength;
  var iter=0;

  // expand all rows to have the correct amount of cols
  for (var i = 0; i < itemsLength; i++)
  {
    items.push( [] );
    
    //number of cols in each subarray -> subArrSize
    if(oLcounter>size){
      subArrSize = size;
      oLcounter = oLcounter-size;
    }//end
    else{
     subArrSize=oLcounter;
    }//end else
      for (var j=0; j < subArrSize; j++)
      {
          items[i].push(oldItems[iter]);
          iter++;
      }//end inner for loop
  }//end outer for loop
  arr=items;
  return arr;
}//end function

chunk([0, 1, 2, 3, 4, 5], 2);
chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5], 4);