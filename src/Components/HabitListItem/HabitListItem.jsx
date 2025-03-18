import styles from "./HabitListItem.module.css"
import { useDispatch  } from "react-redux";
import { deleteHabit  } from "../../Redux/HomePageReducer";
import { Link } from "react-router";



const HabitListItem = ({habit, index})=>{

    const {name, url, completedDays, id} = habit;
    const deleteBtn = "https://cdn-icons-png.flaticon.com/512/5676/5676047.png";
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteHabit(id));
    }

    return(<Link to = {`${id}`}>
            <div className = {styles.habitListContainer} >
                        <div className={styles.habitDetails} >
                            <span>{name}
                            </span>
                            <small>{completedDays}/7 Days</small>
                            
                        </div>
                        
                        
                        <img src = {url} 
                            alt = "habit"
                            style = {{
                                height : "75%",
                                width : "9%",
                                marginTop : "1.5%",
                                marginRight :"-25%",
                                transition :  "transform 0.3s ease-in-out",
                            }}
                                />
                            
                        <img style = {{
                            height : "60%",
                            width :"6%",
                            padding : "2%",
                            margin : "0.1% 2%",
                            transition :  "transform 0.3s ease-in-out",
                        }}
                            src = {deleteBtn} 
                            alt = ""
                            onClick = {()=>handleDelete(id)}
                        />
            </div>
            </Link>)
};

export { HabitListItem };