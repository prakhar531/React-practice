import { useState } from "react";
import "./Lottery.css"
import { genTickets, sum } from "./helper.js";
import Ticket from "./Ticket";


export default function Lottery({ n, winningSum }) {
    let [ticket, setTicket] = useState(genTickets(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTickets(n));
    }
    return (
        <div>
            <h1>Lottery Game</h1>

            <div className="ticket">
                <Ticket ticket={ticket} />
            </div><br />
            <button onClick={buyTicket}>Buy Tickets</button>
            <h3>{isWinning && "congratulation you won"}</h3>
        </div>
    );
}