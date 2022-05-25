import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {
    const navigate = useNavigate();

    function addMeetupHander(meetupData) {
        fetch(
            'https://fir-frontend-ade39-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method: 'POST', 
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Typoe' : 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace: true});
        });
    }
    return (
        <section>
            <h1> New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHander}/>
        </section>
    )
}

export default NewMeetupPage;