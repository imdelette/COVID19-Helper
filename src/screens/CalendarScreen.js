import { React } from 'react';
import { View } from 'react-native';
import { LocaleConfig } from 'react-native-calendars';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

LocaleConfig.locales['ru'] = {
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    dayNamesShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    today: "Сегодня"
};
LocaleConfig.defaultLocale = 'ru';



export default function CalendarScreen() {

    return(
        <View>
            <CalendarList
                horizontal={true}
                pagingEnabled={true}
                onDayPress={day => {
                    console.log('selected day', day);
                }}
            />
        </View>
    )
}