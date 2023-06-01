import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {CalendarContainer, DatePickerContainer, InputField, InputLabel} from "./style";

interface Props {
    onChange: (date: Date) => void,
    label:string,
    subtext:string
}

const DatePicker2: React.FC<Props> = ({ onChange, label, subtext }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    const calendarRef:any = useRef(null)

    useEffect(()=>{
        document.addEventListener('click',function(e){
            setIsCalendarOpen(calendarRef.current.contains(e.target))
        })
    },[])


    const handleDateChange = (date: Date): void => {
        setSelectedDate(date);
        onChange(date);
        setTimeout(()=>{
            setIsCalendarOpen(false);
        },10)
    };

    const options:Intl.DateTimeFormatOptions = {day:'2-digit',month:'short',year:'numeric'}

    const style:CSSProperties = {
        display:'flex',
        flexDirection:'column',
        gap:12,
        position:"relative"
    }

    return (
        <div style={style}>
            {label &&
                <InputLabel>
                    <label>{label}</label>
                    {subtext && <span>{subtext}</span>}
                </InputLabel>
            }
            <DatePickerContainer ref={calendarRef} onClick={()=>{setIsCalendarOpen(true)}} className={selectedDate ? 'success' : ''}>
                <InputField className={`${selectedDate ? 'success' : ''} ${isCalendarOpen ? 'focused' : ''}`}>
                    <input
                        type="text"
                        value={selectedDate ? selectedDate.toLocaleDateString('en-GB',options) : ''}
                        readOnly
                        placeholder="Select date"
                    />
                    <button type="button" onClick={()=>{
                        if (isCalendarOpen){
                            setTimeout(()=>{
                                setIsCalendarOpen(false)
                            },50)
                        }
                    }}>
                        {/*calendar icon*/}
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 18C10.6978 18 10.8911 17.9414 11.0556 17.8315C11.22 17.7216 11.3482 17.5654 11.4239 17.3827C11.4996 17.2 11.5194 16.9989 11.4808 16.8049C11.4422 16.6109 11.347 16.4327 11.2071 16.2929C11.0673 16.153 10.8891 16.0578 10.6951 16.0192C10.5011 15.9806 10.3 16.0004 10.1173 16.0761C9.93459 16.1518 9.77841 16.28 9.66853 16.4444C9.55865 16.6089 9.5 16.8022 9.5 17C9.5 17.2652 9.60536 17.5196 9.79289 17.7071C9.98043 17.8946 10.2348 18 10.5 18ZM15.5 18C15.6978 18 15.8911 17.9414 16.0556 17.8315C16.22 17.7216 16.3482 17.5654 16.4239 17.3827C16.4996 17.2 16.5194 16.9989 16.4808 16.8049C16.4422 16.6109 16.347 16.4327 16.2071 16.2929C16.0673 16.153 15.8891 16.0578 15.6951 16.0192C15.5011 15.9806 15.3 16.0004 15.1173 16.0761C14.9346 16.1518 14.7784 16.28 14.6685 16.4444C14.5586 16.6089 14.5 16.8022 14.5 17C14.5 17.2652 14.6054 17.5196 14.7929 17.7071C14.9804 17.8946 15.2348 18 15.5 18ZM15.5 14C15.6978 14 15.8911 13.9414 16.0556 13.8315C16.22 13.7216 16.3482 13.5654 16.4239 13.3827C16.4996 13.2 16.5194 12.9989 16.4808 12.8049C16.4422 12.6109 16.347 12.4327 16.2071 12.2929C16.0673 12.153 15.8891 12.0578 15.6951 12.0192C15.5011 11.9806 15.3 12.0004 15.1173 12.0761C14.9346 12.1518 14.7784 12.28 14.6685 12.4444C14.5586 12.6089 14.5 12.8022 14.5 13C14.5 13.2652 14.6054 13.5196 14.7929 13.7071C14.9804 13.8946 15.2348 14 15.5 14ZM10.5 14C10.6978 14 10.8911 13.9414 11.0556 13.8315C11.22 13.7216 11.3482 13.5654 11.4239 13.3827C11.4996 13.2 11.5194 12.9989 11.4808 12.8049C11.4422 12.6109 11.347 12.4327 11.2071 12.2929C11.0673 12.153 10.8891 12.0578 10.6951 12.0192C10.5011 11.9806 10.3 12.0004 10.1173 12.0761C9.93459 12.1518 9.77841 12.28 9.66853 12.4444C9.55865 12.6089 9.5 12.8022 9.5 13C9.5 13.2652 9.60536 13.5196 9.79289 13.7071C9.98043 13.8946 10.2348 14 10.5 14ZM17.5 2H16.5V1C16.5 0.734784 16.3946 0.48043 16.2071 0.292893C16.0196 0.105357 15.7652 0 15.5 0C15.2348 0 14.9804 0.105357 14.7929 0.292893C14.6054 0.48043 14.5 0.734784 14.5 1V2H6.5V1C6.5 0.734784 6.39464 0.48043 6.20711 0.292893C6.01957 0.105357 5.76522 0 5.5 0C5.23478 0 4.98043 0.105357 4.79289 0.292893C4.60536 0.48043 4.5 0.734784 4.5 1V2H3.5C2.70435 2 1.94129 2.31607 1.37868 2.87868C0.816071 3.44129 0.5 4.20435 0.5 5V19C0.5 19.7956 0.816071 20.5587 1.37868 21.1213C1.94129 21.6839 2.70435 22 3.5 22H17.5C18.2956 22 19.0587 21.6839 19.6213 21.1213C20.1839 20.5587 20.5 19.7956 20.5 19V5C20.5 4.20435 20.1839 3.44129 19.6213 2.87868C19.0587 2.31607 18.2956 2 17.5 2ZM18.5 19C18.5 19.2652 18.3946 19.5196 18.2071 19.7071C18.0196 19.8946 17.7652 20 17.5 20H3.5C3.23478 20 2.98043 19.8946 2.79289 19.7071C2.60536 19.5196 2.5 19.2652 2.5 19V10H18.5V19ZM18.5 8H2.5V5C2.5 4.73478 2.60536 4.48043 2.79289 4.29289C2.98043 4.10536 3.23478 4 3.5 4H4.5V5C4.5 5.26522 4.60536 5.51957 4.79289 5.70711C4.98043 5.89464 5.23478 6 5.5 6C5.76522 6 6.01957 5.89464 6.20711 5.70711C6.39464 5.51957 6.5 5.26522 6.5 5V4H14.5V5C14.5 5.26522 14.6054 5.51957 14.7929 5.70711C14.9804 5.89464 15.2348 6 15.5 6C15.7652 6 16.0196 5.89464 16.2071 5.70711C16.3946 5.51957 16.5 5.26522 16.5 5V4H17.5C17.7652 4 18.0196 4.10536 18.2071 4.29289C18.3946 4.48043 18.5 4.73478 18.5 5V8ZM5.5 14C5.69778 14 5.89112 13.9414 6.05557 13.8315C6.22002 13.7216 6.34819 13.5654 6.42388 13.3827C6.49957 13.2 6.51937 12.9989 6.48079 12.8049C6.4422 12.6109 6.34696 12.4327 6.20711 12.2929C6.06725 12.153 5.88907 12.0578 5.69509 12.0192C5.50111 11.9806 5.30004 12.0004 5.11732 12.0761C4.93459 12.1518 4.77841 12.28 4.66853 12.4444C4.55865 12.6089 4.5 12.8022 4.5 13C4.5 13.2652 4.60536 13.5196 4.79289 13.7071C4.98043 13.8946 5.23478 14 5.5 14ZM5.5 18C5.69778 18 5.89112 17.9414 6.05557 17.8315C6.22002 17.7216 6.34819 17.5654 6.42388 17.3827C6.49957 17.2 6.51937 16.9989 6.48079 16.8049C6.4422 16.6109 6.34696 16.4327 6.20711 16.2929C6.06725 16.153 5.88907 16.0578 5.69509 16.0192C5.50111 15.9806 5.30004 16.0004 5.11732 16.0761C4.93459 16.1518 4.77841 16.28 4.66853 16.4444C4.55865 16.6089 4.5 16.8022 4.5 17C4.5 17.2652 4.60536 17.5196 4.79289 17.7071C4.98043 17.8946 5.23478 18 5.5 18Z" fill="#070B12"/>
                        </svg>
                    </button>
                </InputField>
                {isCalendarOpen && (
                    <div style={{position:"absolute",marginTop:4}}>
                        <Calendar onChange={handleDateChange} selected={selectedDate}/>
                    </div>
                )}
            </DatePickerContainer>
        </div>
    );
};

interface CalendarProps {
    onChange: (date: Date) => void
    selected: Date | null
}

const Calendar: React.FC<CalendarProps> = ({ onChange, selected}) => {
    const [currentDate, setCurrentDate] = useState(selected || new Date())
    const [currentYear,setCurrentYear] = useState(new Date().getFullYear())
    const [calendarView,setCalendarView] = useState(true)

    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    const getDaysInMonth = (year: number, month: number): number => {
        return new Date(year, month + 1, 0).getDate()
    };

    const getFirstDayOfMonth = (year: number, month: number): number => {
        return new Date(year, month, 1).getDay()
    };

    const handlePreviousMonth = (): void => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
    };

    const handleNextMonth = (): void => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
    };

    const handlePreviousYear = (): void => {
        setCurrentYear(currentYear - 20)
    };

    const handleNextYear = (): void => {
        setCurrentYear(currentYear + 20)
    };

    const handleDateClick = (day: number): void => {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
        onChange(selectedDate)
    };

    const handleSelectYear = (year:number):void => {
        setCurrentDate(new Date(currentDate.setFullYear(year)))
        setCalendarView(!calendarView)
    }

    const toggleYearPicker = () => {
        setCalendarView(!calendarView)
    };

    const renderCalendar = (): JSX.Element[] => {
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()
        const daysInMonth = getDaysInMonth(year, month)
        const firstDay = getFirstDayOfMonth(year, month)
        const previousMonth = month === 0 ? 11 : month - 1
        const daysInPreviousMonth = getDaysInMonth(year, previousMonth)
        const days: JSX.Element[] = []

        // Add last days from the previous month
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = daysInPreviousMonth - i
            days.push(
                <div key={`previous-day-${day}`} className="calendar-day previous-month-day">
                    {day}
                </div>
            )
        }

        // Add days of the current month
        const td = new Date()
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected =
                selected &&
                selected.getDate() === day &&
                selected.getMonth() === month &&
                selected.getFullYear() === year
            const isCurrentDay = day === td.getDate() && month === td.getMonth() && year === td.getFullYear();
            const dayClassName = isSelected ? 'selected-day' : isCurrentDay ? 'current-day' : '';

            days.push(
                <div
                    key={`current-day-${day}`}
                    className={`calendar-day ${dayClassName}`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </div>
            )
        }

        // Add first days of the next month
        const remainingDays = (7 - (days.length % 7)) % 7;
        for (let day = 1; day <= remainingDays; day++) {
            days.push(
                <div key={`next-day-${day}`} className="calendar-day next-month-day">
                    {day}
                </div>
            );
        }
        return days
    }

    const renderYearPicker = (currentYear:number) => {
        const years = [];
        for (let year = currentYear - 10; year <= currentYear + 10; year++) {
            const selectedClass = year===currentDate.getFullYear()?'selected-year':''
            years.push(
                <div key={year} onClick={() => handleSelectYear(year)} className={`year-option ${selectedClass}`}>
                    {year}
                </div>
            )
        }

        return (
            <div className="year-picker">
                <div className="year-options">{years}</div>
            </div>
        )
    }

    return (
        <CalendarContainer>
            <div className="header">
                {!calendarView &&
                    <button type="button" onClick={handlePreviousYear}>
                        {/*circle arrow left*/}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.29 9.29C6.19896 9.3851 6.12759 9.49725 6.08 9.62C5.97998 9.86346 5.97998 10.1365 6.08 10.38C6.12759 10.5028 6.19896 10.6149 6.29 10.71L9.29 13.71C9.4783 13.8983 9.7337 14.0041 10 14.0041C10.2663 14.0041 10.5217 13.8983 10.71 13.71C10.8983 13.5217 11.0041 13.2663 11.0041 13C11.0041 12.7337 10.8983 12.4783 10.71 12.29L9.41 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9H9.41L10.71 7.71C10.8037 7.61704 10.8781 7.50644 10.9289 7.38458C10.9797 7.26272 11.0058 7.13201 11.0058 7C11.0058 6.86799 10.9797 6.73728 10.9289 6.61542C10.8781 6.49356 10.8037 6.38296 10.71 6.29C10.617 6.19627 10.5064 6.12188 10.3846 6.07111C10.2627 6.02034 10.132 5.9942 10 5.9942C9.86799 5.9942 9.73728 6.02034 9.61542 6.07111C9.49356 6.12188 9.38296 6.19627 9.29 6.29L6.29 9.29ZM0 10C0 11.9778 0.58649 13.9112 1.6853 15.5557C2.78412 17.2002 4.3459 18.4819 6.17317 19.2388C8.00043 19.9957 10.0111 20.1937 11.9509 19.8079C13.8907 19.422 15.6725 18.4696 17.0711 17.0711C18.4696 15.6725 19.422 13.8907 19.8079 11.9509C20.1937 10.0111 19.9957 8.00043 19.2388 6.17317C18.4819 4.3459 17.2002 2.78412 15.5557 1.6853C13.9112 0.58649 11.9778 0 10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10ZM18 10C18 11.5823 17.5308 13.129 16.6518 14.4446C15.7727 15.7602 14.5233 16.7855 13.0615 17.391C11.5997 17.9965 9.99113 18.155 8.43928 17.8463C6.88743 17.5376 5.46197 16.7757 4.34315 15.6569C3.22433 14.538 2.4624 13.1126 2.15372 11.5607C1.84504 10.0089 2.00346 8.40034 2.60896 6.93853C3.21447 5.47672 4.23984 4.22729 5.55544 3.34824C6.87103 2.46919 8.41775 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10Z" fill="#070B12"/>
                        </svg>
                    </button>
                }
                {calendarView &&
                    <button type="button" onClick={handlePreviousMonth}>
                        {/*left angle*/}
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.28982 5.99995L6.82982 2.45995C7.01607 2.27259 7.12061 2.01913 7.12061 1.75495C7.12061 1.49076 7.01607 1.23731 6.82982 1.04995C6.73686 0.95622 6.62626 0.881826 6.5044 0.831057C6.38254 0.780288 6.25183 0.75415 6.11982 0.75415C5.98781 0.75415 5.8571 0.780288 5.73524 0.831057C5.61339 0.881826 5.50278 0.95622 5.40982 1.04995L1.16982 5.28995C1.07609 5.38291 1.0017 5.49351 0.950931 5.61537C0.900162 5.73723 0.874023 5.86794 0.874023 5.99995C0.874023 6.13196 0.900162 6.26267 0.950931 6.38453C1.0017 6.50638 1.07609 6.61699 1.16982 6.70995L5.40982 10.9999C5.50326 11.0926 5.61408 11.166 5.73592 11.2157C5.85775 11.2655 5.98821 11.2907 6.11982 11.2899C6.25143 11.2907 6.38189 11.2655 6.50373 11.2157C6.62557 11.166 6.73638 11.0926 6.82982 10.9999C7.01607 10.8126 7.12061 10.5591 7.12061 10.2949C7.12061 10.0308 7.01607 9.77731 6.82982 9.58995L3.28982 5.99995Z" fill="#070B12"/>
                        </svg>
                    </button>
                }
                <button type="button" className="month-year" onClick={toggleYearPicker}>
                    {currentDate.toLocaleString('en-us', { month: 'long', year: 'numeric' })}
                </button>
                {calendarView &&
                    <button type="button" onClick={handleNextMonth}>
                        {/*right angle*/}
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.83019 5.28995L2.59019 1.04995C2.49722 0.95622 2.38662 0.881826 2.26476 0.831057C2.1429 0.780288 2.0122 0.75415 1.88019 0.75415C1.74818 0.75415 1.61747 0.780288 1.49561 0.831057C1.37375 0.881826 1.26315 0.95622 1.17019 1.04995C0.983936 1.23731 0.879395 1.49076 0.879395 1.75495C0.879395 2.01913 0.983936 2.27259 1.17019 2.45995L4.71019 5.99995L1.17019 9.53995C0.983936 9.72731 0.879395 9.98076 0.879395 10.2449C0.879395 10.5091 0.983936 10.7626 1.17019 10.9499C1.26363 11.0426 1.37444 11.116 1.49628 11.1657C1.61812 11.2155 1.74858 11.2407 1.88019 11.2399C2.01179 11.2407 2.14226 11.2155 2.26409 11.1657C2.38593 11.116 2.49675 11.0426 2.59019 10.9499L6.83019 6.70995C6.92392 6.61699 6.99831 6.50638 7.04908 6.38453C7.09985 6.26267 7.12599 6.13196 7.12599 5.99995C7.12599 5.86794 7.09985 5.73723 7.04908 5.61537C6.99831 5.49351 6.92392 5.38291 6.83019 5.28995Z" fill="#070B12"/>
                        </svg>
                    </button>
                }
                {!calendarView &&
                    <button type="button" onClick={handleNextYear}>
                        {/*circle arrow right*/}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.71 10.71C13.801 10.6149 13.8724 10.5028 13.92 10.38C14.02 10.1365 14.02 9.86347 13.92 9.62C13.8724 9.49725 13.801 9.38511 13.71 9.29L10.71 6.29C10.5217 6.1017 10.2663 5.99591 10 5.99591C9.7337 5.99591 9.47831 6.1017 9.29 6.29C9.1017 6.47831 8.99591 6.7337 8.99591 7C8.99591 7.26631 9.1017 7.5217 9.29 7.71L10.59 9H7C6.73479 9 6.48043 9.10536 6.2929 9.2929C6.10536 9.48043 6 9.73479 6 10C6 10.2652 6.10536 10.5196 6.2929 10.7071C6.48043 10.8946 6.73479 11 7 11H10.59L9.29 12.29C9.19628 12.383 9.12188 12.4936 9.07111 12.6154C9.02034 12.7373 8.99421 12.868 8.99421 13C8.99421 13.132 9.02034 13.2627 9.07111 13.3846C9.12188 13.5064 9.19628 13.617 9.29 13.71C9.38297 13.8037 9.49357 13.8781 9.61543 13.9289C9.73729 13.9797 9.86799 14.0058 10 14.0058C10.132 14.0058 10.2627 13.9797 10.3846 13.9289C10.5064 13.8781 10.617 13.8037 10.71 13.71L13.71 10.71ZM20 10C20 8.02219 19.4135 6.08879 18.3147 4.4443C17.2159 2.79981 15.6541 1.51809 13.8268 0.761209C11.9996 0.00433284 9.98891 -0.193701 8.0491 0.192152C6.10929 0.578004 4.32746 1.53041 2.92894 2.92894C1.53041 4.32746 0.578004 6.10929 0.192152 8.0491C-0.193701 9.98891 0.00433284 11.9996 0.761209 13.8268C1.51809 15.6541 2.79981 17.2159 4.4443 18.3147C6.08879 19.4135 8.02219 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10ZM2 10C2 8.41775 2.4692 6.87104 3.34825 5.55544C4.2273 4.23985 5.47673 3.21447 6.93854 2.60897C8.40035 2.00347 10.0089 1.84504 11.5607 2.15372C13.1126 2.4624 14.538 3.22433 15.6569 4.34315C16.7757 5.46197 17.5376 6.88743 17.8463 8.43928C18.155 9.99113 17.9965 11.5997 17.391 13.0615C16.7855 14.5233 15.7602 15.7727 14.4446 16.6518C13.129 17.5308 11.5823 18 10 18C7.87827 18 5.84344 17.1572 4.34315 15.6569C2.84286 14.1566 2 12.1217 2 10Z" fill="#070B12"/>
                        </svg>
                    </button>
                }
            </div>
            {/*calendar view*/}
            <div style={{display: calendarView ? 'block ' : 'none'}}>
                <div className="weekdays">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="weekday">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="days">{renderCalendar()}</div>
            </div>

            {/*year picker*/}
            <div style={{display: !calendarView ? 'block' : 'none'}}>
                {renderYearPicker(currentYear)}
            </div>
        </CalendarContainer>
    );
};

export default DatePicker2;
