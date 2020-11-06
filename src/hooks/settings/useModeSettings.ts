import { useEffect, useState } from "react";
import { ModeTypeEnum } from "./types";
import { useGetUserModes } from "./useGetUserModes";

export function useModeSettings() {
    const { data: hashNotifications } = useGetUserModes();
    const [incognitoMode, setIncognitoMode] = useState(hashNotifications?.get(ModeTypeEnum.IncognitoMode));
    const [receptivityMode, setReceptivityMode] = useState(hashNotifications?.get(ModeTypeEnum.ReceptivityMode));

    useEffect(() => {
        setIncognitoMode(hashNotifications?.get(ModeTypeEnum.IncognitoMode));
        console.log('effect incognitoMode', hashNotifications?.get(ModeTypeEnum.IncognitoMode));

        setReceptivityMode(hashNotifications?.get(ModeTypeEnum.ReceptivityMode));
        console.log('effect receptivityMode', hashNotifications?.get(ModeTypeEnum.ReceptivityMode));
    }, [hashNotifications]);

    return { incognitoMode, receptivityMode }
}