const getTicketUrl = (id) => `http://127.0.0.1:3000/ticket/${id}`

const ticketPromises = () => Array(4).fill().map((_, i) =>
fetch(getTicketUrl(i + 1)).then(response => response.json()));

const listTickets = tickets => tickets.reduce((accumulator, { id, title, data, type, status, description, contact}) => {
    id = tickets.map((ticket) => ticket.id)
    title = tickets.map((ticket) => ticket.title)
    data = tickets.map((ticket) => ticket.data)
    type = tickets.map((ticket) => ticket.type)
    status = tickets.map((ticket) => ticket.status)
    description = tickets.map((ticket) => ticket.description)
    contact = tickets.map((ticket) => ticket.contact)
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
},"")

const buildList = tickets => {
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = listTickets
}

Promise.all(ticketPromises()).then(listTickets).then(buildList)

/*const getTicketUrl = (id) => `http://localhost:3000/${id}`

const fetchTicket = () => {
    const ticketPromises = []
    for (let i = 1; i <= 4; i++) {
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
fetchTicket()*/