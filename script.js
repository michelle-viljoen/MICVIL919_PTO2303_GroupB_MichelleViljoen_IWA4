let date = 2050
let type = "student"
let count = 0



if (date = 2050) {
	console.log('January', 'New Year’s Day')
	console.log('March', 'Human Rights Day')
	month = 'April'
	console.log(month, 'Family Day')
	console.log(month, 'Freedom Day')
	count += 4  

	if (type === "student") {
	  console.log('June', 'Youth Day')
		count += 1
    }
  
//if (date = 2050) {	
    console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	month = 'December'
	console.log(month, 'Day of Reconciliation')
	count += 3
    
	if (type === "parent") {
	  console.log(month, 'Christmas Day')
		count += 1}
  
	console.log(month, 'Day of Goodwill')
	count += 1


console.log('Your status is:', type)
console.log('The year is:', date)
console.log('The total holidays is:', count)
    }


 