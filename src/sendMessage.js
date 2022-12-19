import dotenv from 'dotenv';
import * as matrix from 'matrix-js-sdk';

dotenv.config({ path: '.env' });

const client = matrix.createClient({
    baseUrl: process.env.MATRIX_URL,
    accessToken: process.env.USER_ACCESS_TOKEN,
    userID: process.env.USER_ID,
});

export function sendMessage(body) {
    const roomID = process.env.ROOM_ID;

    for (let alert of body.alerts) {
        let content = createMessageContent(alert);
        client.sendEvent(roomID, 'm.room.message', content, '', (err, res) => {
            if (err) {
                console.log(err, res);
            }
        });
    }
}

function createMessageContent(alert) {
    const status = alert.status;
    let statusMessage = '';
    let statusEmote = '';
    status === 'firing' ? (statusEmote = '🔥') : (statusEmote = '👌');
    status === 'firing'
        ? (statusMessage = 'Firing!')
        : (statusMessage = 'Resolved');

    let alertName = alert.labels.alertname;
    let alertSource = alert.labels.grafana_folder;
    let alertSummary = alert.annotations.summary
        ? alert.annotations.summary
        : 'No Summary';

    let dashboardUrl = alert.dashboardURL;

    let message = `${statusEmote}: **${alertName}** <- Alert is ${statusMessage}
            Alert Source: ${alertSource}
            Alert Summary: ${alertSummary}
            Dashboard: ${dashboardUrl}`;

    let formattedMessage = `<div>${statusEmote}: <strong>${alertName}</strong> <- Alert is ${statusMessage}</div>
            <div>&emsp;&emsp;Alert Source: ${alertSource} </div>
            <div>&emsp;&emsp;Alert Summary: ${alertSummary} </div>
            <div>&emsp;&emsp;Dashboard: ${dashboardUrl} </div`;

    const content = {
        body: message,
        format: 'org.matrix.custom.html',
        formatted_body: formattedMessage,
        msgtype: 'm.text',
    };

    return content;
}
