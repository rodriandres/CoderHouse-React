import { useState } from "react";

const Form = ({setContact, setCompleteData}) =>{
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handlerSubmitForm = (e) => {
        e.preventDefault();

        const contactObject = {
            name: name, phone: phone, address: address, email: email, comment: comment
        }

        setContact(contactObject);
        setCompleteData(true);
    }

    // const clearContactForm = () => {
    //     setName('');
    //     setAddress('');
    //     setPhone('');
    //     setEmail('');
    //     setComment('');
    // }

    return (
        <div>
            <div>Fill the fields bellow</div>
            <form className="form" onSubmit={(e)=>handlerSubmitForm(e)}>
                <label className="form__field"> Name:
                    <input
                    className="form__field--input"
                    type='text'
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    />
                </label>
                <label className="form__field"> Phone:
                    <input
                    type='number'
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                    />
                </label>
                <label className="form__field"> Address:
                    <input
                    type='text'
                    value={address}
                    onChange={({target}) => setAddress(target.value)}
                    />
                </label>
                <label className="form__field"> Email:
                    <input
                    type='email'
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <label className="form__field"> Comment:
                    <input
                    type='text'
                    value={comment}
                    onChange={({target}) => setComment(target.value)}
                    />
                </label>
                {name !== '' && phone !== '' && address !== '' && email !== ''? <button type="submit">Confirmar</button> : null }
            </form>
        </div>
    )
}

export default Form;