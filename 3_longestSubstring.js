var lengthOfLongestSubstring = function(s) {
    
    let stringArray = [];
    function findMaxLengthElement(arr){
        let requiredElement = "";
        arr.forEach(element => {
            if(element.length > requiredElement.length){
                requiredElement = element;
            }
        });
        return requiredElement;
    }
    function checkCharInString(character,str){
        for (let j = 0; j < str.length; j++) {
            if((str[j]) === character){
                return true;
            }
        }
        return false
    }
    for (let i = 0; i < s.length; i++) {
        let requiredString = "";
        for (let j = i; j < s.length; j++) {
              if(!checkCharInString((s[j]),requiredString)){
                requiredString = requiredString + s[j];
                if(j === s.length-1){stringArray.push(requiredString)}
              }else{
                stringArray.push(requiredString);
                break;
              }            
        }
    }
    return findMaxLengthElement(stringArray).length;
};

/**
 * 3. Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = s => {
//     const visited = new Set();
//     let left = 0;
//     let right = 0;
//     let res = 0;
  
//     // use sliding window
//     while (right < s.length) {
//       const currentChar = s.charAt(right);
//       // not visited
//       if (!visited.has(currentChar)) {
//         visited.add(currentChar);
//         res = Math.max(res, right - left + 1);
//         right++;
//       } else {
//         visited.delete(s.charAt(left));
//         left++;
//       }
//     }
  
//     return res;
//   };
   console.log(lengthOfLongestSubstring("pwwkew"));