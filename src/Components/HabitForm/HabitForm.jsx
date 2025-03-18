import styles from "./HabitForm.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { habitSelector } from "../../Redux/HomePageReducer";
import { addHabit } from "../../Redux/HomePageReducer";
import { useNavigate } from "react-router";



const HabitForm = ()=>{
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const {suggestedHabit, habit : habitArray} = useSelector(habitSelector);
    const [habit, setHabit] = useState("");

    useEffect(()=>{
        if(suggestedHabit){
            setHabit(suggestedHabit.habit);
        }
    }, [suggestedHabit]);

    const calCulatedDaysOfWeek = ( date ) => {
        const days = new Array(7);
        const len = days.length;
        for(let i = 0; i < len ; i++){
            days[len - 1 - i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i).toString();
            const day = `${days[6-i].slice(0,3)}, ${days[6-i].slice(4,15)}`;
            days[len - 1 - i] = {day, status : {done : false, notDone : false} };
        }
        return days;
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); 

        const addedHabit = {
            id : new Date().getTime().toString(36),
            url : 
            suggestedHabit.habit === habit  ? 
            suggestedHabit.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcMGmbN7eDGPKYy1iaZyazKUjIRH42wqxWw&s',
            name : habit,
            createdAt : new Date(),
            completedDays : 0,
            weekStatus : calCulatedDaysOfWeek(new Date()),
        }
       
        if(habitArray.length > 0 && habitArray.find((habitPresent)=> habitPresent.name === habit)){
            alert("Habit already Present");
        }else{
            dispatch(addHabit(addedHabit));
            Navigate("/detailsPage");
        }
        
        
    }

    return (<div className = {styles.habitFormContainer} >
                <h3>Add Your Habit</h3>
                <hr/>
                <form onSubmit={handleSubmit} >
                    <label htmlFor = "habit" 
                           >Habit</label>
                    <input type = "text" 
                            placeholder = "Enter your habit" 
                            value = {habit}
                            onChange = {(e)=>setHabit(e.target.value)}
                            required/>
                    <button type = "submit">Add</button>
                </form>
            </div>)
}

export {HabitForm};