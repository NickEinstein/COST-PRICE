
import React, { useState } from 'react';
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import useAuthUser from "hooks/useAuthUser";
import gigLogo from 'images/Ellipse 56.png'

import { Button, Card, CardActions, CardContent, Input, Divider, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function WallCards(props) {
  
  const history = useNavigate();


  const redirect = () => {

    history('/complete-signUp');
  }


  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

 


  
  return (
   
    <div className=''>
      <Card className=' text-black text-center' sx={{ minWidth: 280, minHeight:120, backgroundColor:'#EBEBEB' }}>
      <CardContent>
      <div className="flex pb-2" style={{backGroundColor:'#EBEBEB'}}>
            <img src = {gigLogo}/>
            <div className="ml-2 text-left" style={{backGroundColor:'#EBEBEB'}}>
            <p className='medium-size cardhead'>Name</p>
            <Typography variant='h6'>Taiwo Daniel</Typography>
            </div>
    </div>
       
        <Divider />

        <div className='w-4/5 '>
            <div className="flex justify-between text-left pt-2">
                <div className=" " style={{backGroundColor:'#EBEBEB'}}>
                <p className='medium-size cardhead'>Company</p>
                <Typography className='text-sm font-bold' variant=''>GIG Logistics</Typography>
                </div>
                <div className="" style={{backGroundColor:'#EBEBEB'}}>
                <p className='text-ssm cardhead'>Contact</p>
                <Typography variant='' className='text-sm font-bold' >09013417032</Typography>
                </div>
            </div>
        </div>

        <div className='flex justify-between mt-3'>
            <Button className='px-10 py-1 ' color='primary' >Verify</Button>
            <Button className='px-10 py-1 bg-transparent text-cardhead text-cardhead-border'>Decline</Button>
        </div>
        
       
      </CardContent>
      
    </Card>
    </div>
  );
}

export default WallCards;
