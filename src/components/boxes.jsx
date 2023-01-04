import React from 'react';
import Box from './box.jsx';


const Boxes = ({onReset,boxes,onClickLeft,onClickRight,onDelete}) => {
    return (
        <React.Fragment>
            <button onClick={onReset}style={{marginBottom:"15px"}} className='btn btn-info'>重置</button>
            {
                boxes.map(box=>(
                    <Box 
                        box={box}
                        key={box.id} 
                        onClickLeft={()=>onClickLeft(box,2)}
                        onClickRight={()=>onClickRight(box,3)}
                        onDelete={onDelete}
                    />
                ))
            }
        </React.Fragment>
    );
}
 
export default Boxes;

