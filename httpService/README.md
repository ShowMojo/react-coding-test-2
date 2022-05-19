# HTTP Service

This is a Node HTTP Service that will respond to the request from the mobile app.

## Run Service

Run follow command on Terminal.

```node app.js```

There are hostname and port in the ```app.js```. You could change them as you wish.

    var hostname = '127.0.0.1';
    var port = 4000;
    
Once the service ran, you could visit the `http://127.0.0.1:4000` on the web browser. Then you could see the following response.

    {"serviceConnected":true} 

## API Endpoints

#### Log in

```GET /login?account=admin&password=admin```

Please note that the `account/password` is `admin/admin`. 

Response

- If success to log in:


    {
        "code": 0,
        "error": null,
    }
    
- If failed to log in:


    {
        "code": 1,
        "error": "Invalid account or password",
    }
    
    

#### Get timezone list

```GET /timezone_list```

Response

- If success to get list:


    {
        "code": 0,
        "error": null,
        "data": [
            {
                "id": 0,
                "value": "Dateline Standard Time",
                "text": "(UTC-12:00) International Date Line West",
            },
            ...
        ],
    }

#### Get timezone detail

```GET /timezone_detail?id=1```

- If success to get detail:


    {
        "code": 0,
        "error": null,
        "data": {
            "id": 1,
            "value": "UTC-11",
            "abbr": "U",
            "offset": -11,
            "isdst": false,
            "text": "(UTC-11:00) Coordinated Universal Time-11",
            "zones": [
                "Etc/GMT+11",
                "Pacific/Midway",
                "Pacific/Niue",
                "Pacific/Pago_Pago",
            ],
        }
    }
