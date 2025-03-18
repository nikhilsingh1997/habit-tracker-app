import { useEffect } from "react";
import styles from "./Quote.module.css";
import { habitSelector, quoteAsyncThunk } from "../../Redux/HomePageReducer";
import { useDispatch, useSelector } from "react-redux";

const Quote = ()=>{
    const dispatch = useDispatch();
    const {quote, suggestedHabit} = useSelector(habitSelector);
    // const [quote, setQuote] = useState([]);
    // const [myQuote, setmyQuote] = useState({});

    // useEffect(()=>{
    //     if(quoteArray){
    //         setQuote(quoteArray.quote);
    //     }
    // } , [quoteArray]);

    // useEffect(()=>{
    //     if(quote.length > 0){
    //             const randomIndex = Math.floor(Math.random()*30);
    //             const randomQuote = quote[randomIndex];
    //             console.log("randomIndex -> ",randomQuote);
    //             setmyQuote(randomQuote);
    //     }
    // }, [quoteArray]);

    
    useEffect(()=> {
        console.log("quote ->", quote, suggestedHabit);
        if(quote.length === 0 ){
            console.log("I am quote useEffect");
            dispatch(quoteAsyncThunk());
        }
    },[dispatch]);


    return (<div className={styles.quoteContainer} >
                <span style = 
                        {{
                            textShadow :"3px 3px 5px lightblue", 
                            fontWeight : "700", color : "#53530b", 
                            fontSize : "medium", 
                            marginLeft : "1rem"}} 
                            >Quote of the day :</span>
                <div className={styles.quotes} >{quote.quote} 
                    <span style = 
                            {{
                                fontWeight : "1000",
                                marginRight : "-30rem", 
                                marginBottom : "-3rem",
                                color : "white"}} 
                                >by - {quote.author}</span> </div>
                
            </div>);
};

export {Quote};