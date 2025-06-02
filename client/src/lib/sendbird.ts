import SendBird from 'sendbird';

class SendBirdService {
    private static instance: SendBird.SendBirdInstance | null = null;
    private static APP_ID = 'YOUR_SENDBIRD_APP_ID'; // Replace with your actual SendBird App ID

    static getInstance(): SendBird.SendBirdInstance {
        if (!SendBirdService.instance) {
            SendBirdService.instance = new SendBird({ appId: SendBirdService.APP_ID });
        }
        return SendBirdService.instance;
    }

    static async connectUser(userId: string, accessToken?: string): Promise<SendBird.User> {
        const sb = SendBirdService.getInstance();
        return await sb.connect(userId, accessToken);
    }

    static async disconnectUser(): Promise<void> {
        const sb = SendBirdService.getInstance();
        await sb.disconnect();
    }

    static async createChannel(userIds: string[]): Promise<SendBird.GroupChannel> {
        const sb = SendBirdService.getInstance();
        const params = new sb.GroupChannelParams();
        params.addUserIds(userIds);
        return await sb.GroupChannel.createChannel(params);
    }

    static async sendMessage(
        channel: SendBird.GroupChannel,
        message: string
    ): Promise<SendBird.UserMessage> {
        return await channel.sendUserMessage(message);
    }
}

export default SendBirdService;