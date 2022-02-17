import dotenv from 'dotenv';
import * as matrix from 'matrix-js-sdk';

dotenv.config({ path: '../.env' });

const client = matrix.createClient({
    baseUrl: process.env.MATRIX_URL,
    accessToken: process.env.USER_ACCESS_TOKEN,
    userID: process.env.USER_ID,
});

export function sendNotice(body) {
    var roomID = process.env.ROOM_ID;
    var content = {
        body: body.substring(0),
        msgtype: 'm.notice',
    };
    client.sendEvent(roomID, 'm.room.message', content, '', (err, res) => {
        if (err) {
            console.log(err, res);
        }
    });
}
