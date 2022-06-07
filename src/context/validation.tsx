import React from 'react'

export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
export const validName = new RegExp(
    "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
);
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validCreditCard = new RegExp(
    '^[0-9]{12}(?:[0-9]{4})?$'
);
export const validCVC = new RegExp("^[0-9]{3}$")