// Routes for artist
const express = require('express');
const { createArtist, readArtist, updateArtist, readOneArtist, deleteOneArtist } = require('../controllers/artist.controller');
const router = express.Router();

// api/artists
router.post("/", createArtist)
router.get("/", readArtist)
router.get("/:id", readOneArtist)
router.put("/:id", updateArtist)
router.delete("/:id", deleteOneArtist)

module.exports = router;