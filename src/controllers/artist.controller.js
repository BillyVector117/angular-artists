const Artist = require("../models/Artist")

exports.createArtist = async (req, res) => {
    // console.log(req.body)
    try {
        let artist = new Artist(req.body);
        await artist.save();
        console.log(artist)
        res.status(200).json(artist)
        // Create new artist
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong while posting artist", error)
    }
}

exports.readArtist = async (req, res) => {
    // console.log(req.body)
    try {
        const artists = await Artist.find();
        console.log(artists)
        res.status(200).json(artists)
        // Create new artist
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong while getting artists", error)
    }
}

exports.updateArtist = async (req, res) => {
    // console.log(req.body, req.params.id)
    try {
        const artists = await Artist.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        console.log(artists)
        res.status(200).json(artists)
        // Create new artist
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong while updating artist", error)
    }
}

exports.readOneArtist = async (req, res) => {
    // console.log(req.params.id)
    try {
        const artists = await Artist.findById(req.params.id);
        console.log(artists)
        res.status(200).json(artists)
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong while getting artist", error)
    }
}

exports.deleteOneArtist = async (req, res) => {
    // console.log(req.params.id)
    try {
        await Artist.findByIdAndDelete(req.params.id);
        console.log("successfully deleted!")
        res.status(200).json({ "message": "successfully deleted!" })
    } catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong while getting artist", error)
    }
}