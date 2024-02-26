import React, { useState, useEffect, } from "react";
import Card from "./Card";
import axios from 'axios';
//import "./Deck.css";

const BASE_URL = "https://deckofcardsapi.com/api/deck";


function Deck() {
    const [deck, setDeck] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);

    useEffect(function loadDeck() {
        async function fetchData() {
            const d = await axios.get(`${BASE_URL}/new/shuffle/`);
            setDeck(d.data);
        }
        fetchData();
    }, []);

    //Draw a card: change the state and effect
    async function draw() {
        try {
            const drawRes = await axios.get(`${BASE_URL}/${deck.deck_id}/draw`);

            if (drawRes.data.remaining === 0) throw new Error("Deck empty!")

            const card = drawRes.data.cards[0];

            setDrawn(d => [
                ...d,
                {
                    id: card.code,
                    name: card.suit + " " + card.value,
                    image: card.image,
                },
            ]);
        } catch (err) {
            alert (err);
        }
    }
// Shuffle the cards
async function startShuffling() {
    setIsShuffling(true);
    try {
        await axios.get(`${BASE_URL}/${deck.deck_id}/shuffle/`);
        setDrawn([]);
    } catch (err) {
        alert(err);
    } finally {
        setIsShuffling(false);
    }
}

// Return draw button (disabled if shuffling).
function renderDrawBtn() {
    if (!deck) return null;
    return (
        <button 
            className="Deck-draw"
            onClick={draw}
            disabled={isShuffling}>
                DRAW
            </button>
    );
}


//Return shuffle button
function renderShuffleBtn() {
    if (!deck) return null;
    return (
        <button 
            className="Deck-draw"
            onClick={startShuffling}
            disabled={isShuffling}>
            SHUFFLE DECK
            </button>
    );
}

return (
    <main className="Deck">

        {renderDrawBtn()}
        {renderShuffleBtn()}

        <div className="Deck-cardarea"> {
            drawn.map(c => (
                <Card key={c.id} name={c.name} image={c.image} />
            ))}
        </div>
    </main>
);
}

export default Deck;