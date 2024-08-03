import React, { useState, useEffect, useRef } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { Box, useMediaQuery } from '@mui/material';
import {
  Button,
  CustomDialog,
  CustomInput,
  Typography,
} from '@/design-system/Atoms';
import { CustomDatePicker, GenderCard } from '@/design-system/Molecules';
import styles from './style.module.scss';
import fatherIcon from '@/assets/Images/fatherIcon.png';
import fatherGenderColor from '@/assets/Images/fatherGenderColor.png';
import motherIcon from '@/assets/Images/motherIcon.png';
import MotherGenderColor from '@/assets/Images/MotherGenderColor.png';
import otherGender from '@/assets/Images/othersGender.svg';
import otherGenderColor from '@/assets/Images/othersGenderColor.svg';
import { useSelector } from 'react-redux';
import { useProfileHandler } from '@/hooks/API';
import { LANDING_SCREEN_SEEDDATA } from '@/utils';
import dayjs from 'dayjs';
import { FaArrowLeft } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';
import DeleteKids from '../DeleteKids';
import DeleteIcon from '@/assets/Images/delete_icon.svg'
import Image from 'next/image';
const genders = [
  {
    title: 'Boy',
    normalImage: fatherIcon,
    selectedImage: MotherGenderColor,
    key: 'BOY',
  },
  {
    title: 'Girl',
    normalImage: motherIcon,
    selectedImage: fatherGenderColor,
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
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTab = useMediaQuery('(max-width:992px)');

  const [childIndexToRemove, setChildIndexToRemove] = useState<number | null>(
    null,
  );
  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const { addChildren, isLoadingaddChildren } = useProfileHandler();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    clearErrors,
    watch,
    trigger,
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

  const addChild = async () => {
    const result = await trigger();
    if (result) {
      append({ name: '', dateOfBirth: null, gender: '' });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [fields]);

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

  const handleDialogOpen = (index: number) => {
    setChildIndexToRemove(index);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setChildIndexToRemove(null);
  };

  const removeChild = (index: number) => {
    remove(index);
  };

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name?.startsWith('children')) {
        if (touchedFields[name]) {
          trigger(
            name as
              | `children.${number}.name`
              | `children.${number}.dateOfBirth`
              | `children.${number}.gender`,
          );
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, trigger, touchedFields]);

  const handleFieldBlur = (
    name:
      | `children.${number}.name`
      | `children.${number}.dateOfBirth`
      | `children.${number}.gender`,
  ) => {
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
    trigger(name);
  };

  return (
    <Box>
      <Box>
        <Box className="toolbar_mob_res" sx={{ display: 'flex' }} onClick={() => router.back()}
          justifyContent={isTab ? 'center' : 'start'}>
          <FaArrowLeft size={30} className="arrow01" />

          <Box ml={2}>
            <Typography fontFamily="Poppins" size="subtitlew" textAlign="left" className="toolbar_mob_res_heading">
              Tell us about your kids
            </Typography>
          </Box>
        </Box>

        <Box mt={0} className="mainContainer" height="100%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              ref={containerRef}
              sx={{
                maxHeight: '525px',
                minHeight: '525px',
                overflowY: 'auto',
                paddingRight:'8px'
              }}
            >
              {fields.map((field, index) => (
                <Box key={field.id} mt={5} mb={3}>
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
                        required: "Kid's name is required",
                        pattern: {
                          value: /^[A-Za-z\s]*$/,
                          message:
                            "Special characters and numbers are not allowed in kid's name",
                        },
                        maxLength: {
                          value: 50,
                          message:
                            'Name should not be greater than 50 characters',
                        },
                      }}
                      render={({ field }) => (
                        <CustomInput
                          label="Kid’s Name"
                          placeholder="Enter name"
                          {...field}
                          required
                          fullWidth
                          error={Boolean(errors?.children?.[index]?.name)}
                          helperText={
                            errors?.children?.[index]?.name
                              ? errors.children[index].name.message
                              : ''
                          }
                          onBlur={() => handleFieldBlur(`children.${index}.name`)}
                          onChange={(e) => {
                            field.onChange(e);
                            if (e.target.value) {
                              clearErrors(`children.${index}.name`);
                            }
                          }}
                        />
                      )}
                    />
                  </Box>

                  <Box mt={3}>
                    <Controller
                      name={`children.${index}.dateOfBirth`}
                      control={control}
                      rules={{
                        required: 'Date of birth is required',
                        validate: (value) => {
                          if (!dayjs(value).isBefore(dayjs())) {
                            return 'Date of birth cannot be in the future';
                          }
                          return true;
                        },
                      }}
                      render={({ field }) => (
                        <CustomDatePicker
                          minAge={18}
                          label="Date of birth"
                          {...field}
                          value={field.value ? dayjs(field.value) : null}
                          onChange={(date) => {
                            field.onChange(
                              date ? date.format('YYYY-MM-DD') : null,
                            );
                            clearErrors(`children.${index}.dateOfBirth`);
                            handleFieldBlur(`children.${index}.dateOfBirth`); // Trigger validation on change
                          }}
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

                  <Box mt={2}>
                    <Typography size="sm">
                      Gender
                      <strong className={styles.mandertystar}>*</strong>:
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="start" flexWrap="wrap" className={styles.customflex_main_gender}>
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

                  {fields.length > 1 && (
                    <Box mt={2} display="flex" justifyContent="center" className={styles.delete_kid_box0}>
                      <button
                        className={styles.delete_kid_button}
                        type="button"
                        onClick={() => handleDialogOpen(index)}
                      >
                        {/* <FaTrash className={styles.icon} /> */}
                        <Image src={DeleteIcon} alt="icon"/>
                        <span>Delete kid</span>
                      </button>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          
          <Box className="btn_fixed_res">
              <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={3}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box ml={1}>
                    <button
                      className={styles.add_kid_button}
                      type="button"
                      onClick={addChild}
                    >
                      <span> + Add Another Kid</span>
                    </button>
                  </Box>
                </Box>
              </Box>
              <Box mt={3}>
                <Button fullWidth type="submit">
                  <Typography size="btn">Save</Typography>
                </Button>
              </Box>
            </Box>
          </form>
        </Box>

      </Box>
      <CustomDialog open={dialogOpen} onClose={handleDialogClose}>
        <DeleteKids
          handleDialogClose={handleDialogClose}
          removeChild={removeChild}
          childIndex={childIndexToRemove}
        />
      </CustomDialog>
    </Box>
  );
};

export default AddChildren;
