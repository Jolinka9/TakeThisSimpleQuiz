var firstArr = [1, 2, 3, 4];
var secondArr = [10, 20, 30];
var thirdArr = [100, 200, 300];
var sources = [firstArr, secondArr, thirdArr];
var mergedArr = [];
var spreadResult = [...firstArr, ...secondArr, ...thirdArr];

function mySecondJSFunction(resultArr, sources) {
  for (let m = 0; m < sources.length; m++) {
    for (let i = 0; i < sources[m].length; i++) {
      resultArr[resultArr.length] = sources[m][i];
    }
  }
  console.log(resultArr);
}

//mySecondJSFunction(mergedArr, sources);

function restOperator(resultArr, ...sources) {
  for (let m = 0; m < sources.length; m++) {
    for (let i = 0; i < sources[m].length; i++) {
      resultArr[resultArr.length] = sources[m][i];
    }
  }
  console.log(resultArr);
}

restOperator(mergedArr, firstArr, secondArr, thirdArr);

console.log(spreadResult);
