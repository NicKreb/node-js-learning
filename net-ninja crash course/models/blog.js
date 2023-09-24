const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema defines the objects that will later be stored in the data

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });
//this creates a new schema object

//model, the first arg it takes is a name and this is IMPORTANT as it will pluralize it and use that as reference,
// we then put the Schema desired in the second arg
const Blog = mongoose.model('CrebBlog', blogSchema)
module.exports = Blog;