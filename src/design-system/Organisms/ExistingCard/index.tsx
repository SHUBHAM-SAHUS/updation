'use client';
import { Button, CustomInput, Typography } from '@/design-system/Atoms';
import { useProfileHandler } from '@/hooks/API';
import { Box } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './style.module.scss';
import { IoIosCloseCircle } from 'react-icons/io';
import TextField from '@mui/material/TextField';

interface FormData {
  familyCode: string;
  onClose: () => void;
}

interface propsTypes {
  onClose: () => void;
}

const ExistingCard: React.FC<propsTypes> = ({ onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const { familyaccount, familyLoading } = useProfileHandler();

  const onSubmit = (data: FormData) => {
    const payload = {
      landingScreen: 'FAMILY_ACCOUNT_CREATE',
      familyCode: data.familyCode,
    };

    familyaccount(payload);
  };

  return (
    <>
      <Box className={styles.custom_modal}>
        <IoIosCloseCircle
          className={styles.custom_modal_close_icon}
          onClick={onClose}
        />
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="familyCode"
            control={control}
            defaultValue=""
            rules={{
              required: 'Family code is required',
              minLength: {
                value: 6,
                message: 'Family code must be exactly 6 characters',
              },
              maxLength: {
                value: 6,
                message: 'Family code must be exactly 6 characters',
              },
            }}
            render={({ field }) => (
              // <CustomInput
              //   label="Enter family code"
              //   placeholder="Enter family code"
              //   {...field}
              //   fullWidth
              //   error={Boolean(errors.familyCode)}
              //   helperText={errors.familyCode?.message}
              //   required
              // />

              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': {
                    m: 1,
                    // borderRadius: '8px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        // borderColor: 'black', // Set initial border color
                      },
                      '&:hover fieldset': {
                        // borderColor: 'black !important', // Prevent border color change on hover
                      },
                      '&.Mui-focused fieldset': {
                        // borderColor: 'black !important', // Prevent border color change on focus
                        borderWidth: 'none !important', // Prevent border width change on focus
                      },
                      '&.Mui-error fieldset': {
                        borderColor: 'black !important', // Prevent border color change on error
                      },
                      '&.Mui-disabled fieldset': {
                        // borderColor: 'black !important', // Prevent border color change on disabled
                      },
                    },
                    '& .MuiInputBase-input': {
                      '&:focus': {
                        outline: 'none',
                        boxShadow: 'none',
                      },
                    },
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
             
                  required
                  id="outlined-required"
                  defaultValue="Hello World"
                  label="Enter family code"
                  placeholder="Enter family code"
                  //   {...field}
                  fullWidth
                  //   error={Boolean(errors.familyCode)}
                  //   helperText={errors.familyCode?.message}
                />
              </Box>
            )}
          />
          <Box mt={3}>
            <Button fullWidth type="submit">
              <Typography size="btn">Join your family</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ExistingCard;
