

const SUSI = "882ceeb0-9ce0-4b85-9827-f7426a863175"



const API_URL = 'https://api.random.org/json-rpc/4/invoke'

const METHOD = 'generateIntegers'
const NUMBER_COUNT = 2
const MIN_INTEGER = 1
const MAX_INTEGER = 100
const REPLACEMENT = true
const BASE = 10
const pregeneratedRandomization = null

const REQUEST_ID = 1

request_body =  {
                    "jsonrpc": "2.0",
                    "method": METHOD,
                    "params": {
                        "apiKey": SUSI,
                        "n": NUMBER_COUNT,
                        "min": MIN_INTEGER,
                        "max": MAX_INTEGER,
                        "replacement": REPLACEMENT,
                        "base": BASE,
                        "pregeneratedRandomization": null
                    },
                    "id": REQUEST_ID
                }

const get_password = (numbers=true, letters=true, length=16) => {
    
    var randomstring = Math.random().toString(36).slice(-8);

}


requestURL = 'https://api.random.org/json-rpc/4/invoke'

fetch(requestURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body: request_body
    })


    .then(function (response) {
        return response.json()
        
    })

    .then (data => {
        console.table(data)
    })

