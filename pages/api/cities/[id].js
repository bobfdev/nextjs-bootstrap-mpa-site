// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { cities } from '../../../data';

export default function handler(req, res) {
    const { id } = req.query;

    const city = cities.find((city) => city.id === Number(id))

    res.status(200).json(city)
}