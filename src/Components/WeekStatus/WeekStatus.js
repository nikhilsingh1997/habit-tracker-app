import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { habitSelector } from "../../Redux/HomePageReducer";
import { DayStatus } from "../DayStatus/DayStatus";
import styles from "./WeekStatus.module.css"

const WeekStatus = ()=>{
    const { habit } = useSelector(habitSelector);
    const { habitId } = useParams();
    const habitSelected = habit.find((item, index) => item.id === habitId);
    
    return (<>
            {habitSelected && <div className = {styles.habitCard} >
                    <p> Habit 
                        : <span 
                            className={styles.habitName} > 
                            &nbsp;
                            {habitSelected.name}
                            </span> 
                    </p>
                    <span style = {{
                        // backgroundColor : "whitesmoke",
                        height : "auto",
                        width : "22%",
                        fontWeight : "600",
                        color : "green",
                        marginLeft : "1%"
                    }}> Your Weekly Progress : 
                    </span>
                    <div className={styles.dayCard} >
                    {  
                         habitSelected.weekStatus.map((day, index) => {
                            return <DayStatus 
                                        day = {day}  
                                        index = {index}
                                        done = {day.status.done}
                                        notDone = {day.status.notDone}
                                        id = {habitSelected.id}/>
                    }) } 
                    </div>
                    <small style = {{
                            margin : "2%",
                            fontFamily : "sans-serif",
                            fontWeight : "700",
                            color : "black",
                            textShadow : "1px 1px 1px white"
                    }} >
                        --- &nbsp;
                        Added on : {habitSelected.createdAt.toString().slice(0,24)} 
                        &nbsp; ---</small>
                </div>}
                </>)
};

export { WeekStatus };