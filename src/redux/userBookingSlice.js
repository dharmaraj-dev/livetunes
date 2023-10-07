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
      transactionDetailsLoading : true,
      payNowLoading: false,
      payNowError: null,
      payNowSuccess: null,
      saveAndPayLoading: false,
      saveAndPayError: false,
      saveAndPaySucess: false,
      saveAndPayMessage: null,
      payFromCartLoading: false,
      payFromCartError: false,
      payFromCartSuccess: false,
      payFromCartMessage: null,
      moveToWishlistLoading: false,
      moveToWishlistError: false,
      moveToWishlistSuccess: false,
      moveToWishlistMessage: null
    },
    reducers: {
      startSlotsLoading:(state,action)=>{
        state.availSlotsLoading = true;
      },
      startBookingLoading:(state,action)=>{
        state.saveBookingLoading = true;
      },
      startPayNowLoading:(state,action)=>{
        state.payNowLoading = true;
      },
      startSaveAndPayLoading:(state,action)=>{
        state.saveAndPayLoading = true;
      },
      startPayFromCartLoading:(state,action)=>{
        state.payFromCartLoading = true;
      },
      startMoveToWishlistLoading:(state,action)=>{
        state.moveToWishlistLoading = true;
      },
      setAvailSlots:(state,action) => {
        if(action.payload.IsSuccess){
            state.availSlots = action.payload.SlotDetails
            state.availSlotsLoading = false;
            state.availSlotsMsg = action.payload.Message;
        } else {
          state.availSlotsLoading = false;
          state.availSlots = [];
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
      },
      setSaveAndPayDetails:(state,action) => {
        state.saveAndPayLoading = false;
        console.log(action.payload);
        state.saveAndPayError = action.payload
        state.saveAndPaySucess = action.payload;
      },
      stopSaveAndPayLoading:(state,action)=>{
        state.saveAndPayLoading = false;
        state.saveAndPayMessage = action.payload.Message;
        state.saveAndPayError = true;
        state.saveAndPaySucess = false;
      },
      saveAndPaySuccessError:(state,action)=>{
        if(action.payload.IsSuccess) {
          state.saveAndPaySucess = true;
          state.saveAndPayError = false;
          state.saveAndPayMessage = action.payload.Message;
        } else {
          state.saveAndPaySucess = false;
          state.saveAndPayError = true;
          state.saveAndPayMessage = action.payload.Message;
        }        
      },
      payFromCartSuccessError:(state,action)=>{
        state.payFromCartLoading = false;
        if(action.payload.IsSuccess) {
          state.payFromCartSuccess = true;
          state.payFromCartError = false;
          state.payFromCartMessage = action.payload.Message;
        } else {
          state.payFromCartSuccess = false;
          state.payFromCartError = true;
          state.payFromCartMessage = action.payload.Message;
        }        
      },
      moveToWishListSuccessError:(state,action)=>{
        state.moveToWishlistLoading = false;
        if(action.payload.IsSuccess) {
          state.moveToWishlistSuccess = true;
          state.moveToWishlistError = false;
          state.moveToWishlistMessage = action.payload.Message;
        } else {
          state.moveToWishlistSuccess = false;
          state.moveToWishlistError = true;
          state.moveToWishlistMessage = action.payload.Message;
        }        
      },
      resetState:(state,action)=>{
        state = state.initialState;
      },
    }
  });
  
  export default slice.reducer
  
  
  export const {startSlotsLoading,  setAvailSlots,setTransactionId,setArtistId,setEventData,SelectSlot,startBookingLoading,setTransactionDetails, startPayNowLoading, startSaveAndPayLoading, setSaveAndPayDetails, stopSaveAndPayLoading, saveAndPaySuccessError, startPayFromCartLoading, payFromCartSuccessError, startMoveToWishlistLoading, moveToWishListSuccessError, resetState } = slice.actions;
  
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

  export const payForUserBooking = (body) => async dispatch => {
    dispatch(startPayNowLoading())
    try{
      return await axios 
            .post(API_URL+'UBooking/MoveForPay',body,{headers:authHeader()})
            .then(response => {return response.data});
    } catch (e){
        console.log(e);
        return e;
    }
  }

  export const getTransactionDetails = (body) => async dispatch => {
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
    dispatch(startMoveToWishlistLoading())
    try{
      await axios
        .post(API_URL+'UBooking/MovetoCart',body,{headers:authHeader()})
        .then(response=>{
            dispatch(moveToWishListSuccessError(response.data))
        });
    } catch(e){
      console.log(e);
    }
  }

  export const saveForBooking = (body) => async dispatch => {
    dispatch(startSaveAndPayLoading());
    try{
      return await axios 
            .post(API_URL+'UBooking/SaveUBooking',body,{headers:authHeader()})
            .then(response => {
              if(response.data.IsSuccess && response.data.TransactionId != null) {
                return response.data;
              } else {
                dispatch(stopSaveAndPayLoading(response.data));
              }
            });
    } catch (e){
        console.log(e);
        return e;
    }
  }

  export const payForBooking = (body) => async dispatch => {
    dispatch(startSaveAndPayLoading());
    try{
      return await axios 
            .post(API_URL+'UBooking/MoveForPay',body,{headers:authHeader()})
            .then(response => {
              dispatch(stopSaveAndPayLoading(response.data));
              dispatch(saveAndPaySuccessError(response.data));
              return response.data
            });
    } catch (e){
        console.log(e);
        return e;
    }
  }

  export const payForBookingFromCart = (body) => async dispatch => {
    dispatch(startPayFromCartLoading())
    try{
      return await axios 
            .post(API_URL+'UBooking/MoveForPay',body,{headers:authHeader()})
            .then(response => { dispatch(payFromCartSuccessError(response.data)); return response.data});
    } catch (e){
        console.log(e);
        return e;
    }
  }

  export const resetToInitialState = (body) => async dispatch => {
    dispatch(resetState())
  }

  