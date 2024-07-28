import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Box } from '@mui/material';
import { Button, CustomInput, Image, Typography } from '@/design-system/Atoms';
import { CustomDatePicker, GenderCard } from '@/design-system/Molecules';
import fatherIcon from '@/assets/Images/fatherIcon.png';
import fatherGenderColor from '@/assets/Images/fatherGenderColor.png';
import motherIcon from '@/assets/Images/motherIcon.png';
import MotherGenderColor from '@/assets/Images/MotherGenderColor.png';
import otherGender from '@/assets/Images/othersGender.svg';
import otherGenderColor from '@/assets/Images/othersGenderColor.svg';
import addIcons from '@/assets/Images/addIcon.svg';
import deleteIcon from '@/assets/Images/deleteicon.svg';
import { useSelector } from 'react-redux';
import { useProfileHandler } from '@/hooks/API';
import { LANDING_SCREEN_SEEDDATA } from '@/utils';
import dayjs from 'dayjs';

const genders = [
  {
    title: 'Boy',
    normalImage: fatherIcon,
    selectedImage: fatherGenderColor,
    key: 'BOY',
  },
  {
    title: 'Girl',
    normalImage: motherIcon,
    selectedImage: MotherGenderColor,
    key: 'GIRL',
  },
  {
    title: 'Rather not say',
    normalImage: otherGender,
    selectedImage: otherGenderColor,
    key: 'RATHER NOT SAY',
  },
];

interface Child {
  name: string;
  dateOfBirth: string | null;
  gender: string;
}

const AddChildren: React.FC = () => {
  const { addChildren, isLoadingaddChildren } = useProfileHandler();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    clearErrors,
    watch,
  } = useForm<{ children: Child[] }>({
    defaultValues: {
      children: [{ name: '', dateOfBirth: null, gender: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'children',
  });

  const onSubmit = (data: { children: Child[] }) => {
    const formattedChildren = data.children.map((child) => ({
      ...child,
      dateOfBirth: child.dateOfBirth
        ? dayjs(child.dateOfBirth).format('YYYY-MM-DD')
        : null,
    }));

    const payload = {
      kids: formattedChildren,
      familyCode: personalDetails.familyCode,
      landingScreen: LANDING_SCREEN_SEEDDATA.KID_ADD,
    };

    addChildren(payload);
  };

  const addChild = () => {
    append({ name: '', dateOfBirth: null, gender: '' });
  };

  const personalDetails = useSelector(
    (state: any) => state.profileReducer.profileDetails,
  );

  const handleGenderSelect = (genderKey: string, index: number) => {
    setValue(`children.${index}.gender`, genderKey);
    clearErrors(`children.${index}.gender`);
  };

  const allFieldsFilled = (index: number) => {
    const child = watch(`children.${index}`);
    return (
      child?.name &&
      /^[A-Za-z\s]*$/.test(child.name) &&
      child?.dateOfBirth &&
      child?.gender
    );
  };

  return (
    <Box>
      <Box>
        <Typography size="h1" fontFamily="DMSerif">
          Tell us about your kids
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              maxHeight: '400px',
              overflowY: 'auto',
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          >
            {fields.map((field, index) => (
              <Box key={field.id} mt={3} mb={3}>
                <input
                  type="hidden"
                  {...register(`children.${index}.gender`, {
                    required: 'Gender selection is required',
                  })}
                  value={watch(`children.${index}.gender`) || ''}
                />

                <Box mt={3}>
                  <Controller
                    name={`children.${index}.name`}
                    control={control}
                    rules={{
                      required: "Baby's name is required",
                      pattern: {
                        value: /^[A-Za-z\s]*$/,
                        message:
                          "Special characters are not allowed in baby's name",
                      },
                    }}
                    render={({ field }) => (
                      <CustomInput
                        label="What is your baby's name"
                        placeholder="Enter your baby's name"
                        {...field}
                        required
                        fullWidth
                        error={Boolean(errors?.children?.[index]?.name)}
                        helperText={
                          errors?.children?.[index]?.name
                            ? errors.children[index].name.message
                            : ''
                        }
                      />
                    )}
                  />
                </Box>

                <Box mt={3}>
                  <Controller
                    name={`children.${index}.dateOfBirth`}
                    control={control}
                    rules={{ required: 'Date of birth is required' }}
                    render={({ field }) => (
                      <CustomDatePicker
                        label="Date of Birth"
                        {...field}
                        value={field.value ? dayjs(field.value) : null}
                        onChange={(date) =>
                          field.onChange(
                            date ? date.format('YYYY-MM-DD') : null,
                          )
                        }
                        error={Boolean(errors?.children?.[index]?.dateOfBirth)}
                        helperText={
                          errors?.children?.[index]?.dateOfBirth
                            ? errors.children[index].dateOfBirth.message
                            : ''
                        }
                        required
                      />
                    )}
                  />
                </Box>

                <Box
                  display="flex"
                  justifyContent="start"
                  flexWrap="wrap"
                  mt={3}
                >
                  {genders.map((gender) => (
                    <GenderCard
                      key={gender.key}
                      title={gender.title}
                      normalImage={gender.normalImage}
                      selectedImage={gender.selectedImage}
                      active={watch(`children.${index}.gender`) === gender.key}
                      onClick={() => handleGenderSelect(gender.key, index)}
                    />
                  ))}
                </Box>
                {errors?.children?.[index]?.gender && (
                  <Typography color="red" size="small">
                    {errors.children[index].gender.message}
                  </Typography>
                )}

                {index > 0 && (
                  <Box mt={2} display="flex" justifyContent="center">
                    <Button
                      type="button"
                      color="secondary"
                      onClick={() => remove(index)}
                    >
                      Delete kid
                    </Button>
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image src={addIcons} width={30} alt="icon" />
              <Box ml={1}>
                <Button
                  type="button"
                  onClick={addChild}
                  disabled={!allFieldsFilled(fields.length - 1)}
                >
                  <Typography size="btn" color="white">
                    Add Another Kid
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box mt={2}>
            <Button fullWidth type="submit">
              <Typography size="btn">Save</Typography>
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddChildren;
