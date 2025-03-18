import { SuggestedHabit } from "../../Data/SuggestedHabits";
import styles from "./Suggestions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { habitSelector, setHabit, toggleShow } from "../../Redux/HomePageReducer";

const Suggestion = ()=>{
    const dispatch = useDispatch();
    const { showHabitForm } = useSelector(habitSelector)
    const handleSelectedHabit = (habit)=>{
        dispatch(setHabit(habit));
        if(showHabitForm){
            dispatch(toggleShow());
        }
    };

    return (<>
                <h3 
                    style = {{textAlign : "center"}} 
                    >Suggestions</h3>
                {SuggestedHabit.map((habit, index)=>{
                    return (<div 
                                 key = {index} 
                                 className = {styles.suggestionContainer}  
                                 onClick = {()=>handleSelectedHabit(habit)} >
                                <img src = {habit.url} alt = {habit.habit} />
                                <p>{habit.habit}</p>
                            </div>)
                })}
       
            </>)
};

export {Suggestion};