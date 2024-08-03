import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './style.module.scss';
import { Box, useMediaQuery } from '@mui/material';
import { Button, CustomInput, Typography } from '@/design-system/Atoms';
import { CustomDatePicker, SuperCards } from '@/design-system/Molecules';
import { useRouter } from 'next/navigation';
import { LANDING_SCREEN_SEEDDATA, superCards } from '@/utils';
import { FaArrowLeft } from 'react-icons/fa6';
import dayjs, { Dayjs } from 'dayjs';
import { useProfileHandler } from '@/hooks/API';

interface FormValues {
  name: string;
  email: string;
  dateOfBirth: Dayjs | null;
}

const PersonalDetailsCreation = () => {
  const router = useRouter();
  const { personalDetails, personalDetailsLoading } = useProfileHandler();
  const [selectedCard, setSelectedCard] = useState<string>('');
  const [showCardError, setShowCardError] = useState(false);

  const isMobile = useMediaQuery('(max-width:767px)');
  const isTab = useMediaQuery('(max-width:992px)');

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      dateOfBirth: null, // Set the default date to null here
    },
  });

  const onSubmit = (data: FormValues) => {
    if (selectedCard) {
      const formattedDateOfBirth = data.dateOfBirth?.format('YYYY-MM-DD');

      const payload = {
        ...data,
        dateOfBirth: formattedDateOfBirth,
        landingScreen: LANDING_SCREEN_SEEDDATA.PERSONAL_PROFILE_ADD,
        gender: selectedCard,
      };

      personalDetails(payload);
      router.push('/profiletypechildren');
    } else {
      setShowCardError(true);
    }
  };

  const handleCardClick = (key: string) => {
    setSelectedCard(key);
    setShowCardError(false);
  };

  const validateField = async (name: keyof FormValues) => {
    await trigger(name);
  };

  return (
    <>
      <Box width="100%" height="100%">
        <Box
          className="toolbar_mob_res"
          sx={{ display: 'flex' }}
          justifyContent={isTab ? 'center' : 'start'}
        >
          <FaArrowLeft
            size={30}
            className="arrow01"
            onClick={() => router.back()}
          />

          <Box ml={2}>
            <Typography
              className="toolbar_mob_res_heading"
              fontFamily="Poppins"
              size="subtitlew"
              textAlign={isTab ? 'center' : 'left'}
            >
              Customize your experience
            </Typography>
          </Box>
        </Box>

        <Box mt={5} className="mainContainer" height="100%">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form_indi_relate}
          >
            <Box mt={3}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: 'Name is required',
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: 'Name should only contain letters and spaces',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Name should not be greater than 50 characters',
                  },
                }}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    label="Name"
                    placeholder="Enter name"
                    required={true}
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    onChange={(e) => {
                      field.onChange(e);
                      validateField('name');
                    }}
                  />
                )}
              />
            </Box>

            <Box mt={3}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Email should not be greater than 100 characters',
                  },
                }}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    label="Enter Email"
                    required={true}
                    placeholder="Enter Email"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    onChange={(e) => {
                      field.onChange(e);
                      validateField('email');
                    }}
                  />
                )}
              />
            </Box>

            <Box mt={3}>
              <Controller
                name="dateOfBirth"
                control={control}
                rules={{
                  required: 'Date of birth is required',
                  validate: (value) => {
                    if (!value) return 'Date of birth is required';
                    return dayjs(value).isAfter(dayjs())
                      ? 'Date of birth cannot be in the future'
                      : true;
                  },
                }}
                render={({ field }) => (
                  <CustomDatePicker
                    {...field}
                    label="Date of birth"
                    onChange={(date) => {
                      setValue('dateOfBirth', date, { shouldValidate: true });
                      validateField('dateOfBirth');
                    }}
                    value={field.value}
                    required={true}
                    error={!!errors.dateOfBirth}
                    helperText={errors.dateOfBirth?.message}
                  />
                )}
              />
            </Box>

            <Box mt={2} mb={2}>
              <Typography className={styles.label_indetify_text}>
                You identify yourself as
                <strong className={styles.mandertystar}>*</strong>:
              </Typography>
            </Box>

            <Box className={styles.boxConatiner}>
              {superCards?.map((card: any, index) => (
                <Box key={card.key} width="100%" px={1}>
                  <SuperCards
                    cardData={card}
                    active={selectedCard === card.key}
                    disabled={card.disabled}
                    onClick={() => handleCardClick(card.key)}
                  />
                </Box>
              ))}
            </Box>

            {showCardError && (
              <Typography color="red" className={styles.errorText}>
                Please select at least one card.
              </Typography>
            )}
            <Box className={styles.btn_abs_btm}>
              <Box className="btn_fixed_res">
                <Button fullWidth type="submit">
                  <Typography size="btn">Continue</Typography>
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default PersonalDetailsCreation;
