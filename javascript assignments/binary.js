var array = [1, 2, 3, 4, 5];
    console.log(binarySearch(array, 2, 0, array.length- 1));
    function binarySearch(array, x, start, end) {
        if (start > end){
        return "false";
        }
        var mid = Math.floor((start + end) / 2);
        if (array[mid] == x){
             return true;
        }
        if (array[mid] > x){
        return binarySearch(array, x, start, mid - 1);
        }else{
        return binarySearch(array, x, mid + 1, end);
        }
}





