const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anwar:651830@cluster0-hspyh.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
    .then(
        () => {
            console.log('database connected')
        },
        err => {
            console.log('error')
        }
    );

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));