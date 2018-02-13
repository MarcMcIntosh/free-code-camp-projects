import fetch from 'isomorphic-fetch';

const prefix = str => `VOTING-APP_${str}`;

export const REGISTER_USER = prefix('REGISTER_USER');
export const RECIEVE_USER = prefix('RECIEVE_USER');
export const REJECT_USER = prefix('REJECT_USER');
