// export function sortStaff(staff: any, allHistory: any) {
//   const pairings: any = []
//   while(staff.length > 0) {
//   staff.map((member: any) => {
//     staff.splice(staff.indexOf(member), 1)
//     const tempStaff = [...staff]
//     allHistory.map((memberWithHistory: any) => {
//       if(member === memberWithHistory.member) {
//         memberWithHistory.history.map((historyMember: any) => {
//           tempStaff.splice(tempStaff.indexOf(historyMember), 1)
//         })
//         const random = Math.floor(Math.random() * tempStaff.length)
//         const partner = tempStaff[random]
//         const pair = [member, partner]
//         staff.splice(staff.indexOf(partner), 1)
//         pairings.push(pair)
//       }
//     })
//   })
// }
// return pairings
// }

export function splitArray(arr: string[]) {
  const size = 2;
  var myArray = [];
  for(var i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i+size));
  }
  return myArray;
}

export function shuffle(array: string[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}