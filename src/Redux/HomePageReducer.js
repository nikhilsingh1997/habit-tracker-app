import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DisplayImage } from "../Data/ImageURL";
import { act } from "react";


const initialState = {
    habit : [],
    suggestedHabit : {},
    quote : [],
    imageURL: "",
    showHabitForm : true,
}

const quoteAsyncThunk = createAsyncThunk("quoteAsyncThunk" ,
    async (arg, thunkAPI)=> {
                try{
                    const response = await axios.get("https://dummyjson.com/quotes");
                    console.log(response);
                    // thunkAPI.dispatch(setQuote(response.data.quotes));
                    return response.data.quotes;
                }catch(err){
                    // console.log(err);
                    return err;
        }
        }
)


const habitReducerSlice = createSlice({
    name : "habitReducer",
    initialState,
    reducers : {
        addHabit : ( state, action ) => {
            state.habit.push(action.payload);
            console.log(action.payload);
        },
        setHabit : ( state, action ) => {
            state.suggestedHabit =action.payload;
        },
        deleteHabit : ( state, action ) => {
            state.habit =  state.habit.filter((item) => item.id !== action.payload);
        },
        toggleShow : ( state ) => {
            state.showHabitForm = !state.showHabitForm;
        },
        addCompletedDays : ( state, action ) => {
            const {id, index} = action.payload;
          
            const habitIndex = state.habit.findIndex((habitSelected, i)=> habitSelected.id === id);
            if(state.habit[habitIndex].completedDays < 7  ){
                state.habit[habitIndex].completedDays++; 
                state.habit[habitIndex].weekStatus[index].status.done = true;
                state.habit[habitIndex].weekStatus[index].status.notDone = false;
            }
        },
        remCompletedDays : ( state, action ) => {
            const {id, index} = action.payload;
            const habitIndex = state.habit.findIndex((habitSelected, i)=> habitSelected.id === id);
            if( state.habit[habitIndex].weekStatus[index].status.done && state.habit[habitIndex].completedDays > 0){
                state.habit[habitIndex].completedDays--; 
            }
                state.habit[habitIndex].weekStatus[index].status.done = false;
                state.habit[habitIndex].weekStatus[index].status.notDone = true;
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(quoteAsyncThunk.fulfilled, (state, action) => {
            const allQuotes =[...action.payload];
            const randomIndexQuote = Math.floor(Math.random()*30);
            state.quote = allQuotes[randomIndexQuote];
            const randomIndex = Math.floor(Math.random()*12);
            state.imageURL = DisplayImage[randomIndex];
    })}
});

const habitReducer = habitReducerSlice.reducer;
const { setHabit, addHabit, deleteHabit, toggleShow, addCompletedDays, remCompletedDays } = habitReducerSlice.actions;
const habitSelector = (state) => state.habitReducer;



export { 
         habitReducer, 
         setHabit, 
         addHabit, 
         habitSelector, 
         quoteAsyncThunk, 
         deleteHabit, 
         toggleShow,
         addCompletedDays,
         remCompletedDays
        };

