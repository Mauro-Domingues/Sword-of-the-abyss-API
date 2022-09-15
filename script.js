const getTicketUrl = (id) => `https://127.0.0.1/${id}`
const fetchTicket = () => {
    const ticketPromises = []
    for (let i = 1; i <= ticket.length; i++) {
        ticketPromises.push(
            fetch(getTicketUrl(i)).then((response) => response.json())
        )
    }
    Promise.all(ticketPromises).then((tickets) => {
        const listTickets = tickets.reduce((accumulator, ticket) => {
            const id = ticket.map((ticket) => ticket.id)
            const title = ticket.map((ticket) => ticket.title)
            const data = ticket.map((ticket) => ticket.data)
            const type = ticket.map((ticket) => ticket.type)
            const status = ticket.map((ticket) => ticket.status)
            const description = ticket.map((ticket) => ticket.description)
            const contact = ticket.map((ticket) => ticket.contact)
            accumulator += `
                            <tr>
                            <td>${id}</td>
                            <td>${title}</td>
                            <td>${data}</td>
                            <td>${type}</td>
                            <td>${status}</td>
                            <td>${description}</td>
                            <td>${contact}</td>
                            </tr>`
            return accumulator
        },
        "")
        const tbody = document.querySelector("tbody")
        tbody.innerHTML = listTickets
    })
}
fetchTicket()