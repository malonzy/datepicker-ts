import styled from "styled-components";
import theme from "../theme";

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  label{
    color:${theme.colors["primary-900"]};
    font-weight: 500;
    font-family: "Circular Book Medium", sans-serif;
  }
  span{
    color: ${theme.colors["neutral-600"]};
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
  }
`

export const DatePickerContainer = styled.div`
  position: relative;
  button{
    border: none;
    background: transparent;
    cursor: pointer;
  }
`

export const InputField = styled.div`
  border: 1px solid ${theme.colors["neutral-200"]};
  width: 100%;
  display: flex;
  border-radius: 8px;
  background: #ffffff;
  overflow:hidden;
  transition: 300ms ease-out;
  &.success{
    border-color: ${theme.colors["success-500"]};
  }
  &.focused{
    border-color: ${theme.colors["primary-500"]};
  }
  :hover{
    border-color: ${theme.colors["primary-300"]};
  }
  input {
    border: none;
    padding: 13px 16px;
    color: ${theme.colors["neutral-900"]};
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    background: transparent;
  }
  button{
    width: 50px;
  }

  input:focus, input:focus-visible {
    outline: none;
  }

  input::placeholder {
    color: ${theme.colors["neutral-400"]};
    font-weight: 400;
    line-height: 140%;
  }
`

export const CalendarContainer = styled.div`
  background:#ffffff;
  padding: 16px;
  border-radius: 16px;
  /*max-width: 446px;
  min-width: 300px;*/
  width: 446px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);
  animation: openlist 0.2s ease-out;
  transform-origin:top;
  @keyframes openlist{
    from{
      transform: scaleY(0%);
    }
    to{
      transform:scaleY(100%);
    }
  }
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.month-year{
  width: 150px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
}
button{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
}
.weekdays{
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}
.weekday{
  flex: 1 1 0;
  text-align: center;
  font-weight: bold;
}
.calendar-day{
  text-align: center;
  cursor:pointer;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &:hover{
    background: ${theme.colors["neutral-50"]};
  }
}
.previous-month-day,.next-month-day{
  color: ${theme.colors["neutral-200"]};
  cursor: default;
  &:hover{
    background: none;
  }
}
.days{
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
}
.selected-day,.selected-day:hover,.selected-year,.selected-year:hover{
  background: ${theme.colors["neutral-900"]} !important;
  color: #ffffff;
}
.current-day{
  font-weight: bold;
}

//year selector
.year-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 16px;
}

.year-option {
  text-align: center;
  border-radius: 50px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${theme.colors["neutral-50"]};
  }
}

.month-year {
  cursor:pointer;
  border-radius: 50px;
  padding: 4px 0;
  &:hover {
    background: ${theme.colors["neutral-50"]};
  }
}
`