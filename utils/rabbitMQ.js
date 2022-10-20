const amqp = require('amqplib');
// type
const RoutingKeyMap = require('../types/RoutingKey');

const mqURL = 'amqp://guest:guest@localhost:5672';

module.exports = {
    getChannel: async function() {
        const connection = await amqp.connect(mqURL);
        if (!connection) return null;
        const channel = await connection.createConfirmChannel();
        return channel;
    },
    send: async function(exchangeName, data) {
        const channel = await this.getChannel();

        return new Promise((resolve, reject) => {
            const routingKey = RoutingKeyMap.get(exchangeName);
            // 1. Publish할 때는 Exchange이름, RoutingKey를 넣어주고.
            channel.publish(exchangeName, routingKey,

                // 2. 메시지를 보낼때는 직렬화 후 버퍼에 담아서.
                Buffer.from(JSON.stringify(data), 'utf-8'),

                // 3. 설정 후
                {persistent: true},

                // 4. 메시지 보낸 이후 Promise return
                (err, ok) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve();
                },
            );
        });
    },
    getListenChannel: async function() {
        const connection = await amqp.connect(mqURL);
        console.log('getListenChannel');
        if (!connection) return null;
        const channel = await connection.createChannel();
        return {connection, channel};
    },
    consume: async function({connection, channel}, exchangeName) {
        return new Promise((resolve, reject)=>{
            // 원하는 Queue의 이름을 적어준다.
            channel.consume(exchangeName, async (msg)=>{
                // 1. 받은 메시지를 파싱하고.
                const msgBody = msg.content.toString();
                const data = JSON.parse(msgBody);

                // 1-1. 뭘 받았는지 출력해보자.
                console.log('Received Data : ', data);

                // 2. 잘 받았으니 ACK를 보내자.
                await channel.ack(msg);

                resolve();
            });
            // Queue가 닫혔거나. 에러가 발생하면 reject
            connection.on('close', (err)=>{
                return reject(err);
            });

            connection.on('error', (err)=>{
                return reject(err);
            });
        });
    },
    listenMesaage: async function(exchangeName) {
    // 채널을 연결
        const {connection, channel} = await this.getListenChannel();

        await channel.prefetch(1);

        const response = await this.consume({connection, channel}, exchangeName);

        console.log(response);

        return response;
    },

};
