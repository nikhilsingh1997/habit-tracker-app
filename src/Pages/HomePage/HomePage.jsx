import styles from "./HomePage.module.css";
import { Suggestion } from "../../Components/Suggestions/Suggestions";
import { HabitForm } from "../../Components/HabitForm/HabitForm";
import { Quote } from "../../Components/Quote/Quote";
import { useDispatch, useSelector } from "react-redux";
import { habitSelector } from "../../Redux/HomePageReducer";
import { toggleShow } from "../../Redux/HomePageReducer";


const HomePage = ()=>{
        // const [show, setShow] = useState(true);
        const dispatch = useDispatch();
        const { imageURL, showHabitForm } = useSelector(habitSelector);

        const handleShow = ()=>{
            // toShow((prevState)=> !prevState);
            dispatch(toggleShow());
            
        }

        return (<div className = {styles.pageContainer} >
                    <div className = {styles.formContainer}  >
                        <Quote/>
                        {showHabitForm ? 
                            <>
                            <button className={`${styles.addBtn} ${styles.btn}`}
                                    onClick={handleShow}
                                >Add Habit</button>
                                <img className={styles.motivationalImg} 
                                     src = {imageURL.url} 
                                     alt = "motivational quote"/>
                                </> :
                                <>
                            <button className={`${styles.cancelBtn} ${styles.btn}`}
                                     onClick={handleShow}
                                >Cancel</button>
                                <HabitForm/>
                                </>
                            } 
                    </div>
                    <div className = {styles.suggestionContainer}  >
                        <Suggestion/>
                    </div>
                </div>)
};

export {HomePage}