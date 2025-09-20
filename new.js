let age
console.log("this is your age:",age)
console.log(age)

let salary=null
console.log("salary",salary)
console.log(typeof(salary))

let ticket={
    name : "someone",
    date : "23/09/29",
    source : "calicut",
    destination :"bangalore",
    bookingstatus : "confirmed",
    coach_number :"D3",
    seat_no: 56,
    insurance_avail : true,
    price:3000,
    cantact:{
        mob_no:9445500031,
        mail_id:"someone@gmail.com"
    } 
}
console.log("ticket_details :",ticket)
console.log(typeof(ticket))
console.log("passengername:",ticket.name)
console.log(`passengername:${ticket[`name`]}`)

ticket.seat_no=71
console.log("updated seatno:",ticket.seat_no)
 ticket.foododer=false
console.log("foododer:",ticket.foododer)
delete ticket.destination
console.log(ticket)

ticket.name="unknown"
console.log(ticket.name)

console.table(ticket)

