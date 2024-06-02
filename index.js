import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema.js';
import http from 'http';
import { Server } from 'socket.io';
import achievement from './routes/achievement.route.js';

// initiate the engine
const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// ** Set the view engine to ejs
// __dirname replacement
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// ESTABLISH SOCKET CONNECTION FOR REALTIME DATA CHANGE
// io.on('connection', (socket) => {
//     // Example Firebase listener
//     const notesRef = db.ref('notes');
//     notesRef.on('value', (snapshot) => {

//         const notes = snapshot.val();
//         socket.emit('updateNotes', notes);
//     });

//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });

// graphql development interface
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))


// main page frontend template
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/achievement', achievement)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express Bun Server is running on port http://localhost:${port}`);
});