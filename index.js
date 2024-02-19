const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('admin');
    const movies = database.collection('Vouchers');

    // Query for a movie that has the title 'Back to the Future'
    const query = { _id: '1bb58cfa-063d-4f5c-be5d-b90cfb64d1d6' };
    const result = await movies.findOne(query);
    // const result = await movies.findOne({
    //     docType: 'pointOfInterest',
    //     _id: '1bb58cfa-063d-4f5c-be5d-b90cfb64d1d6',
    //     partitionKey:'1bb58cfa-063d-4f5c-be5d-b90cfb64d1d6'
    // });

    console.log('movies',result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);