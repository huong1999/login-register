const title = require('../models/titleModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const response = require('../utils/response');
const key = require('../key.json');
const db = require('../database');

exports.createTitle = async (req, res)=>{
    try {
        const {subject, content, likes, year, language} = req.body;
        const newTitle = new title({
            subject:subject,
            content:content,
            likes:likes,
            year:year,
            languages:language
        })
        await newTitle.save();
        return res.json(response.success({newTitle}));
    }
    catch (e) {
        res.json(response.fail(e));
    }
}
exports.searchFull = async (req, res) =>{
    try {
        const {keyword} = req.body;
        let data = await title.find({$text: {$search: keyword}}, {score: {$meta: "textScore"}}).sort({score:{$meta:"textScore"}})

        return res.json(response.success({data}));
        return res.json(response.success({}));

    }
    catch (e) {
        res.json(response.fail(e));
    }
}