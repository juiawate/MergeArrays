
function mergeArraysBinary(arr1, arr2){
    for(var i = 0 ; i < arr2.length; i++){
        arr1.splice(binarySearch(arr1,arr2[i],0,arr1.length -1),0,arr2[i]);  // Insert element from arr2 at proper position in arr1
    }

    function binarySearch(arr,ele,start,end) {  // Binary search algorithm
        var mid = Math.floor((start + end) / 2);

        if(ele <= arr[start]) return start;
        if(ele > arr[end]) return end + 1;
        if(arr[mid] === ele) return mid;
        else if(arr[mid] < ele){
            if(mid + 1 <= end && ele <= arr[mid + 1]) return mid + 1;
            else return binarySearch(arr,ele,mid + 1,end);
        } else {
            if(mid - 1 >= start && ele > arr[mid - 1]) return mid;
            else return binarySearch(arr,ele,start,mid - 1);
        }
    }

    return arr1;
}