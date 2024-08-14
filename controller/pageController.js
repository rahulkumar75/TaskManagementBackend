exports.getHome= async (req, res) => {
    res.status(201).send("<!doctype html><html><head><title>backend</title></head><body><h1>hello from server</h1></body></html>")
  };