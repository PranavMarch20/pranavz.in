"use client";

import { useEffect, useState } from "react";
import { DoubleQuotes } from "../common/icons"

const quotesList = [
    {
        quoteLine: "If you don't take risks, you can't create a future.",
        quoteBy: "Monkey D. Luffy, One Piece",
    },
    {
        quoteLine: "The moment you think of giving up, think of the reason why you held on for so long.",
        quoteBy: "Natsu Dragneel, Fairy Tail",
    },
    {
        quoteLine: "Whatever you lose, you'll find it again. But what you throw away, you will never get back.",
        quoteBy: "Himura Kenshin, Rurouni Kenshin",
    },
    {
        quoteLine: "Hard work is worthless for those that don't believe in themselves.",
        quoteBy: "Naruto Uzumaki, Naruto",
    },
    {
        quoteLine: "It's not about whether I can. I'm doing it.",
        quoteBy: "Naruto Uzumaki, Naruto",
    },
    {
        quoteLine: "Power comes in response to a need, not a desire.",
        quoteBy: "Goku, Dragon Ball Z",
    },
    {
        quoteLine: "A person who cannot sacrifice everything cannot change anything.",
        quoteBy: "Armin Arlert, Attack on Titan",
    },
    {
        quoteLine: "Those who break the rules are scum, but those who abandon their friends are worse than scum.",
        quoteBy: "Kakashi Hatake, Naruto",
    },
    {
        quoteLine: "It does not matter how slowly you go as long as you do not stop.",
        quoteBy: "Confucius",
    },
    {
        quoteLine: "I don't want to conquer anything. It's just that the person with the most freedom on the sea is the Pirate King.",
        quoteBy: "Monkey D. Luffy, One Piece",
    },
    {
        quoteLine: "If I don't have to do it, I won't. If I have to do it, I'll do it quickly.",
        quoteBy: "Shikamaru Nara, Naruto",
    },
    {
        quoteLine: "If you don't take risks, you can't create a future.",
        quoteBy: "Monkey D. Luffy, One Piece",
    },
    {
        quoteLine: "I'll never go back on my word. That's my nindo.",
        quoteBy: "Naruto Uzumaki, Naruto",
    },
    {
        quoteLine: "Those who don't understand true pain can never understand true peace.",
        quoteBy: "Pain, Naruto",
    },
    {
        quoteLine: "Nothing happened.",
        quoteBy: "Roronoa Zoro, One Piece",
    },
    {
        quoteLine: "Power comes in response to a need, not a desire.",
        quoteBy: "Goku, Dragon Ball",
    },
    {
        quoteLine: "The weak don't get to decide how they die.",
        quoteBy: "Mikasa Ackerman, Attack on Titan",
    },
    {
        quoteLine: "If you win, you live. If you lose, you die. If you don't fight, you can't win.",
        quoteBy: "Eren Yeager, Attack on Titan",
    },
    {
        quoteLine: "Push through the pain. Giving up hurts more.",
        quoteBy: "Vegeta, Dragon Ball Z",
    },
    {
        quoteLine: "It does not matter how slowly you go as long as you do not stop.",
        quoteBy: "Confucius",
    },
    {
        quoteLine: "Arise, awake, and stop not till the goal is reached.",
        quoteBy: "Katha Upanishad",
    },
    {
        quoteLine: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions.",
        quoteBy: "Bhagavad Gita",
    },
];

export function Quote() {
    const [quote, setQuote] = useState(quotesList[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotesList.length);
        setQuote(quotesList[randomIndex]);
    }, []);

    return (
        <div>
            {quote && (
                <div
                    key={quote.quoteLine}
                    className="relative flex flex-col px-4 py-9  rounded-xl shadow-xs border border-2 border-accent/40 ring-1 ring-white/30 ring-offset-3 ring-offset-muted-foreground/7 ring-inset"
                >
                    <DoubleQuotes className="absolute size-32 select-none left-2 top-1/2 -translate-y-1/2 text-accent/20"/>
                    
                    <div className="flex items-start gap-1 z-1">
                        <p className="text-[17px] italic font-medium leading-wide text-muted-foreground break-words pt-0.5">
                            <span className="text-[20px] italic leading-none">"</span>
                            {quote.quoteLine}
                            <span className=" text-[20px] italic leading-none">"</span>
                        </p>
                    </div>

                    <p className="italic mr-3 text-[15px] text-right font-space pr-2 leading-none text-muted-foreground mt-2">
                        — {quote.quoteBy}
                    </p>
                </div>
            )}
        </div>
    );
}
