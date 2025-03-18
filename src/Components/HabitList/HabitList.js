import { useSelector } from "react-redux";
import { habitSelector } from "../../Redux/HomePageReducer";
import { HabitListItem  } from "../HabitListItem/HabitListItem";
import styles from "./HabitList.module.css"

const HabitList = ()=>{
    const { habit } = useSelector(habitSelector);
    return ( <>
                <h3 className={styles.yourHabits} >
                    { habit.length > 0 ? "Your Habit List :" : "Nothing in your habit list"}</h3>
                    {habit.map((habit, index)=>{
                        return < HabitListItem habit = { habit } 
                                        key = { index } />
                })}
             </>
             );
};


export { HabitList }