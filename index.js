const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anwar:651830@cluster0-hspyh.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
    .then(res => {
        console.log('database connected')
    })
    .catch(err => {
        console.log('database disconnected')
    })

const TodoSchema = new mongoose.Schema(
    {
        task: String,
        done: Boolean
    },
    {
        timestamps: true
    }
)

const Todo = mongoose.model('Todo', TodoSchema)

const todo = new Todo({
    task: 'new task 12',
    done: true,
})

todo.save().then(doc => {
    console.log('saved', doc)
})