import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const slice = createSlice({
    name: 'userBooking',
    initialState: {
      availSlots: [],
      availSlotsLoading: false,
      availSlotsMsg: null,
      transactionId:"",
      selectedSlots:null,
      artistId:null,
      eventData:null
    },
    reducers: {
      startSlotsLoading:(state,action)=>{
        state.availSlotsLoading = true;
      },
      setAvailSlots:(state,action) => {
        if(action.payload.IsSuccess){
            state.availSlots = action.payload.SlotDetails
            state.availSlotsLoading = false;
            state.availSlotsMsg = action.payload.Message;
        } else {
          state.availSlotsLoading = false;
          state.availSlotsMsg = action.payload.Message;
        }
      },
      setTransactionId:(state,action) => {
        if(action.payload.IsSuccess){
            state.transactionId = action.payload.TransactionId;
        }
      },
      setArtistId:(state,action)=>{
        state.artistId = action.payload;
      },
      setEventData:(state,action) => {
        state.eventData = action.payload;
      },
      SelectSlot:(state,action) => {
        state.selectedSlots = action.payload;
      }
    }
  });
  
  export default slice.reducer
  
  
  export const {startSlotsLoading,  setAvailSlots,setTransactionId,setArtistId,setEventData,SelectSlot} = slice.actions;
  
  export const fetchAvailSlots = (body) => async dispatch => {
    dispatch(startSlotsLoading());
    try{
        await axios
            .post(API_URL + 'UBooking/GetAvailableSlot',body,{headers:authHeader()})
            .then(response => dispatch(setAvailSlots(response.data)));
    } catch (e){
        console.log(e);
    }
  }

  export const saveUserBooking = (body) => async dispatch => {
    try{
        await axios 
            .post(API_URL+'UBooking/SaveUBooking',body,{headers:authHeader()})
            .then(response => dispatch(setTransactionId(response.data)));
    } catch (e){
        console.log(e);
    }
    return true;
  }

  export const moveTransactionToCart = (body) => async dispatch => {
    try{
      await axios
        .post(API_URL+'UBooking/MovetoCart',body,{headers:authHeader()})
        .then(response=>console.log(response));
    } catch(e){
      console.log(e);
    }
  }
  
  