import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express'

const app = express();
const port = 3000;
const uri = "mongodb+srv://foojoowee:asJTKclebMRrs3e2@cluster1.nbkd5qs.mongodb.net/highscore?retryWrites=true&w=majority";

// Enable CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend URL
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

async function connectToDB() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db('highscore');
    const collection = db.collection('Numbers');
    const collection2 = db.collection('Sequence');
    const documents = await collection.find().sort({level: -1}).toArray();
    const documents2 = await collection2.find().sort({level: -1}).toArray();
    console.log(documents)
    console.log(documents2)
    return [documents, documents2]
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}
connectToDB().catch(console.dir)

//Function to add score
async function addItem(item, scoreType) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db('highscore');
    const collection = db.collection(scoreType);
    const addedItem = await collection.insertOne(item)

  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

//Defining the API endpoint to fetch data
app.get('/api/connect', async (req, res) => {
  try{
    const documents = await connectToDB();
    res.status(200).json(documents);
  } catch (error){
    console.error(error);
    res.status(500).send('Failed to connect')
  }
})

//use this so that the middleware can parse in json (getting req.body)
app.use(express.json());

//Defining the API endpoint to post data
app.post('/api/items', async (req, res) =>{
  try{
    const {item, scoreType} = req.body
    const insertedItem = await addItem(item, scoreType)
    res.status(200).json({insertedItem})
  } catch(error){
    console.error(error);
    res.status(500).json({ error: "Failed to add" });
  }
})

app.listen(port, () =>{
  console.log(`Server is listening on port ${port}`)
})
