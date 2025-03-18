import { useDispatch } from 'react-redux';
import styles from './DayStatus.module.css';
import { useState } from 'react';
import { addCompletedDays, remCompletedDays } from '../../Redux/HomePageReducer';

const DayStatus = ({day, index, id, done, notDone})=>{
    
    const dispatch = useDispatch();



    const handleAdd = () => {
        if(!done){
            dispatch(addCompletedDays({id, index}));
        } 
    }

    const handleRemove = () => {
        if(!notDone){
            dispatch(remCompletedDays({id, index}));
        }
    }


    return <div className={styles.dayCard} >
            <p>{day.day}</p>
            <hr/>
            <div className={styles.btn}>
                <i 
                    className={ done ? 
                                `fa-solid fa-circle-check ${styles.checked}`:
                                `fa-solid fa-circle-check ${styles.check}` 
                             }
                    onClick={ handleAdd }
                    ></i>
                <i 
                    className={ !notDone ?
                                `fa-solid fa-circle-xmark ${styles.check}` :
                                `fa-solid fa-circle-xmark ${styles.crossed}`
                            }
                    onClick={ handleRemove }
                    ></i>
            </div>
            <h4>Day : {index + 1}</h4>
    </div>
};

export { DayStatus };