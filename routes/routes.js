// import express
import express from "express";
import { getLogger } from "../logger.js";

const logger = getLogger()

// init express router
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    logger.info("Logger Start...")
    res.send('Welcome to Home Page');
});

// export default router
export default router;