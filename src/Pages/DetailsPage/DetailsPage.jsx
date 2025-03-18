import styles from "./DetailsPage.module.css";
import { HabitList } from "../../Components/HabitList/HabitList";
import { Outlet, useParams } from "react-router";


const DetailsPage = ()=>{

    const { habitId } = useParams();

    const todayDate = new Date().toDateString();

    return(<div className= {styles.pageContainer} >
                <div className={styles.infoContainer} >
                    <span 
                        className={`${styles.text} ${styles.msg} `}
                        >Hey Champ, keep the good habits going.</span> 
                    <span  
                        className = {`${styles.text} ${styles.date} `} 
                        >{todayDate}</span>
                </div>
                <div className={styles.contentContainer} >
                    <div 
                        className={styles.habitListContainer} >
                            <HabitList/>
                        </div>
                    <div 
                        className={styles.weekStatusContainer} >
                            { habitId === undefined ?
                              <h4 className={styles.weekStatusMsg} > Select habit from list to know your weekly status </h4> 
                              : <Outlet/>}
                        </div>
                </div>
                
            </div>

    )
};

export { DetailsPage };