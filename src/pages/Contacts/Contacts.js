import ContactForm from '../../Component/ContactForm';
import ContactList from '../../Component/ContactList';
import Filter from '../../Component/Filter';
function Contacts() {
    return (
        <>
            <ContactForm />
            <Filter />
            <ContactList />
        </>
    );
}
export default Contacts;
