import { Notification } from '@app/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repositories';

interface GetRecipientNotificationsRequest {
    recipientId: string;
}

type GetRecipientNotificationsResponse = {
    notifications: Notification[];
};

@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(
        request: GetRecipientNotificationsRequest,
    ): Promise<GetRecipientNotificationsResponse> {
        const { recipientId } = request;

        const notifications =
            await this.notificationsRepository.findManyByRecipientId(
                recipientId,
            );

        return {
            notifications,
        };
    }
}
