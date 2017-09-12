/**
 * Created by Roma Movchan on 06.09.2017.
 */
var mongose = require('mongoose');

const MessageSchema = new mongose.schema({
    nickName: String,
    message: String,
    created: {
        type: Date,
        default: Date.now()
    }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;