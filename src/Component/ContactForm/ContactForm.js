import { useState } from 'react';
import { submit } from '../../redux/contacts/operations';

import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';

function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(submit({ name, number }));
        reset();
    };

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <div className={s.Box}>
            <form className={s.Form} onSubmit={handleSubmit}>
                <label className={s.Label}>
                    Name
                    <input
                        className={s.Input}
                        value={name}
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        autoComplete="true"
                        onChange={handleChange}
                    />
                </label>

                <label className={s.Label}>
                    Number
                    <input
                        className={s.Input}
                        type="tel"
                        value={number}
                        name="number"
                        placeholder="Enter number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        autoComplete="true"
                        onChange={handleChange}
                    />
                </label>

                <button className={s.Btn} disabled={name.length === 0}>
                    Add contact
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
