import { useState } from "react";
import "./Lottery.css"
import { genTickets, sum } from "./helper.js";


export default function Lottery() {
    let [ticket, setTicket] = useState(genTickets(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genTickets(3));
    }
    return (
        <div>
            <h1>Lottery Game</h1>

            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div><br />
            <button onClick={buyTicket}>Buy Tickets</button>
            <h3>{isWinning && "congratulation you won"}</h3>
        </div>
    );
}