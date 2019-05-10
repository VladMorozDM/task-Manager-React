/**
 * Created by vlad on 08.05.2019.
 */
import React,{Component} from 'react';

class SortTasks extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange( event ){
        this.props.onChangeSorting( event.target.name, event.target.value )
    }
        render(){
        return (
            <div className="task-sort">
                Sotr by:
                <select value={this.props.sortType} name="sort" id="sorting" onChange={this.handleChange}>
                    <option value="byAlphabet">by Alphabet</option>
                    <option value="byNewest">by Newest</option>
                    <option value="byDefault">Default</option>
                </select>
                <form action="#">
                    <input type="text" name="filterText" placeholder="Filter results..." onChange={this.handleChange}/>
                </form>
            </div>
        )
    }

}

export default SortTasks