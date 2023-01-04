import React, { Component } from 'react';
import NavBar from './navbar.jsx';
import Boxes from './boxes.jsx';


class App extends Component {
    state = {  
        boxes:[
            {id:1,num:1},
            {id:2,num:2},
            {id:3,num:3},
            {id:4,num:4},
        ]
    }

    handleDelete=(boxId)=>{
        const boxes=this.state.boxes.filter(
            box=>box.id!==boxId
        );
        this.setState({boxes});
    }

    handleReset=()=>{
        const boxes=this.state.boxes.map(box=>{
            return {
            id: box.id,
            num: 0,
            }
        });
        this.setState({boxes});
        // console.log(this.state);
    }

    handleClickLeft=(box,step)=>{
        const boxes=[...this.state.boxes];
        const pos=boxes.indexOf(box);
        boxes[pos]={...boxes[pos]};
        boxes[pos].num-=step;
        this.setState({boxes});
    }
    handleClickRight=(box,step)=>{
        const boxes=[...this.state.boxes];
        const pos=boxes.indexOf(box);
        boxes[pos]={...boxes[pos]};
        boxes[pos].num+=step;
        this.setState({boxes});
    }
    render() { 
        return (
            <React.Fragment>
                <NavBar boxesCount={this.state.boxes.filter(box=>box.num!==0).length} />
                <div className='container'>
                    <Boxes 
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onDelete={this.handleDelete}
                        
                    />
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;