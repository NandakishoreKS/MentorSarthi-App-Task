import { useEffect, useState } from 'react';

export function usePushNotifications() {
    const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
    const [notification, setNotification] = useState<any>(undefined);

    useEffect(() => {
        // Simulating the network request to get a push token
        console.log('Running in UI Mode: Bypassing native push token generation.');

        setTimeout(() => {
            const mockToken = 'EXPO_GO_MOCK_TOKEN_12345';
            setExpoPushToken(mockToken);
            console.log("SUCCESS! Mock Expo Push Token:", mockToken);
        }, 1000);

    }, []);

    return { expoPushToken, notification };
}