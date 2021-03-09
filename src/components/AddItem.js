import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

const AddItem = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const onChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'description') {
            setDescription(e.target.value)
        }
    }
    const onAddItem = () => {
        props.addItem({
            name, description
        })
    }
    return (<div style={{display: 'flex', width: '50%', justifyContent: 'space-around', marginTop: '20px'}}>
       <div>Name <input type='text' name='name' value={name} style={{height: '20px'}} onChange={onChange}/></div>
       <div style={{width: '65%'}}>Description
           <input type='text' name='description' value={description} style={{height: '20px', width: '60%'}}  onChange={onChange}/>
       </div>
       <div><button style={{height: '25px'}} onClick={onAddItem}>Add to List</button></div>
    </div>)
}

AddItem.propTypes = {
    addItem: PropTypes.func
}
export default AddItem


