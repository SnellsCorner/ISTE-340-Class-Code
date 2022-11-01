import React from 'react';
import BasicModal from './PeopleModal';
import getData from '../util/getData';




export default class People extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            people:{},
            loaded:false
        }
    }

    render(){
        const {people, loaded, } = this.state;

        //initial state
        if(!loaded) return (<div>People Loading...</div>);

        return(
            <div>
                <h1>{people.title}</h1>
                <h3>{people.subTitle}</h3>
                <h2>Faculty</h2>
                <div className='peopleList'>
                {
                    people.faculty.map((p) =>
                        <div className='peopleListItem'>
                            <img src = {p.imagePath}  style = {{maxWidth:"150px"}} alt = "Faculty Person"/>
                
                            <BasicModal {...p}/>
                        </div>
                    )
                }
                </div>

                <h2>Faculty</h2>
                <div className='peopleList'>
                {
                    people.staff.map((p) =>
                        <div className='peopleListItem'>
                            <img src = {p.imagePath}  style = {{maxWidth:"150px"}} alt = "Staff Person"/>
                 
                            <BasicModal {...p}/>
                        </div>

                    )
                }
                </div>
            </div>
        )
    }

    componentDidMount(){
    
        getData('people/')
            .then((json) => {
                this.setState({
                    people:json,
                    loaded:true,
                    danTest:5
                });
            });
    
    }


}
