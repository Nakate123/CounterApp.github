import  React, { useState } from 'react';

const Con = () => {
    const [num, setNum] = useState(0);

    const incNum = () =>{
        setNum(num + 1);
    };

    const decNum = () =>{
        if(num > 0){
        setNum(num - 1);
    }else{
        alert('Sorry, Zero Limit Reached')
        setNum(0);
    }
    };

    return(
        <>
        <div className='parent_div'>
                {/* <h2 >Counter</h2> */}
            <div className='child_div'>
                <h1>{num}</h1>
                <div className='btn_div'>
                    <button onClick={incNum}>Inc</button>
                    <button onClick={decNum}>Dec</button>
                </div>
            </div>
        </div>
            <h1>hello</h1>
        </>
        );
}
export default Con;
