/**
 * Created by vlad on 08.05.2019.
 */
import React,{Component} from 'react';

class SortTasks extends Component{
    handleChange(){

    }
    render(){
        return (
            <div>
                <select value="byDefault" name="sorting" id="sorting" onChange={this.handleChange}>
                    <option value="byAlphabet">by Alphabet</option>
                    <option value="byNewest">by Newest</option>
                    <option value="byDefault">Default</option>
                </select>
                <form action="#">
                    <input type="text" name="filterText" placeholder="Filter results..."/>
                </form>
            </div>
        )
    }

}

export default SortTasks