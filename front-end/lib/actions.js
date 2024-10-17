'use server'

const { cookies } = require("next/headers")

export async function createCartCookie(){
    cookies().set('cartID',3)
}