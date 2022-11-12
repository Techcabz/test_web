import mongoose from "mongoose"

const connection = {}

/**
 * If the connection is already connected, do nothing. If the connection is not connected, disconnect
 * any existing connections and connect to the database.
 * @returns The connection object is being returned.
 */
async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB);
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

/**
 * If the connection is connected, disconnect it.
 */
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    }
  }
}
/**
 * It converts the MongoDB document to a JavaScript object.
 * @param doc - The document to be converted
 * @returns An array of objects.
 */
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.options = JSON.parse(JSON.stringify(doc.options));
  doc.image = JSON.parse(JSON.stringify(doc.image));
  doc.price = JSON.parse(JSON.stringify(doc.price));
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

export const db = { connect, disconnect, convertDocToObj };