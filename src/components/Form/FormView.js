
const FormView = ({contact, setCompleteData}) =>{

    return (
        <div>
            <div>
               <h2> Your Data </h2>
               <p>Name: {contact.name} </p>
               <p>Phone: {contact.phone} </p>
               <p>Address: {contact.address} </p>
               <p>Email: {contact.email} </p>
               <p>Comment: {contact.comment} </p>
            </div>
            {contact.name !== '' && contact.phone !== '' && contact.address !== '' && contact.email !== ''? <button onClick={()=>setCompleteData(false)}>Edit</button> : null }
        </div>
    )
}

export default FormView;