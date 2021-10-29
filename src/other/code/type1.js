// 两束之和
nums = [3,7,11,15]
target = 9
var twoSum = function(nums,targer){
  map = new Map()
  for (let i = 0; i< nums.length; i++){
    x = targer - nums[i]
    if(map.has(x)){
      return [map.get(x),i]

    }
    map.set(nums[i],i)
  }
}
console.log(twoSum);