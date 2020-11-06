import { useEffect, useState } from "react";
import { NotificationTypeEnum } from "./types";
import { useGetUserNotifications } from "./useGetUserNotifications";

export function useNotificationSettings() {
    const { data: hashNotifications } = useGetUserNotifications();
    const [incomingDiscreetHellos, setIncomingDiscreetHellos] = useState(hashNotifications?.get(NotificationTypeEnum.IncomingDiscreetHellos));
    const [incomingGestures, setIncomingGestures] = useState(hashNotifications?.get(NotificationTypeEnum.IncomingGestures));
    const [incomingChat, setIncomingChat] = useState(hashNotifications?.get(NotificationTypeEnum.IncomingChat));
    const [temperatureMeterChange, setTemperatureMeterChange] = useState(hashNotifications?.get(NotificationTypeEnum.TemperatureMeterChange));
    const [inAppVibrations, setInAppVibrations] = useState(hashNotifications?.get(NotificationTypeEnum.InAppVibrations));
    const [inAppSounds, setInAppSounds] = useState(hashNotifications?.get(NotificationTypeEnum.InAppSounds));

    useEffect(() => {
      setIncomingDiscreetHellos(hashNotifications?.get(NotificationTypeEnum.IncomingDiscreetHellos));
      console.log('effect incomingDiscreetHellos: ', hashNotifications?.get(NotificationTypeEnum.IncomingDiscreetHellos));

      setIncomingGestures(hashNotifications?.get(NotificationTypeEnum.IncomingGestures));
      console.log('effect incomingGestures: ', hashNotifications?.get(NotificationTypeEnum.IncomingGestures));

      setIncomingChat(hashNotifications?.get(NotificationTypeEnum.IncomingChat));
      console.log('effect incomingChat: ', hashNotifications?.get(NotificationTypeEnum.IncomingChat));

      setTemperatureMeterChange(hashNotifications?.get(NotificationTypeEnum.TemperatureMeterChange));
      console.log('effect temperatureMeterChange: ', hashNotifications?.get(NotificationTypeEnum.TemperatureMeterChange));

      setInAppVibrations(hashNotifications?.get(NotificationTypeEnum.InAppVibrations));
      console.log('effect inAppVibrations: ', hashNotifications?.get(NotificationTypeEnum.InAppVibrations));

      setInAppSounds(hashNotifications?.get(NotificationTypeEnum.InAppSounds));
      console.log('effect inAppSounds: ', hashNotifications?.get(NotificationTypeEnum.InAppSounds));
    }, [hashNotifications]);

    return { 
      incomingDiscreetHellos,
      incomingGestures,
      incomingChat,
      temperatureMeterChange,
      inAppVibrations,
      inAppSounds
    }
}