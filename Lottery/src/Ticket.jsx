import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticker({ ticket }) {
    return (
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}

        </div>
    );
}