// See https://nextjs.org/docs/pages/building-your-application/routing/api-routes
import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = {
    message: string;
};

const quotes = [
    "Life is what happens while you're busy making other plans.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Never give up, for that is the moment when the tide will turn.",
    "If you always do what you’ve always done, you’ll always get what you’ve always got.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "It's not the years in your life that count, it's the life in your years.",
    "The journey is the destination.",
    "Every day is a chance to change the life you lead.",
    "Never let someone tell you that you can't do something.",
    "It's never too late to be what you might have been.",
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).json({ message: randomQuote });
}
