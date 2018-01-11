import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'flashcards-notifications'

/**
 * Se ligado, o modo de teste agenda a notificação para um minuto a partir do horário 
 * corrente, ao invés de para as 18:00 do dia seguinte
 */
const TEST_MODE = false

export function createNotification() {
    return {
        title: 'Start a quiz today!',
        body: "You didn't answer a quiz today yet, start one right now",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if (data === null || TEST_MODE) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync
                        let tomorrow = new Date()
                        if (TEST_MODE) {
                            tomorrow.setMinutes(tomorrow.getMinutes() + 1)
                        } else {
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(18)
                            tomorrow.setMinutes(0)
                        }
                        Notifications.scheduleLocalNotificationAsync(
                            createNotification(),
                            { time: tomorrow, repeat: 'day' }
                        )
                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                    } else {
                        alert('Notifications are blocked')
                    }
                })
            }
        })
}


export function clearNotifications() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}