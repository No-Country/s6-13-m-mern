import React, { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, DayValue, DayRange, Day, Locale } from 'react-modern-calendar-datepicker'

// ---------- Datos de prueba ----------
const date = new Date()
const actualDate: Day = {
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
}

const disabledDays: Day[] = [
  {
    year: 2023,
    month: 2,
    day: 20,
  },
  {
    year: 2023,
    month: 2,
    day: 21,
  },
  {
    year: 2023,
    month: 2,
    day: 7,
  },
]
//--------------------------------------

//----------------- Custom Locale -----------------


const myCustomLocale: Locale = {
  // months list by order
  months: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],

  // week days by order
  weekDays: [
    
    {
      name: 'Lunes',
      short: 'L',
    },
    {
      name: 'Martes',
      short: 'M',
    },
    {
      name: 'Miércoles',
      short: 'M',
    },
    {
      name: 'Jueves',
      short: 'J',
    },
    {
      name: 'Viernes',
      short: 'V',
    },
    {
      name: 'Sábado',
      short: 'S',
      isWeekend: true,
    },
    {
      name: 'Domingo',
      short: 'D',
      isWeekend: true,
    },
  ],

  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject: { year: number; month: number; day: number }) {
    return gregorainTodayObject
  },

  // return a native JavaScript date here
  toNativeDate(date: { year: number; month: number; day: number }) {
    return new Date(date.year, date.month - 1, date.day)
  },

  // return a number for date's month length
  getMonthLength(date: { year: number; month: number }) {
    return new Date(date.year, date.month, 0).getDate()
  },

  // return a transformed digit to your locale
  transformDigit(digit) {
    return digit
  },

  // texts in the date picker
  nextMonth: 'Próximo Mes',
  previousMonth: 'Mes Anterior',
  openMonthSelector: 'Abrir Selector de Mes',
  openYearSelector: 'Abrir Selector de Año',
  closeMonthSelector: 'Cerrar Selector de Mes',
  closeYearSelector: 'Cerrar Selector de Año',
  defaultPlaceholder: 'Seleccionar...',

  // for input range value
  from: 'desde',
  to: 'hasta',

  // used for input value when multi dates are selected
  digitSeparator: ',',

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
}
//-------------------------------------------------

const handleDisabledSelect = (disabledDay:Day) => {
  window.localStorage.setItem('disabledDay', JSON.stringify(disabledDay))
   const { year: yy, month: mm, day: dd } = disabledDay;
   alert('El día '+dd+'/'+mm+'/'+yy+' está reservado');
}

const CalendarComponent = () => {
  
  const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
    from: actualDate,
    to: actualDate,
  })

  //save in localstorage the selected days
  const handleSelect = (day:DayRange) => {
    setSelectedDayRange(day)
    window.localStorage.setItem('selectedDay', JSON.stringify(day))
  }

  return (
    <>
    <Calendar
        value={selectedDayRange}
        onChange={handleSelect}
        colorPrimary="rgb(88 80 236)"
        colorPrimaryLight="rgb(88 80 236 / 0.2)"
        disabledDays={disabledDays}
        onDisabledDayError={handleDisabledSelect}
        shouldHighlightWeekends
        locale={myCustomLocale}
      /> 
    </>
  )
}

export default CalendarComponent

