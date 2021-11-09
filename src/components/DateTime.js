import React, {useState, useEffect} from 'react';

export const DateTime = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() =>{
        var timer = setInterval(() =>setDate(new Date()),1000)

        return function cleanup(){
            clearInterval(timer)

        }
    });
    return (
        <div className="DateTime">
            <h4 style={{fontWeight: 'bolder', color: '#21ce99', fontSize:'20px'}}>Hello there; </h4>
            <p>Today(MM/DD/YY) is the :{' ' + date.toLocaleDateString()}</p>
            <p>And the time is:{'   ' + date.toLocaleTimeString()}</p>
            
        </div>
    )
}



export default DateTime

