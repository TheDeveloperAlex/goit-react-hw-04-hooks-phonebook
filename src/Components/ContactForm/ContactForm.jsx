import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

export default function ContactForm({formSubmit, validate }) {
    const [name, setName] = useState(''); 
    const [number, setNumber] = useState('');

const handleChangephnone = e => {
        const value = e.target.value;
        setNumber( value );
        
            
    }
    const handleChange = (e) => {
            const value = e.target.value;
        setName( value );
    }


    
    
    const handleSubmit = e => { 
        e.preventDefault();
        const obj = {
            name: name,
            number: number,
            id: uuidv4(),
        }
        {
            validate(obj) && formSubmit(obj)
        }
        {
            setName( '' );
            setNumber( '' );
            document.getElementById('name').value = '';
            document.getElementById('number').value = '';
        };
    }

    return (
        <div className={s.interface}>
                     
                <form onSubmit={handleSubmit} className={s.form}>
                    <div>
                        <label>
                                <p>Name</p> 
                                <input
                                    type="text"
                                    name="name"
                                        onChange={handleChange}
                                        id="name"
                                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                                    required
                                />
                        </label>
                            
                        <label>
                            Phone   
                            <input
                                className={s.inputTel}
                                    type="tel"
                                        name="number"
                                        onChange={handleChangephnone}
                                        id="number"
                                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                                    required
                                />
                        </label> 
                    </div>
                    
                        <button type="submit"  className={s.buttonAdd}>Add contact</button>
                    </form>
               </div>

    )

}
