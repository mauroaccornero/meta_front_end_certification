import layoutStyles from "../../../../layout/Layout/Layout.module.css";
import formStyles from "./ReservationForm.module.css";
import {useEffect, useState} from "react";

function ReservationForm() {
    const today = new Date()
    const formattedToday = today.toISOString().split('T')[0]
    const [formData, setFormData] = useState([])
    const [isFormDataLoading, setIsFormDataLoading] = useState(false)
    const [isFormSubmitting, setIsFormSubmitting] = useState(false)
    const [date, setDate] = useState(formattedToday)
    const [time, setTime] = useState(null)
    const [guests, setGuests] = useState(2)
    const [occasion, setOccasion] = useState('Others')
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  useEffect(() => {
    (async function () {
        try {
            setIsFormDataLoading(true)
            const availabilityResponse = await fetch("/data/availability.json");
            const availabilityData = await availabilityResponse.json();
            setFormData(availabilityData.data)
            setTime(availabilityData.data[0])
        }catch(error){
            console.error(error)
        }
        setIsFormDataLoading(false)
    })();
  }, [date]);

    const handleSubmit = (event) => {
        (async function () {
            try {
                setIsFormSubmitting(true)
                const saveResponse = await fetch("/data/availability.json",{
                    method: "POST",
                    body:{
                        guests,
                        occasion,
                        time,
                        date
                    }
                });
                const saveData = await saveResponse.json();
                console.log(saveData)
            }catch(error){
                console.error(error)
            }
            setIsFormSubmitting(false)
            setIsFormSubmitted(true)
        })();
        event.preventDefault()
    }


  return (
    <div className={`${layoutStyles.wrapper} ${formStyles.container}`}>
      <h1>Make your reservation</h1>
        {isFormDataLoading ? (<div>Loading...</div>) : isFormSubmitting ? (<div>Saving reservation, please wait...</div>) : isFormSubmitted ? (<div>
            <h2>Thanks</h2>
            <p>Your reservation for {date} {time} was correctly saved!</p>
        </div>) : (<form className={formStyles.ReservationForm} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date"
                   id="res-date"
                   value={date}
                   min={formattedToday}
                   onChange={(e) => setDate(e.target.value)}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.event)}>
                {formData.map(item => (<option key={item} value={item}>{item}</option>))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.event)}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.event)}>
                <option value={'Birthday'}>Birthday</option>
                <option value={'Anniversary'}>Anniversary</option>
                <option value={'Others'}>Others</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>)}
    </div>
  );
}

export default ReservationForm;
