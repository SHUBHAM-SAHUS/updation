'use client';
import React, { useState, useCallback } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import styles from './style.module.scss';
import {
  Button,
  CustomDialog,
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
import { setExitingUser } from '@/lib/redux-services/ProfileSlice';
import { useDispatch } from 'react-redux';

type TypesTemplateProps = {
  cards?: any[];
  handleCardSelect?: (key: string) => void;
  title?: string;
  isChild?: boolean;
  handleClick?: () => void;
};

const FamilyAccount: React.FC<TypesTemplateProps> = ({ cards }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [familyCode, setFamilyCode] = useState(''); // State to manage family code input
  const { familyaccount, familyLoading } = useProfileHandler();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:767px)');
  const isTab = useMediaQuery('(max-width:992px)');

  const handleFamilyCodeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFamilyCode(event.target.value); // Update state when input value changes
    },
    [],
  );

  const handleSubmit = useCallback(() => {}, [familyCode]);

  const createNewFamilyHandler = useCallback(() => {
    // Your logic for creating a new family
    const payload = {
      landingScreen: LANDING_SCREEN_SEEDDATA.FAMILY_ACCOUNT_CREATE,
    };
    familyaccount(payload);
  }, []);

  const handleCardClick = useCallback((key: string) => {
    if (key === 'createNew') {
      setSelectedCard(key);
      createNewFamilyHandler();
      dispatch(setExitingUser(false));
    } else {
      dispatch(setExitingUser(true));
      setDialogOpen(true);
      // setOpen(true);
    }

    // setOpen(true);
    // setSelectedCard(key);
  }, []);

  const handleClose = useCallback(
    (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
      // setOpen(false);
    },
    [],
  );

  const handleDialogOpen = (index: number) => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Box>
      <Box
        className="toolbar_mob_res"
        sx={{ display: 'flex' }}
        onClick={() => router.back()}
        justifyContent={isTab ? 'center' : 'start'}
      >
        <FaArrowLeft size={30} className="arrow01" />

        <Box ml={2}>
          <Typography
            className="toolbar_mob_res_heading"
            fontFamily="Poppins"
            size="subtitlew"
            textAlign={isTab ? 'center' : 'left'}
          >
            Join Zevo family
          </Typography>
        </Box>
      </Box>

      <Box className={styles.ProfileTypeCardWrp}>
        {cards?.map((card, index) => (
          <React.Fragment key={card.key}>
            <Box className={styles.ProfileTypeCard}>
              <ProfileTypeCard
                index={index} // Pass the index to determine order
                title={card.title}
                description={card.description}
                image={card.image}
                active={selectedCard === card.key}
                disabled={card.disabled}
                onClick={() => handleCardClick(card.key)}
                isParentCards={true}
              />
            </Box>
            <Box>
              {index === 0 && (
                <Box>
                  <Typography
                    fontFamily="Poppins"
                    size={isMobile ? 'body' : 'subtitle'}
                    textAlign="center"
                    tagType="h3"
                    className={styles.lineClass}
                  >
                    <span className={styles.spanCls}>or</span>
                  </Typography>
                </Box>
              )}
            </Box>
          </React.Fragment>
        ))}
      </Box>

      <Box className={styles.accountList}>
        <Box mt={4}>
          <Typography className={styles.family_account_note_heading}>
            To join existing family get your family code:
          </Typography>
        </Box>

        <Box className={styles.instructions} mt={3}>
          <ol>
            <li>
              <Typography>
                If your partner has a ZEVO account, you can connect your
                accounts by creating a family.
              </Typography>
            </li>

            <li>
              <Typography>
                Activities, progress trackers, and all other features are synced
                when you create a family.
              </Typography>
            </li>

            <li>
              <Typography>
                Family code is displayed on your partner's ZEVO account profile
                page. It looks like this:{' '}
                <span className={styles.code}>A1B23Y</span>
              </Typography>
            </li>
          </ol>
        </Box>
      </Box>

      <CustomDialog open={dialogOpen} onClose={handleDialogClose}>
        <ExistingCard onClose={handleDialogClose} />
      </CustomDialog>
    </Box>
  );
};

export default FamilyAccount;
