import {env} from './config/env.js';import {connectDB} from './config/db.js';import {createApp} from './app.js';
try{await connectDB(env.MONGODB_URI);const app=createApp();app.listen(env.PORT,()=>console.log(`Career Evidence API listening on http://localhost:${env.PORT}`))}catch(err){console.error('Could not start API. Check MONGODB_URI and database availability.',err.message);process.exit(1)}
