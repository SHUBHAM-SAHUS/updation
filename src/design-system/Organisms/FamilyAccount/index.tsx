'use client';
import React, { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import styles from './style.module.scss';
import {
  Button,
  CustomInput,
  TransitionDialog,
  Typography,
} from '@/design-system/Atoms';
import { useRouter } from 'next/navigation';
import { useProfileHandler } from '@/hooks/API';
import { ProfileTypeCard } from '@/design-system/Molecules';
import { LANDING_SCREEN_SEEDDATA } from '@/utils';
import { FaArrowLeft } from 'react-icons/fa6';
import ExistingCard from '../ExistingCard';

type TypesTemplateProps = {
  cards?: any[];
  handleCardSelect?: (key: string) => void;
  title?: string;
  isChild?: boolean;
  handleClick?: () => void;
};

const FamilyAccount: React.FC<TypesTemplateProps> = ({ cards }) => {
  const router = useRouter();
  const [familyCode, setFamilyCode] = useState(''); // State to manage family code input
  const { familyaccount, familyLoading } = useProfileHandler();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleFamilyCodeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFamilyCode(event.target.value); // Update state when input value changes
    },
    [],
  );

  const handleSubmit = useCallback(() => {
    console.log('Family Code:', familyCode); // Handle form submission
  }, [familyCode]);

  const createNewFamilyHandler = useCallback(() => {
    // Your logic for creating a new family
    const payload = {
      landingScreen: LANDING_SCREEN_SEEDDATA.FAMILY_ACCOUNT_CREATE,
    };
    familyaccount(payload);
  }, []);

  const handleCardClick = useCallback((key: string) => {
    debugger;
    if (key === 'createNew') {
      debugger;
      createNewFamilyHandler();
    } else {
      setOpen(true);
    }
    debugger;

    // setOpen(true);
    // setSelectedCard(key);
  }, []);

  const handleClose = useCallback(
    (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
      setOpen(false);
    },
    [],
  );

  const handleAgree = useCallback(() => {
    // Handle agree action
    setOpen(false);
  }, []);

  const handleDisagree = useCallback(() => {
    // Handle disagree action
    setOpen(false);
  }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex' }} onClick={() => router.back()}>
        <FaArrowLeft size={30} className={styles.arrow01} />

        <Typography fontFamily="Poppins" size="subtitlew" textAlign="left">
          Are you a Parent or Caretaker
        </Typography>
      </Box>

      <Box className={styles.ProfileTypeCardWrp}>
        {cards?.map((card, index) => (
          <Box className={styles.ProfileTypeCard} key={card.key}>
            <ProfileTypeCard
              index={index} // Pass the index to determine order
              title={card.title}
              description={card.description}
              image={card.image}
              active={selectedCard === card.key}
              disabled={card.disabled}
              onClick={() =>
                // createNewFamilyHandler()
                handleCardClick(card.key)
              }
            />
          </Box>
        ))}
      </Box>

      <Box className={styles.accountList}>
        <Box mt={3}>
          <Typography size="paragraph">
            To join existing family get your family code:
          </Typography>
        </Box>

        <Box className={styles.instructions} mt={3}>
          <ol>
            <li>
              <Typography size="body">
                If your partner has a ZEVO account, you can connect your
                accounts by creating a family.
              </Typography>
            </li>

            <li>
              <Typography size="body">
                Activities, progress trackers, and all other features are synced
                when you create a family.
              </Typography>
            </li>

            <li>
              <Typography size="body">
                Family code is displayed on your partner's ZEVO account profile
                page. It looks like this:{' '}
                <span className={styles.code}>A1B23Y</span>
              </Typography>
            </li>
          </ol>
        </Box>
      </Box>

{/*     
      <Box mt={4}>
        <CustomInput
          label="Enter family code"
          placeholder="Enter family code"
          value={familyCode} // Bind input value to state
          onChange={handleFamilyCodeChange} // Handle input change
          className={styles.inputField}
          fullWidth
        />
      </Box>
      <Box mt={3}>
        <Button fullWidth type="submit" onClick={handleSubmit}>
          <Typography size="btn">Join existing family</Typography>
        </Button>
      </Box> */}

      <TransitionDialog
        open={open}
        title="Use Google's location service?"
        description="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        handleClose={handleClose}
        handleAgree={handleAgree}
        handleDisagree={handleDisagree}
        transitionDirection="up"
        fullWidth
        maxWidth="sm"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <ExistingCard/>

      </TransitionDialog>
    </Box>
  );
};

export default FamilyAccount;
