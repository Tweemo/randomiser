

export function sortStaff(staff: any, history: any) {
  const pairings: any = []
  while (staff.length > 0) {
    staff.map((member: any) => {
      // history.map((memberHistory: any) => {
      if(member === history.member) {
        const tempStaff = [...staff]
        // Mapping all staff members
        console.log(member)
        // for each member remove them from the tempstaff array
        staff.splice(staff.indexOf(member), 1)
        // Create a variable that holds history for current member

        // for each person in history, splice them out of the staff array
        const random = Math.floor(Math.random() * staff.length)
        // then get a random member from the available staff
        // This should allow us to avoid any dupes
        
        const partner = staff[random]
        // Will still need to splice partner out to avoid issues of undefined partners
        staff.splice(staff.indexOf(partner), 1)
        const pair = [member, partner]
        // push pairings up 
        // optional have a check if no other pairings exist then do something to say there are no more combinations
        pairings.push(pair)
      }
      })
    // })
  }
  return pairings
}

