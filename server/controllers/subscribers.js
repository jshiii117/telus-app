import express from 'express';
import mongoose from 'mongoose';
import Subscriber from '../models/subscriber.js';

const router = express.Router();

export const getSubscriber = async (req, res) => {
    const { number } = req.params;

    try {
        const subscriber = await Subscriber.find( {phoneNumber: number});

        res.status(200).json(subscriber);
    }catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const putSubscriber = async (req, res) => {
    const { number } = req.params;
    const {phoneNumber, username, password, domain, status, features } = req.body;

    try{
        const subscriber = await Subscriber.findOneAndUpdate( {phoneNumber: number}, {phoneNumber, username, password, domain, status, features}, {upsert: true});
        
        res.status(200).json(subscriber)
    }catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const deleteSubscriber = async (req, res) => {
    const { number } = req.params;

    try {
        await Subscriber.findOneAndDelete({phoneNumber: number});

        res.status(204);
    }catch (error) {
        res.status(404).json({message: error.message});
    }
}


