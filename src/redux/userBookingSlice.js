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
      eventData:null,
      saveBookingLoading: false,
      transactionDetails : null,
      transactionDetailsLoading : true
    },
    reducers: {
      startSlotsLoading:(state,action)=>{
        state.availSlotsLoading = true;
      },
      startBookingLoading:(state,action)=>{
        state.saveBookingLoading = true;
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
      },
      setTransactionDetails:(state,action) => {
        state.transactionDetailsLoading = false
        state.transactionDetails = action.payload;
      }
    }
  });
  
  export default slice.reducer
  
  
  export const {startSlotsLoading,  setAvailSlots,setTransactionId,setArtistId,setEventData,SelectSlot,startBookingLoading,setTransactionDetails} = slice.actions;
  
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
    dispatch(startBookingLoading())
    try{
      return await axios 
            .post(API_URL+'UBooking/SaveUBooking',body,{headers:authHeader()})
            .then(response => {dispatch(setTransactionId(response.data));return response.data});
    } catch (e){
        console.log(e);
        return e;
    }
  }

  export const saveTransactionDetails = (body) => async dispatch => {
    try{
      return await axios 
            .post(API_URL+'UBooking/GetTransactIdDetails',body,{headers:authHeader()})
            .then(response => {dispatch(setTransactionDetails(response.data));return response.data});
    } catch (e){
        console.log(e);
        return e;
    }
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
  
  