import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { IErrorResponse } from "../../shared";
import { NotificationTypeEnum } from "./types";
import { useGetUserNotifications } from "./useGetUserNotifications";

export function useNotificationSettings() {
    const { data: hashNotifications } = useGetUserNotifications();
    const [incomingDiscreetHellos, setIncomingDiscreetHellos] = useState(hashNotifications?.get(NotificationTypeEnum.IncomingDiscreetHellos));

    useEffect(() => {
        setIncomingDiscreetHellos(hashNotifications?.get(NotificationTypeEnum.IncomingDiscreetHellos));
        console.log('effect', hashNotifications?.get(NotificationTypeEnum.IncomingDiscreetHellos));
    }, [hashNotifications]);

    return { incomingDiscreetHellos }
}