require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

//middleware 
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// mongodb configuration

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// create a collection of documents
const bookCollections = client.db("BookInventory").collection("books");
// insert a book to the db: post method
app.post("/upload-book", async (req, res) => {
    const data = req.body;
    const result = await bookCollections.insertOne(data);
    res.send(result);
})

app.get("/all-books", async (req, res) => {
    const result = await bookCollections.find({}).toArray();
    res.send(result);
})

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");


    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})