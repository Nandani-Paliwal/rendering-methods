import { NextApiRequest, NextApiResponse } from "next";

export default function(req:NextApiRequest, res:NextApiResponse) {
    const data = [
        {
            id: '1',
            name: 'sarthak'
        },
        {
            id: '2',
            name: 'nandani'
        },
        {
            id: '3',
            name: 'riya'
        },
        {
            id: '4',
            name: 'ishu'
        },
        {
            id: '5',
            name: 'devansh'
        },
        {
            id: '6',
            name: 'john'
        },
    ]

    res.json(data)
}