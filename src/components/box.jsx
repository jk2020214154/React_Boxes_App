import React, { Component } from 'react';


class Box extends Component {


    render() { 
        return (
            <React.Fragment>
                <div style={this.getStyle()}>{this.toString()}</div>
                <button onClick={this.props.onClickLeft} className="btn btn-outline-success m-3">左移</button>
                <button onClick={this.props.onClickRight} className="btn btn-outline-danger m-3">右移</button>
                <button onClick={()=>this.props.onDelete(this.props.box.id)}className='btn btn-outline-primary m-3'>删除</button>
            </React.Fragment>


        );
    }


    getStyle(){
        let styles={
            width: "100px",
            height: "60px",
            backgroundColor: "purple",
            color: "red",
            textAlign: "center",
            lineHeight: "60px",
            borderRadius: "5px",
            marginLeft: this.props.box.num,
        }

        if(this.props.box.num===0)
            styles.backgroundColor= "lightblue";
        else if(this.props.box.num===10)
            styles.backgroundColor= "lightgrey";
        else if(this.props.box.num===30)
            styles.backgroundColor= "lightyellow";
        return styles; 
    }

    toString(){
        const {num}=this.props.box;
        return `num: ${num}`;
    }
}
 
export default Box;
