const should_return_422 = () => (
    [{
        "request": {
            "method": "GET",
            "path": "/teste",
        },
        "response": {
            "status": 422,
            "headers": {
                "content-type": "application/json"
            },
            "body": {
                "id": 1,
                "name": "fake"
            }
        }
      }]
)

module.exports ={ should_return_422 }