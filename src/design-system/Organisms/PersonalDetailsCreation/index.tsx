import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './style.module.scss';
import { Box } from '@mui/material';
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

  // Calculate the default date (18 years ago)
  const defaultDateOfBirth = dayjs().subtract(18, 'years');

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      dateOfBirth: defaultDateOfBirth, // Set the default date here
    },
  });

  const onSubmit = (data: FormValues) => {
    if (selectedCard) {
      console.log('Form submitted:', { ...data, selectedCard });

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

  const watchDateOfBirth = watch('dateOfBirth');

  return (
    <>
      <Box>
        <Box sx={{ display: 'flex' }} onClick={() => router.back()}>
          <FaArrowLeft size={30} className={styles.arrow01} />
          <Box ml={1}>
            <Typography fontFamily="Poppins" size="subtitlew" textAlign="left">
              Customize your experience
            </Typography>
          </Box>
        </Box>
        <Box mt={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mt={4}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: 'Name is required',
                  pattern: {
                    value: /^[a-zA-Z0-9 ]*$/,
                    message: 'Name should not contain special characters',
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
                  />
                )}
              />
            </Box>

            <Box mt={4}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email',
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
                  />
                )}
              />
            </Box>

            <Box mt={4}>
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
                    }}
                    value={watchDateOfBirth}
                    required={true}
                    error={!!errors.dateOfBirth}
                    helperText={errors.dateOfBirth?.message}
                  />
                )}
              />
            </Box>

            <Box mt={2} mb={2}>
              <Typography size="body">
                You identify yourself as
                <strong className={styles.mandertystar}>*</strong>:
              </Typography>
            </Box>

            <Box className={styles.boxConatiner}>
              {superCards?.map((card: any, index) => (
                <Box key={card.key}>
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
            <Box mt={3}>
              <Button fullWidth type="submit">
                <Typography size="btn">Continue</Typography>
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default PersonalDetailsCreation;
